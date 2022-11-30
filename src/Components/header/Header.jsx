import './header.css'
import cover from './headerImg/cover.jpg'
// import Image from 'react-bootstrap/Image'
export default function Header() {
  return (
    <div className="header">
      <div className="headertitles">
      <span className="headertitlesm">A sensational Blog</span>
        <span className="headertitlelg">CRIMSON YUSHA</span> 
         
      </div>
      <img src={cover} alt=""  className='headerimg'/>
    </div>
  )
}
