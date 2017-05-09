import React, { Component } from 'react';
import ShowHeadline from './ShowHeadline';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<ShowHeadline headline="Headline." />
		</div>
		);
	}
}
