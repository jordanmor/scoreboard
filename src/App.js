import React, { Component } from "react";
import Scoreboard from './Scoreboard';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				My App
				<Scoreboard />
			</div>
		);
	}
}

export default App;