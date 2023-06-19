import { Link } from "react-router-dom"
import './header.css' 
export function Header(){
    return(
    <div className="hwrapper">
        <ul className='header'>
        <li id='title'>Nikhil Mani Tutoring</li>
            <li className='elm' id='home'> <Link to='/'>Home</Link></li>
            <li className='elm' id='about'> <Link to='/about'>About</Link></li>
            <li className='elm' id='contact'> <Link to='/contact'>Contact</Link></li>
        </ul>
            
        </div>
        )
}