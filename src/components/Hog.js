import React from "react";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

export default class Hog extends React.Component {
	state = {
		showDetails: false
	};

	toggleShowDetails = () => {
		this.setState({
			showDetails: true
		});
	};

	hideDetails = () => {
		this.setState({
			showDetails: false
		});
	};

	render() {
		const image = require(`../hog-imgs/${this.props.hog.name
			.toLowerCase()
			.replace(/ /gi, "_")}.jpg`);
		return (
			<div className="ui link cards">
				<div className="card">
					<div className="image">
						<img
							onClick={this.toggleShowDetails}
							src={image}
							alt={this.props.hog.name}
						/>
					</div>
					<div className="content">
						<a className="header">{this.props.hog.name}</a>
					</div>
					{this.state.showDetails && (
						<div className="extra content" onClick={this.hideDetails}>
							<p>Speciality: {this.props.hog.specialty}</p>
							<p>Weight: {this.props.hog[weight]}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}
