import React from "react";
import { getBlogs } from "../../fakeData/Fake";
import { Link as NavLink, Outlet } from "react-router-dom";
import BlogCard from "../../components/blogCard/blogcard";
import './Allblogs.css'

const AllBlogs = () => {
    let blogs = getBlogs()
    return (
        <>
            <div className="cardContainer">
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }<Outlet />
            </div>
        </>
    )
}
export default AllBlogs
