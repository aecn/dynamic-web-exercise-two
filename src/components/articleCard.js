import React from "react";

function ArticleCard({title, date, text, link}) {
    return (
        <div className="articleCard">
            <div className="articleCard-image" img src="imageSrc" img alt="imageAlt"></div>
            <div className="articleCard-content">
                    <h2 className="articleCard-title">Article Title</h2>
                    <p className="articleCard-date">Wednesday, August 22, 2019</p>
                    <p className="articleCard-text">Lorem ipsum</p>
                <a className="articleCard-link" href="#">Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard;