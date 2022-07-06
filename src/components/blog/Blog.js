import { useParams } from "react-router-dom"
import { getBlog } from "../../fakeData/Fake"
import './blog.scss'
const Blog = () => {
    let params = useParams()
    let blog = getBlog(parseInt(params.blogId), 10)
    return (
        <article className="post">
            <div>
                <div className="absolute-bg" style={{ backgroundImage: `url(${blog.articleImage})` }}></div>
            </div>
            <div className="post__container">
                <span className="post__category">{blog.writer}: {blog.id}</span>

                <div className="post__content">
                    <header>
                        <h1 className="post__header"><span>{blog.title}</span></h1>
                    </header>

                    <p className="post__text"><h3>- Hafedh</h3>article : {blog.content}</p>
                </div>
            </div>
        </article>
    )
}
export default Blog