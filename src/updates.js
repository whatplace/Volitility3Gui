//
//	Christopher Place
//	CS498 Capstone
//  Filename: updates.js
//
//  Overview:
//  Handles all changes on screen
//
//

// Updates File label whenever a file is selected to be displayed on Screen
$(document).on("change", ".custom-file-input", function (event) {
  $(this).next(".custom-file-label").html(event.target.files[0].name);
});

function pluginUpdate(){
  let { PythonShell } = require("python-shell");
  const path = require("path");
  var options = {
    //Disable pythonPath before export
    pythonPath: "C:\\Python38\\python.exe",
    //Switch before export
    scriptPath: path.join("src"),
    //scriptPath : path.join('resources','app','src'),
  };
  PythonShell.run("plugins.py", options, function (err, plugins) {
    console.log(err ? "Error Updating Plugin List" : "Plugin List Updated");
  });

  $.getJSON("./plugins.json", function (data) {
    $.each(data, function (key, command) {
      $("#command").append(
        $("<option></option>")
          .attr("value", command.Command)
          .attr("class", command.OS)
          .text(command.Name)
      );
    });
  });
}

function volatilityUpdate(){
  const download = require("download-git-repo");
          download(
            "volatilityfoundation/volatility3",
            "./src/volatility3",
            function (err) {
              console.log(
                err
                  ? "Error downloading latest git updates for Volatility"
                  : "Success downloading latest git updates for Volatility"
              );
            }
          );
}



// Once the html page loads, query python to have the possible plugins gathered and added to command list
$(document).ready(function () {
  pluginUpdate();
});

// Updates the command list based on platform selected
$("#platform").change(function (event) {
  $("#command").removeAttr("disabled");
  let platformChosen = document.getElementById("platform");
  let value = platformChosen[platformChosen.selectedIndex].value;
  let commandList = document
    .getElementById("command")
    .querySelectorAll("option");

  commandList.forEach(function (os) {
    if (os.classList.contains(value)) {
      os.style.display = "block";
      $("#command").removeAttr("disabled");
    } else {
      os.style.display = "none";
    }
  });
});

// Removes pop-up for errors when clicked
$("#pythonError").on("click", function (event) {
  $("#pythonError").hide();
});

//Future save buttons
$("#save").on("click", function (event) {
  console.log("test");
});
