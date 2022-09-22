import React from "react";

function Article() {
    return (
        <main>
            <header className="article-header">
                <h1 className="article-title">Article Title</h1>
                <p className="article-date">date</p>
                <h4 className="article-blurb">blurb</h4>
            </header>
            <section className="article-section">
                <p className="article-text">lorem ipsum</p>
                <h2 className="article-h2">Header Two Inserted</h2>
                <p className="article-text">lorem ipsum</p>
                <h3 className="article-h3">Header Three Inserted</h3>
                <p className="article-text">lorem ipsum</p>
                <p className="article-text">lorem ipsum</p>
            </section>
        </main>
    );
}

export default Article;