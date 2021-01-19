import React from 'react';
import './Footer.scss';
import icFB from '../../../Assets/Images/icFB.png';
import icYoutube from '../../../Assets/Images/icYoutube.png';

function Footer() {
	const HandleFb = (e) => {
		window.location.href = 'http://google.com';
	};

	return (
		<div className="footer-wrapper">
			<h4>Trường đại học Bách Khoa - đại học Đà Nẵng</h4>
			<h4>Khoa Công Nghệ Thông Tin</h4>
			<div>
				<img src={icFB} className="image-wrapper" alt="facebook" onClick={HandleFb} />

				<img src={icYoutube} className="image-wrapper" alt="youtube" onClick={HandleFb} />
			</div>
		</div>
	);
}

export default Footer;
