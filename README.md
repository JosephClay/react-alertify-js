# react-alertify-js

## Component

```js
const { Alertify } = require('react-alertify-js')

// place where you'd like in your app
module.exports = () => <Alertify />;
```


## Usage

Calling alertify returns a `Promise` that will resolve if the alert is
confirmed otherwise it will reject.

```js
alertify.alert('Hello World!');

alertify.confirm('Hello World!', 'Can you hear me?');
	.then(yesPath);
	.catch(noPath);

alertify.save({ title: 'Hello World!', ok: 'Yes', cancel: 'No' })
	.then(yesPath)
	.catch(noPath);

alertify.prompt('Hello World!', { message: 'Can you hear me?', ok: 'Yes', cancel: 'No' })
    .then(value => yesPath(value))
    .catch(noPath);
```


## Options

`title: String`
The title

`message: String`
The message

`buttons: Array`
Presets for the button text. `['ok', 'cancel']`

`placeholder: String`
Placeholder text for the prompt input

`value: String`
Default value for the prompt input

`onOk: Function`
Callback function that is called if the alert is confirmed.

`onCancel: Function`
Callback function that is called if the alert is cancelled.

`onClose: Function`
Callback function that is called if the alert is closed.

## Styles

### CSS

An `index.css` file is located in the root of the project.

### #SASS

An `index.scss` file is located in the root of the project.