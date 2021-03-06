nw-nedb-rest-angular
=============================

Inspired by https://github.com/buberdds/node-webkit-nedb-rest-angular

Updated to Express 4.x, NeDB 1.x and Angular 1.3.15. Also, changed the demo from Items to Contacts.

AngularJS native desktop app (nw, nedb 1.x, express 4.x, rest, angular 1.3.15)

```
  git clone https://github.com/kevkha/nw-nedb-rest-angular.git
  cd nw-nedb-rest-angular
  npm install
  cd ..
```

<a href="https://github.com/rogerwang/node-webkit#downloads" target="_blank">Download</a> the prebuilt node-webkit binary for your platform and
use it to run the app.

```
  nw nw-nedb-rest-angular
```

Alternatively, you can cd into the directory where the project files and folders are and run this command:

```
  zip -r ../${PWD##*/}.nw *
```

This will create a .nw zip package that exists just in the folder just before the folder where your files exist.

Once the zip package is created, store it in the same folder as the node-webkit unpacked bundle and simply drag the .nw zip file to the "nw" executable.

Note. This solution is for linux.

To view other solutions, please consult:

https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps

