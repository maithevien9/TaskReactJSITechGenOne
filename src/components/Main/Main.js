import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import './Main.scss';
import getStudents from '../../config/API/get-students-api';

function Main() {
	const [ CheckDataMenu, setCheckDataMenu ] = useState(false);

	const handleMenu = () => {
		setCheckDataMenu(!CheckDataMenu);
	};
	useEffect(() => {
		async function FuncGetMovies() {
			getStudents()
				.then((json) => {
					console.log(json);
				})
				.catch((error) => console.log(error));

			//cach2
			//  await fetch('http://localhost:8080/api/students')
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
