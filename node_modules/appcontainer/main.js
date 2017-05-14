var path = require('path');

var AppContainer = function(cwd, modules) {
  this.cwd = cwd;

  modules.map((module) => {
    this.use(module);
  });
}

AppContainer.prototype.use = function(module) {
  require(path.join(this.cwd, module)).call(this, this);
}

module.exports = AppContainer;
