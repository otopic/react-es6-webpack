import React from 'react';

export default class ShowHeadline extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.headline}</p>
			</div>
		);
	}
}