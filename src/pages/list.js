import React from "react";
import ArticleCard from "../components/articleCard";
import Data from "../components/data";

function List() {
    return (
        <div class="pageWrapper">
            <h1>Articles</h1>
            {Data.map((article, ) => (
                <ArticleCard
                //key={i}
                imgSrc={article.image.alt}
                imgAlt={article.image.src}
                date={article.publishedDate}
                title={article.title}
                text={article.blurb}
                //link="Read More"
                />
            ))}
        </div>
    );
}

export default List;