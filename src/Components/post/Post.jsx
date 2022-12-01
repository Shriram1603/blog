import "./post.css"
import { Link, Router } from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
          <img src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg" alt="" className="postImg" />
          <div className="postInfo">
            <div className="postCats">
              <span className="postCat">Music
              </span>
              <span className="postCat">Life
              </span>
            </div>
            <Link className="link" to="/post/:id">
            <span className="postTitle">Lorem ipsum dolor sit
            </span></Link>
            <hr />
            <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
        
          </p>
        </div>
      );
    }