//
//	Christopher Place
//	CS498 Capstone
//  Filename: interpreter.js
//
//  Utilized for obtaining results from vol.py
//

const $ = require("jquery");
const { stdout } = require("process");
const dt = require("datatables.net")();
const dtbs = require("datatables.net-bs4")(window, $);

require("jszip");
require("pdfmake");
require("datatables.net-bs4")();
require("datatables.net-buttons-bs4")();
require("datatables.net-buttons/js/buttons.html5.js")();
require("datatables.net-colreorder-bs4")();
require("datatables.net-responsive-bs4")();

function getData() {
  const path = require("path");
  let { PythonShell } = require("python-shell");

  if (
    typeof document.getElementsByTagName("input")[0].files[0] === "undefined"
  ) {
    console.log("Error file not defined");
    //document.getElementById("pythonError").textContent = 'Hello World';
    document.getElementById("pythonError").innerHTML = "<strong>Error:</strong> File not defined.";
    $("#pythonError").show();
  } else {
    filePath = document.getElementsByTagName("input")[0].files[0].path;
    command = document.getElementById("command").value;
    console.log(command);
    var options = {
      //Change script path before exporting with npm make
      scriptPath: path.join("src", "volatility3"),
      //scriptPath : path.join('resources','app','src','volatility3'),
      pythonOptions: ["-u"],
      args: ["-qrjson", "-f", filePath, command],
      pythonPath: "C:\\Python38\\python.exe",
      //args : ['-qrjson','frameworkinfo.FrameworkInfo'],
    };

    let pyshell = new PythonShell("vol.py", options);

    var logs = "";
    pyshell.on("message", function (message) {
      logs = logs + message;
    });

    pyshell.on("error", function (err) {
      console.log(" error ", err);
      document.getElementById("pythonError").innerHTML =
        "<strong>Error:</strong> Volatility encountered a problem running command.";
      $("#pythonError").show();
    });

    pyshell.end(function (code, signal) {
      if ((code = 1)) {
        let data = "";
        if (logs == "") {
        } else {
          data = JSON.parse(logs + "]");
          console.log(data);

          // generate DataTables columns dynamically
          let columns = [];
          Object.keys(data[0]).forEach((key) =>
            columns.push({ title: key, data: key })
          );
          console.log(columns);
          // Create DataTable

          if ($.fn.DataTable.isDataTable("#output")) {
            console.log("Destroying DT");
            $("#output").DataTable().clear().destroy();
            $("#output").empty();
            console.log(
              "Table Status: " + $.fn.DataTable.isDataTable("#output")
            );
          }

          $("#output").DataTable({
            dom: "Bfrtip",
            data: data,
            columns: columns,
            processing: true,
            search: {
              regex: true,
              smart: false,
            },
            buttons: ["csv", "excel", "pdf"],
          });
        }
      }
    });
  }
}
