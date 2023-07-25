import picture from '../assets/picture.jpeg'
import './about.css'
export function About()
{
    return(
        <>
        <div className='about_container'>
        <div className='image'>
                <img id='aimg'src={picture} />
            </div>
           <br></br>
            <div className="text">
                <h3>Nikhil is a rising junior. He loves to learn and to teach. He takes a rigorous courseload (AP and Honors) while maintaining a 4.0 GPA.</h3>
                <h3>He founded a tutoring club at his high school to help under-achieving students succeed in math He also tutors SAT and Algebra 1 online on a platform affiliated with Khan Academy called Schoolhouse</h3>
                <h3></h3>
                <h3>In his free time, Nikhil enjoys playing tennis, programming, and reading. </h3>
            </div>
            
        </div>
        
        </>
        
        
        
    )
}