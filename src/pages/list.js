import React from "react";
import ArticleCard from "../components/articleCard";

function List() {
    return (
        <div class="pageWrapper">
            <h1>Articles</h1>
            <ArticleCard 
                imgSrc="source"
                imgAlt="alt"
                date="Wednesday, August 22, 2019" 
                title="Article Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                link="Read More"
            />
            <ArticleCard 
                imgSrc="source"
                imgAlt="alt"
                date="Wednesday, August 22, 2019" 
                title="Article Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                link="Read More"
            />
            <ArticleCard
                imgSrc="source"
                imgAlt="alt"
                date="Wednesday, August 22, 2019" 
                title="Article Title"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                link="Read More" />
        </div>
    );
}

export default List;