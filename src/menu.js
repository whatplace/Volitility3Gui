//
//	Christopher Place
//	CS498 Capstone
//  Filename: menu.js
//
//  Overview:
//  Creates menu template to be loaded into electron app at initialization.
//  Commands run in this section occur outside of Chrome console.
//

const template = [
  {
    label: "File",
    submenu: [
      {
        // Updates Volatility 3 from GitHub
        label: "Update Volatility",
        id: "updateVolatility",
        click() {
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
        },
      },
      {
        type: "separator",
      },
      {
        // Installs any python dependencies w/ pip
        label: "Resolve Dependencies",
        id: "pipPython",
        click() {
          let { PythonShell } = require("python-shell");
          const path = require("path");
          // Prod
          //const scriptPath = path.join("resources","app","src","pythonDepend.py");
          // Dev
          const scriptPath = path.join("src", "pythonDepend.py");

          PythonShell.run(scriptPath, null, function (err) {
            console.log(
              err
                ? "Error downloading pip dependencies"
                : "Success downloading pip dependencies"
            );
          });
        },
      },
    ],
  },

  {
    label: "View",
    submenu: [
      {
        role: "reload",
      },
      {
        role: "toggledevtools",
      },
      {
        type: "separator",
      },
      {
        role: "resetzoom",
      },
      {
        role: "zoomin",
      },
      {
        role: "zoomout",
      },
      {
        type: "separator",
      },
      {
        role: "togglefullscreen",
      },
    ],
  },

  {
    role: "window",
    submenu: [
      {
        role: "minimize",
      },
      {
        role: "close",
      },
    ],
  },
];

module.exports = template;
