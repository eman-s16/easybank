import React from 'react';
import './ServeriesCss.css';
import { servicesItems } from '../data.js';
function Serveries() {
	return (
		<div className="Serveries">
			<div className="Container">
				<div className="wrapper">
					<h2>Why choose Easybank?</h2>
					<p className="pText">
						We leverage Open Banking to turn your bank account into your financial hub. Control your
						finances like never before.
					</p>
					<div className="ServPart">
						{servicesItems.map((item, index) => {
							return (
								<div className="itemSrev" key={index}>
									<img src={`./././images/${item.srcImg}`} alt="item" />
									<h3>{item.title}</h3>
									<p>
										{item.content}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Serveries;
