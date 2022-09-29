import React from "react";
import ArticleCard from "../components/articleCard";
import Data from "../components/data";

function List() {
    return (
        <div class="pageWrapper">
            <h1>Articles</h1>
            {Data.map((article, i) => (
                <ArticleCard
                key={i}
                text={article.blurb}
                date={article.publishedDate}
                imageSrc={article.image.url}
                imageAlt={article.image.alt}
                title={article.title}
                //link="Read More"
                />
            ))}
        </div>
    );
}

export default List;