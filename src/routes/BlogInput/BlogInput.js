import React from "react";
import "./BlogInput.scss"
const BlogInput = () => {
    return (
        <div >
            <h2>THIS IS A DEDICATED SPACE FOR WRITERS</h2>
            <div className="container">
                <fieldset className="fieldset">
                    <form className="form">
                        <label className="_label">Article Image URL:</label>
                        <input className="_input" type="text" placeholder="URL to input ??" />
                        <label className="_label">Article title:</label>
                        <input className="_input" type="text" placeholder="Your title goes here " />
                        <label className="_label">Article writer:</label>
                        <input className="_input" type="text" placeholder="Your name goes here" />
                        <label className="_label">Article's content:</label>
                        <textarea className="_text" placeholder="You can use html tags for the article layout" rows={15} cols={70} />
                        <button className="button" type="button">Publish</button>
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default BlogInput;