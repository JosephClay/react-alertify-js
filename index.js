const alert = require('./src/alert');
const Alertify = require('./src/Alertify.jsx');
const overload = require('overload-js');

const generateByType = type => {
	return overload()
		.args(Object)
		.use(function(obj) {
			return alert(Object.assign({ type }, obj));
		})
		.args(String)
		.use(function(title) {
			return alert({ type, title });
		})
		.args(String, String)
		.use(function(title, message) {
			return alert({ type, title, message });
		})
		.args(String, Object)
		.use(function(title, obj) {
			return alert(Object.assign({ type }, obj));
		})
		.args(String, String, Object)
		.use(function(title, message, obj) {
			return alert(Object.assign({ type, title, message }, obj));
		});
};

module.exports = Object.assign(generateByType('alert'), {
	alert: generateByType('alert'),
	confirm: generateByType('confirm'),
	save: generateByType('save'),
	prompt: generateByType('prompt'),

	Alertify,
	Component: Alertify
});