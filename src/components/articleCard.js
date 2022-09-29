import React from "react";

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title }) {
    return (
        <div className="articleCard">
            <div className="articleCard-image"> 
            <img src={imageSrc} alt={imageAlt} /></div>
            <div className="articleCard-content">
                    <h2 className="articleCard-title">{title}</h2>
                    <p className="articleCard-date">{date}</p>
                    <p className="articleCard-blurb">{blurb}</p>
                <p className="articleCard-link">
                    <a href={`/article/${id}`}>Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;