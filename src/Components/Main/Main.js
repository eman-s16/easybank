import React from 'react';
import './mainCss.css';
function Main() {
	return (
		<div className="Main">
			<div className="Container">
				<div className="Box">
					<div className="mainText">
						<h1>Next generation digital banking</h1>
						<p>
							make your financial life online. Your Easybank account will be a one-stop-shop for spending,
							saving, budgeting, investing, and much more.
						</p>
						<div className="btnHeader">
							<span>Request Invite</span>
						</div>
					</div>
					<div className="mainImg">
						<img src="./././images/image-mockups.png" alt="mockups"  />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
