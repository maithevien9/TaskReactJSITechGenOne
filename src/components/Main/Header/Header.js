import React, { useState } from 'react';
import Modal from 'react-modal';
import './Header.scss';
import icMenu from '../../../Assets/Images/icMenu.png';
import HTML from './HTML/HTML';
import { setCheckMenu } from '../../../config/Redux/ActionCreators';
import { connect } from 'react-redux';

function Header(props) {
	const [ modalIsOpen, setModalIsOpen ] = useState(false);

	const handleCloseHTMLView = () => {
		setModalIsOpen(false);
	};
	const HandleOpenHTMLView = () => {
		setModalIsOpen(true);
	};
	const handleCheckMenu = () => {
		props.setCheckMenu();
	};

	return (
		<div className="header-wrapper">
			<div className="header-left-wrapper">
				<h1 className="style-text-header" onClick={HandleOpenHTMLView}>
					HTML
				</h1>
				<h1 className="style-text-header" onClick={HandleOpenHTMLView}>
					CSS
				</h1>
				<h1 className="style-text-header" onClick={HandleOpenHTMLView}>
					Ruby
				</h1>
				<h1 className="style-text-header" onClick={HandleOpenHTMLView}>
					PHP
				</h1>
				<h1 className="style-text-header" onClick={HandleOpenHTMLView}>
					Python
				</h1>
			</div>
			<div />
			<div className="header-right-wrapper">
				<h1 className="style-text-header-right" onClick={handleCheckMenu}>
					<img src={icMenu} alt="Menu" className="image-header-wrapper" />
				</h1>
			</div>
			<Modal isOpen={modalIsOpen} className="modal-html">
				<HTML handleCloseHTMLView={handleCloseHTMLView} />
			</Modal>
		</div>
	);
}

export default connect(null, { setCheckMenu })(Header);
