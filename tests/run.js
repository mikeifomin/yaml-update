#!/usr/bin/env node

var yaml = require('js-yaml');
var editor = require('..').edit;
var assert = require('assert');
var fs = require('fs');

fs.readdirSync(__dirname + '/resources').forEach(function(file) {
   if (!file.match(/\.yaml$/)) return;
	console.log('running', file);
	var data = fs.readFileSync(__dirname + '/resources/'+file, 'utf8').split('---\n');
	assert(data.length === 2);
	editor(data[0], JSON.stringify(yaml.safeLoad(data[1])), data[1]);
});

