import React, { useState, useEffect, useContext } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import './Main.scss';
import { useTranslation } from 'react-i18next';
import StudentService  from "../../config/API/StudentService";

import { connect } from 'react-redux';

function Main(props) {
	const { t, i18n } = useTranslation();
	const [ name, setName ] = useState('');
	const [ age, setAge ] = useState('');
	const value = useContext(React.createContext({ foo: 'bar' }));

	const [listStudent, setListStudent] = useState([]);

	useEffect(
		() => {
			getStudents();
		},
		[listStudent]
	);

	function getStudents() {
		StudentService.getStudents().then((res) => {
			if (res) {
				setListStudent(res);
			}
		});
	};
	function handleTextName(e) {
		setName(e.target.value);
	}
	function handleTextAge(e) {
		setAge(e.target.value);
	}
	function handleAddStudent() {
		var params = {
			name: name,
			age: age
		};
		StudentService.addStudent(params)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => console.log(error));
	}
	function handleChangeLanguageEN() {
		i18n.changeLanguage('en');
		console.log(value);
	}
	function handleChangeLanguageVn() {
		i18n.changeLanguage('vn');
	}

	return (
		<div className="main-wrapper">
			<Header />

			<div className="sroll-main-view">
				<div className="main-view-wrapper">
					<div>
						<h1>{t('Hello')}</h1>
						<button onClick={handleChangeLanguageEN}>english</button>
						<button onClick={handleChangeLanguageVn}>vietnamese</button>
						{
							listStudent.map((item) => (
							<div key={ item.id }>
								<h5>{ item.name }</h5>
								<h5>{ item.age }</h5>
							</div>
							))
						}
						<div className="input-view-wrapper">
							<h4>Name</h4>
							<input type="text" name="name" onChange={handleTextName} value={name} />
						</div>
						<div className="input-view-wrapper">
							<h4>Age</h4>
							<input type="text" name="age" onChange={handleTextAge} value={age} />
						</div>

						<button onClick={handleAddStudent}>Add Student</button>
					</div>
					{props.CheckMenuReducer ? <Menu /> : <div />}
				</div>

				<Footer />
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		StudentReducer: state.StudentReducer,
		CheckMenuReducer: state.CheckMenuReducer
	};
}
export default connect(mapStateToProps)(Main);
