import React from 'react';
import './headerCss.css';
function header() {
	function clickMenu(e) {
		let val = document.getElementById('menu');
		let btn = document.getElementById('btnMunePhone');
		let closeBtn = document.getElementById('closePhone');
		let background = document.getElementById('grey');

		e.preventDefault();
		val.classList.add('phoneStatus');
		btn.style.display = 'none';
		closeBtn.classList.remove('close');
		closeBtn.classList.add('closePhone');
		background.style.display = 'block';
	}
	function closeMenu(e) {
		let val = document.getElementById('menu');
		let btn = document.getElementById('btnMunePhone');
		let closeBtn = document.getElementById('closePhone');
		let background = document.getElementById('grey');

		e.preventDefault();
		val.classList.remove('phoneStatus');
		btn.style.display = 'block';
		closeBtn.classList.remove('closePhone');
		closeBtn.classList.add('close');
		background.style.display = 'none';
	}

	return (
		<div className="header ">
			<div className="Container">
				<div className="Box">
					<span id="grey" className="grey" />
					<div className="logo">
						<img src="./././images/logo.svg" alt="logo" />
					</div>
					<div id="menu" className="menu">
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Contact</li>
							<li>Blog</li>
							<li>Careers</li>
						</ul>
					</div>
					<div className="btnHeader">
						<span>Request Invite</span>
					</div>
					<div id="btnMunePhone" className="btnMunePhone" onClick={clickMenu}>
						<span />
						<span />
						<span />
					</div>
					<div id="closePhone" className="close" onClick={closeMenu}>
						<img src="./././images/icon-close.svg" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default header;
