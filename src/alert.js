const instance = require('./instance');

const defaults = {
	type: 0, // alert, confirm, save, prompt
	title: '',
	message: '',
	ok: 'ok',
	cancel: 'cancel',
	placeholder: '' // Only used in prompts
};

const getButtons = function(config) {
	const { ok, cancel, type } = config;
	return type === 'alert' ? [ok] : [ok, cancel];
};

const alert = function(opts) {
	const config = Object.assign({}, defaults, opts);

	return new Promise(function(resolve, reject) {
		const state = Object.assign({}, config, {
			active: true,
			buttons: getButtons(config),
			onCancel: () => reject(new Error('cancel')),
			onClose: () => reject(new Error('close')),
			onOk: value => resolve(value)
		});

		instance.get().setState(state);
	});
};

module.exports = opts => Promise.resolve(opts).then(alert);
