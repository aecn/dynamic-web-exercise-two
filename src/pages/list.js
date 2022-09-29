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
                blurb={article.blurb}
                date={article.publishedDate}
                id={article.id}
                imageSrc={article.image.url}
                imageAlt={article.image.alt}
                title={article.title}
                />
            ))}
        </div>
    );
}

export default List;