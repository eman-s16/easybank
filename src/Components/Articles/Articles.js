import React from 'react';
import './ArticlesCss.css';
import { ArticlesItems } from '../data.js';
function Articles() {
	return (
		<div className="Articles">
			<div className="Container">
				<div className="wrapper">
					<h2>Latest Articles</h2>
					<div className="ArticlePart">
						{ArticlesItems.map((item, index) => {
							return (
								<div className="itemArticle" key={index}>
									<img src={`./././images/${item.srcImg}`} alt="item" />
									<div>
										<h6>{item.person}</h6>
										<h3>{item.title}</h3>
										<p>{item.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Articles;
