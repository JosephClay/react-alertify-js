const React = require('react');
const classnames = require('classnames');
const instance = require('./instance');
const AlertBox = require('./AlertBox.jsx');
const body = global.document.body;
const noop = () => {};

module.exports = class Alertify extends React.Component {
	constructor() {
		super();

		this.onOk = this.onOk.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onEscape = this.onEscape.bind(this);

		this.state = {
			active: false,
			value: '',
			title: '',
			message: '',
			type: 0,
			placeholder: '',
			buttons: [],
			onCancel: noop,
			onClose: noop,
			onOk: noop
		};
	}

	componentWillMount() {
		instance.set(this);
		body.addEventListener('keydown', this.onEscape, false);
	}

	componentWillUnmount() {
		instance.set(undefined);
		body.removeEventListener('keydown', this.onEscape);
	}

	onOk(e) {
		e.preventDefault();
		e.stopPropagation();

		this.state.onOk(this.state.value);
		this.exit();
	}

	onCancel(e) {
		e.preventDefault();
		e.stopPropagation();

		this.state.onCancel();
		this.exit();
	}

	onEscape(e) {
		// escape
		if (e.keyCode !== 27) { return; }

		e.preventDefault();
		e.stopPropagation();

		this.state.onClose();
		this.exit();
	}

	onClose(e) {
		e.preventDefault();
		e.stopPropagation();

		this.state.onClose();
		this.exit();
	}

	exit() {
		this.setState({
			active: false,
			value: ''
		});
	}

	render() {
		const { active } = this.state;

		return (
			<div className={ classnames('react-alertify-container', { active }) }>
				{active ?
				<AlertBox
					{...this.state}
					onOk={ this.onOk }
					onCancel={ this.onCancel }
				/>
				: undefined}

				<div className="react-alertify-mask" onClick={ this.onClose } />
			</div>
		);
	}
};