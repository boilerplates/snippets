var fs = require('fs');
var path = require('path');
var emmet = require('emmet');
var prettify = require('js-beautify').html;
var tabStops = require('emmet/lib/assets/tabStops');
var resources = require('emmet/lib/assets/resources');
var parser = require('emmet/lib/parser/abbreviation');
var _ = require('lodash');

var snippets = function(name) {
  return require(path.resolve('lib', name));
};

var foundation = snippets('foundation.js');
var extended = snippets('extended.js');

emmet.loadSnippets(snippets('foundation.js'));
emmet.loadSnippets(snippets('extended.js'));


var snippets = function (argument) {
  // body...
}


snippets.expand = function(abbr, options) {
  var opts = _.extend({profile: 'plain'}, options);

  var html = tabStops.processText(parser.expand(abbr, opts), {
    escape: function(ch) {
      return ch;
    },
    tabstop: function(data) {
      console.log(arguments)
      return data.placeholder || '';
    }
  });

  return prettify(html, {
    indent_handlebars: true,
    indent_inner_html: true,
    preserve_newlines: false,
    max_preserve_newlines: 1,
    brace_style: 'expand',
    indent_char: ' ',
    indent_size: 2,
  });
};

module.exports = snippets;


console.log(snippets.expand('zf-head'));
