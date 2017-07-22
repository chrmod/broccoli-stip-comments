var Filter = require('broccoli-persistent-filter');
var strip = require('strip-comments');

function StripComments(inputNode, options) {
  options = options || {};
  Filter.call(this, inputNode, {
    annotation: options.annotation
  });
  this.stripOptions = options.stripOptions || {};
}
StripComments.prototype = Object.create(Filter.prototype);
StripComments.prototype.constructor = StripComments;

StripComments.prototype.extensions = ['js'];
StripComments.prototype.targetExtension = 'js';

StripComments.prototype.processString = function(content) {
  return strip(content, this.stripOptions);
};

module.exports = StripComments;
