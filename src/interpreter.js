//
//	Christopher Place
//	CS498 Capstone
//  Filename: interpreter.js
//
//  Overview:
//  Utilized for obtaining results from vol.py
//  Results are returned and merged back into JSON from Stdio
//  Results are passed into a dataframe
//  Errors are returned as an error banner
//

const $ = require("jquery");

require("datatables.net-bs4")();
require("datatables.net-responsive-bs4")();
require("download-git-repo");

//function to run python interpreter and display as a datatable
function getData() {
  const path = require("path");
  let { PythonShell } = require("python-shell");

  if (
    typeof document.getElementsByTagName("input")[0].files[0] === "undefined"
  ) {
    console.log("Error file not defined");
    document.getElementById("alertError").innerHTML =
      "<strong>Error:</strong> File not defined.";
    $("#alertError").show();
  } else {
    filePath = document.getElementsByTagName("input")[0].files[0].path;
    command = document.getElementById("command").value;
    var options = {
      //Disable pythonPath before export
      //Replace scriptPath before export
      pythonPath: "C:\\Python38\\python.exe",
      scriptPath: path.join("src", "volatility3"),
      //
      //scriptPath : path.join('resources','app','src','volatility3'),
      //
      pythonOptions: ["-u"],
      args: ["-qrjson", "-f", filePath, command],
      //args : ['-qrjson','frameworkinfo.FrameworkInfo'],
    };

    console.log(options);
    let pyShell = new PythonShell("vol.py", options);

    //Log the output of the message for datatable into a string (Comming in Json Format through STDIO)
    var logs = "";
    pyShell.on("message", function (message) {
      logs = logs + message;
    });

    //Returns error if volatility has an error.
    //To be expanded to have it clickable with greater detail.
    pyShell.on("error", function (err) {
      console.log(" error ", err);
      document.getElementById("alertError").innerHTML =
        "<strong>Error:</strong> Volatility encountered a problem running command.";
      $("#alertError").show();
    });

    pyShell.end(function (code, signal) {
      if ((code = 1)) {
        let data = "";
        //Error nothing is passed vars are cleared
        if (logs == "") {
        } else {
          //Appends final ']' to json query as it is chopped by PythonShell
          data = JSON.parse(logs + "]");
          //console.log(data);

          // Generate DataTables columns dynamically based on JSON key
          let columns = [];
          Object.keys(data[0]).forEach((key) =>
            columns.push({ title: key, data: key })
          );
          //console.log(columns);

          // Checks to see if table currently exists and deletes before next is created
          if ($.fn.DataTable.isDataTable("#output")) {
            console.log("Destroying DT");
            $("#output").DataTable().clear().destroy();
            $("#output").empty();
            console.log(
              "Table Status: " + $.fn.DataTable.isDataTable("#output")
            );
          }
          // Create DataTable
          $("#output").DataTable({
            data: data,
            columns: columns,
            processing: true,
            search: {
              regex: true,
              smart: false,
            },
          });
        }
      }
    });
  }
}

//Function to be created to save json as a csv, excel or straight json
//To all be used to save logs?
function exportData(format, data) {}
