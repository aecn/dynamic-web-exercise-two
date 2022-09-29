import React, { useMemo } from "react";

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title }) {

    const articleDate = useMemo(() => {
        if (!date) return '';
        const parsedDate = new Date(date);
        return parsedDate.toDateString();
     }, [date]);

    return (
        <div className="articleCard">
            <div className="articleCard-image"> 
            <img src={imageSrc} alt={imageAlt} /></div>
            <div className="articleCard-content">
                    <h2 className="articleCard-title">{title}</h2>
                    <p className="articleCard-date">{articleDate}</p>
                    <p className="articleCard-blurb">{blurb}</p>
                <p className="articleCard-link">
                    <a href={`/article/${id}`}>Read More</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;