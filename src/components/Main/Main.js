import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import './Main.scss';
import getStudents from '../../config/API/get-students-api';
import postStudents from '../../config/API/post-students-api';
function Main() {
	const [ CheckDataMenu, setCheckDataMenu ] = useState(false);
	const [ dataStudents, setDataStudents ] = useState([]);
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');

	const handleMenu = () => {
		setCheckDataMenu(!CheckDataMenu);
	};
	useEffect(() => {
		function FuncGetMovies() {
			getStudents()
				.then((json) => {
					setDataStudents(json);
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

	function handleTextName(e) {
		setName(e.target.value);
	}
	function handleTextAge(e) {
		setAge(e.target.value);
	}
	function handleAddStudent() {
		postStudents(name, age)
			.then((json) => {
				console.log(json);
				setDataStudents(dataStudents.concat(json));
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className="main-wrapper">
			<Header handleMenu={handleMenu} />
			<div className="sroll-main-view">
				<div className="main-view-wrapper">
					<div>
						{dataStudents != null ? (
							dataStudents.map((e) => (
								<div key={e.id}>
									<h5>{e.name}</h5>
									<h5>{e.age}</h5>
								</div>
							))
						) : (
							<div />
						)}
						<div className="input-view-wrapper">
							<h4>Name</h4>
							<input type="text" name="name" onChange={handleTextName} value={name} />
						</div>
						<div className="input-view-wrapper">
							<h4>Age</h4>
							<input type="text" name="age" onChange={handleTextAge} value={age} />
						</div>

						<button onClick={handleAddStudent}>Add Student</button>
						<h5>{process.env.REACT_APP_URL_IP}2</h5>
					</div>
					{CheckDataMenu ? <Menu /> : <div />}
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Main;
