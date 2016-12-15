const React = require('react');
const ReactDOM = require('react-dom');
const alertify = require('../index');
const { Alertify } = require('../index');
const mount = document.querySelector('#mount');
const $ = function(selector, fn) {
	document.querySelector(selector).addEventListener('click', fn);
};
const defaults = {
	title: 'hello world',
	message: 'i are alert'
};

ReactDOM.render(React.createElement(Alertify, null), mount);

$('[data-alert]', function() {
	alertify.alert(defaults);
});
$('[data-confirm]', function() {
	alertify.confirm(defaults);
});
$('[data-save]', function() {
	alertify.save(defaults);
});
$('[data-prompt]', function() {
	alertify.prompt(defaults);
});