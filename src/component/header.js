import React from 'react';
import { Link as ScrollLink } from 'react-scroll';



export default function header() {
    return (
        <>
            <div className='header-area'>
                <ul className='header-options container'>
                <li><ScrollLink
                        activeClass="active" to="Intro" spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={600}
                        delay={0}>
                        About
                    </ScrollLink>
                </li>

                <li>
                    <ScrollLink
                    activeClass="active" to="Form" spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={600}
                    delay={0}>
                
                    Form 
                    </ScrollLink>
                </li>
                <li><i className="fa-solid fa-house"></i></li>
                <li>
                    <ScrollLink
                    activeClass="active" to="Personal" spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={600}
                    delay={0}>
                        Personal
                    </ScrollLink>
                </li>
                    <li>Comunity</li>
                </ul>
            </div>
        </>

    )
}