import React from "react";
import './home.css'

export function Home()
{
    return(
        <div className="home_container">
            <div className="text">
                <h1 id='intro'>Online Tutoring With An <br />Experienced, <br />High-Performing <br />High School Student</h1>
            </div>
            <div className="image">
                <img id='img' src='https://media.istockphoto.com/id/1034464980/photo/mother-helping-daughter-with-homework.jpg?s=612x612&w=0&k=20&c=ypkpyR_Sry5VZ2wAE8E2Q2qTzMqMY3V-N52VSeD5Ya0=' />
            </div>
            <div>
                <h1 className="stext">Learn from a student who cares about helping you learn and grow. I offer tutoring services in a variety of subjects, such as Pre-Calculus, US History, Chemistry, or English literature. </h1>
            </div>
        </div>
        

    )
}