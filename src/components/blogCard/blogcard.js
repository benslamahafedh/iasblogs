import React from "react";
import './blogCard.css'
import { Link } from "react-router-dom";

const BlogCard = (props) => {
    return (
        <div>
            <div className="card transition">
                <h2 id="h2card" className="transition">{props.blog.title}</h2>
                <p>{props.blog.content.slice(0, 90)}</p>
                <div className="cta-container transition"><Link to={`${props.blog.id}`} className="cta">Read More</Link></div>
                <div class="card_circle transition" style={{
                    background: `url(${props.blog.articleImage}) no-repeat center bottom`,
                    backgroundColor:'green',
                    backgroundSize: 'cover',
                    height: '400px',
                    marginLeft: '-75px',
                    marginTop: '-270px',
                    position: 'absolute',
                    width: '450px',
                }}></div>
        </div>
        </div >
    )
}


export default BlogCard;