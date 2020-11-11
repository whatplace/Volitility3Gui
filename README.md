# Volatility3GUI


Volatility3GUI is an implemenation of the commandline tool Volatility 3

### Components
  - [Python 3]()
  - [Volatility3](https://github.com/volatilityfoundation/volatility3)
  - [ElectronJS](https://www.electronjs.org/) 
  - [jQuery](https://jquery.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Datatables](https://datatables.net/)


### Packaging commands

  - Windows 64-bit Build
      ```bash
      electron-packager . volatility3Gui --platform win32 --arch x64 --prune=true --icon=src/icon.ico --out release-builds/
      ```


  - Linux Build
      ```bash
      electron-packager . volatility3Gui --platform linux --arch x64 --prune=true --out release-builds/
      ```

  
