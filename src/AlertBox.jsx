const React = require('react');
const classnames = require('classnames');

module.exports = function({
	type,
	title,
	message,
	value,
	placeholder,
	buttons,
	onOk,
	onCancel
}) {
	const [ok, cancel] = buttons;

	return (
		<article className={ classnames('react-alertify', `alert-type-${type}`) }>
			<div className="react-alertify-content">
				{title ?
				<h1 className="react-alertify-title">
					{ title }
				</h1>
				: undefined}

				{message ?
				<p className="react-alertify-message">
					{ message }
				</p>
				: undefined}

				{type === 'prompt' ?
				<input
					type="text"
					className="react-alertify-input"
					value={ value }
					placeholder={ placeholder }
					autoFocus={ true }
				/>
				: undefined}

				{buttons.length === 1 ?
				<nav className="react-alertify-nav">
					<button
						className="react-alertify-btn"
						data-success
						data-single
						onClick={ onOk }>
						{ ok }
					</button>
				</nav>
				:
				<nav className="react-alertify-nav">
					<button
						className="react-alertify-btn"
						data-danger
						data-double
						onClick={ onCancel }>
						{ cancel }
					</button>
					<button
						className="react-alertify-btn"
						data-success
						data-double
						onClick={ onOk }>
						{ ok }
					</button>
				</nav>
				}
			</div>
		</article>
	);
};