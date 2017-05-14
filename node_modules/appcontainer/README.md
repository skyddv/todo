# appcontainer
Simple IoC container intended for splitting up your node app into modules

## Defining the Application Container
```javascript
var AppContainer = require('appcontainer');

// Define your app as an instance of AppContainer and specify the modules to load.
var app = new AppContainer(__dirname, [
  // maps to file ./app/module1.js
  'app/module1',
  // maps to file ./app/module2.js  
  'app/module2',
]);

// Include an additional module later on.
app.use('app/module3');

// The app is now an singleton object comprising of methods, variables and subobjects 
// defined by the modules themselves.
app.module1method();
app.module2method();
```
## Defining a module
```javascript
module.exports = function(app) {
  // app === this, use the one you prefer.
  // you have access to this.cwd which references the path of the App Container.
  app.module1method = function() {
    return 'beep';
  }
}
```
That's it!
