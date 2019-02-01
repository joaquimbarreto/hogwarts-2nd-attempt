import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

class App extends Component {
	state = {
		hogs: hogs,
		filterGreased: false,
		sort: ""
	};

	handleChangeSort = newSort => {
		this.setState({ sort: newSort });
	};

	sortHogs = hogs => {
		switch (this.state.sort) {
			case "name":
				return hogs.sort((a, b) => a.name.localeCompare(b.name));
			case "weight":
				return hogs.sort((a, b) => a[weight] - b[weight]);
			default:
				return hogs;
		}
	};

	handleToggleGreased = () => {
		this.setState({ filterGreased: !this.state.filterGreased });
	};

	greasedFiltered = () => {
		const filteredHogs = this.state.filterGreased
			? this.state.hogs.filter(hog => hog.greased)
			: this.state.hogs.slice();
		return filteredHogs;
	};

	render() {
		const filterHogs = this.greasedFiltered();
		const sortedHogs = this.sortHogs(filterHogs);
		return (
			<div className="App">
				<Nav
					toggleGreased={this.handleToggleGreased}
					changeSort={this.handleChangeSort}
				/>
				<HogList hogs={sortedHogs} />
			</div>
		);
	}
}

export default App;
