import React from "react";
import Hog from "./Hog";

const HogList = props => {
	return (
		<div className="ui grid container">
			{props.hogs.map(singleHog => {
				return <Hog key={singleHog.name} hog={singleHog} />;
			})}
		</div>
	);
};

export default HogList;
