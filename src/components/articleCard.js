import React from "react";

function ArticleCard({ date, imageAlt, imageSrc, text, title }) {
    console.log(imageSrc);
    return (
        <div className="articleCard">
            <div className="articleCard-image"> 
            <img src={imageSrc} alt={imageAlt} /></div>
            <div className="articleCard-content">
                    <h2 className="articleCard-title">{title}</h2>
                    <p className="articleCard-date">{date}</p>
                    <p className="articleCard-text">{text}</p>
                <a className="articleCard-link" href="#">Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard;