import { Link } from "react-router-dom"
import './header.css' 
export function Header(){
    return(
    <div className="hwrapper">
        <ul className='header'>
        <li id='title'>Nikhil Mani Tutoring</li>
            <li className='elm' id='home'> <Link to='Tutoring/'>Home</Link></li>
            <li className='elm' id='about'> <Link to='Tutoring/about'>About</Link></li>
            <li className='elm' id='contact'> <Link to='Tutoring/contact'>Contact</Link></li>
        </ul>
            
        </div>
        )
}