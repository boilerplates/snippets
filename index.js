var fs = require('fs');
var path = require('path');
var emmet = require('emmet');
var prettify = require('js-beautify').html;
var tabStops = require('emmet/lib/assets/tabStops');
var resources = require('emmet/lib/assets/resources');
var parser = require('emmet/lib/parser/abbreviation');
var _ = require('lodash');



function Snippets(cache) {
  this.cache = cache || {};
}

Snippets.prototype.set = function(key, value) {
  if (typeof key === 'object') {
    this.cache = _.extend({}, this.cache, key);
  } else {
    this.cache[key] = value;
  }
  emmet.loadSnippets(this.cache);
  return this;
};

Snippets.prototype.get = function(key) {
  if (!key) {
    return this.cache;
  }
  return this.cache[key];
};


Snippets.prototype.expand = function(abbr, options) {
  var opts = _.extend({profile: 'plain', pretty: true}, options);


  var html = tabStops.processText(parser.expand(abbr, opts));
  if (opts.pretty) {
    return this.prettify(html, opts);
  }
  return html;
};

Snippets.prototype.prettify = function(html, options) {
  return prettify(html, _.extend({
    indent_handlebars: true,
    indent_inner_html: true,
    preserve_newlines: false,
    max_preserve_newlines: 1,
    brace_style: 'expand',
    indent_char: ' ',
    indent_size: 2,
  }, options));
};

module.exports = Snippets;


var snip = function(name) {
  return require(path.resolve('lib', name));
};

var snippets = new Snippets();
snippets.set({
  'html': {
    'abbreviations': {
      'jq': '<scr' + 'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></scr' + 'ipt>',
      'demo': '<div id="demo"></div>',
      'nav': 'ul.nav>li*>a',
      'al': '<a !href="http://|">',
      'f1|f2': '<demo>'
    },
    'snippets': {
      "for": "for (var ${class} = 0; ${class} < ${id}.length; ${class}++) {\n\s|}",
      'dol': '\\$db->connect()\n\s\\$\\$\\$more dollaz$',
      'erb': '<%= |${child} %>'
    }
  },
  'xml': {
    'abbreviations': {
      'use': '<use xlink:href=""/>'
    }
  }
});
// snippets.load(snip('foundation.js'));
// snippets.load(snip('extended.js'));


// console.log(snippets.expand('zf-head', {prettify: true}));
console.log(snippets.expand('div>(header>ul>li*2>a)+footer>p>'));


var re = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

console.log('a/b/c/d/e/f/ghi.js'.match(re))