var AppContainer = require('../main.js');

var app = new AppContainer(__dirname, [
  'modules/module1',
  'modules/module2'
]);

console.log(app.module1method());
console.log(app.module2method());
