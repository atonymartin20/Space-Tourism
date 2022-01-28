import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Crew from './components/crew';
import Destination from './components/destination';
import Tech from './components/tech';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='app-outside-div'>
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					<Route path='/tech' element={<Tech />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='*' element={<Homepage />} />
				</Routes>
			</div>
		);
	}
}

export default App;