import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import './Main.scss';
import getMovies from '../../config/API/get-movies-api';

function Main() {
	const [ CheckDataMenu, setCheckDataMenu ] = useState(false);

	const handleMenu = () => {
		setCheckDataMenu(!CheckDataMenu);
	};
	useEffect(() => {
		async function FuncGetMovies() {
			getMovies()
				.then((json) => {
					console.log(json);
				})
				.catch((error) => console.log(error));

			//cach2
			//  await fetch('https://reactnative.dev/movies.json')
			// .then((response) => response.json())
			// .then((json) => console.log(json))
			// .catch((error) => console.error(error))
		}
		FuncGetMovies();
	}, []);

	return (
		<div className="main-wrapper">
			<Header handleMenu={handleMenu} />
			<div className="sroll-main-view">
				<div className="main-view-wrapper">
					<h3> </h3>
					{CheckDataMenu ? <Menu /> : <div />}
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Main;
