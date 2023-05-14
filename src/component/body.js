import React from "react";
import Intro from "./bodycomponent/intro";
import Form from "./bodycomponent/form";
import Person from "./bodycomponent/person";
import { Link as ScrollLink } from 'react-scroll';


export default function Body(){

    return(
        <div className="body-area container">
             <section id="Intro"><Intro/></section>
             <section id="Form"><Form/></section>
             <section id="Personal"><Person/></section>


        </div>
    )
}