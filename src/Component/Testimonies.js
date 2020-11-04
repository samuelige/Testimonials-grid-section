// import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react'
import TestimoniesCartItems from './Testimonies-Cart-Items';
// import {ReactComponent as BgpatternQuotation} from '../images/bg-pattern-quotation.svg';
// import car from './images/car.png'
import './Testimonies.scss'

const Testimonies = () => {
    const [state, setState] = useState(
        [
            {
                id: uuidv4(),
                className: "box-1",
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4UQf-AqZwcjDan7kK7Eyt11zNxBoYu12p2A&usqp=CAU',
                name: "Daniel Clifford",
                status: 'Verifield Graduate',
                firstParagraph: `I received a job offer midcourse, and the subjects I learned were current, if not more so, in the company I joined. 
                                I honestly feel I got every penny's worth.`,
                secondParagraph: `"I was an EMT for many years before I joined the bootcamp. 
                                I've been looking to make a transition and have heard some people who had an amazing experience here. 
                                I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                                The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, 
                                I've successfully switched careers, working as a Software Engineer at a VR startup."`,
            },
            {
                id: uuidv4(),
                className: "box-2",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOotiQQxSg2YuJyqMUthCWVbW2kUBE9FkQA&usqp=CAU",
                name: "Jonathen Walters",
                status: 'Verifield Graduate',
                firstParagraph: `The team was very supportive and kept me motivated`,
                secondParagraph: `"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. 
                                This was one of the best investments I've made in myself."`
            },
            {
                id: uuidv4(),
                className: "box-3",
                avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
                name: "Kira Whittle",
                status: 'Verifield Graduate',
                firstParagraph: `Such a life-changing experience. Highly recommended!`,
                secondParagraph: `"Before joining the bootcamp, I've never written a line of code. 
                                I needed some structure from professionals who can help me learn programming step bu step. 
                                I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. 
                                The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. 
                                The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. 
                                In fact, I've often referred to it during interviess as an example of my developemnt experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"`
            },
            {
                id: uuidv4(),
                className: "box-4",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvMC7c2pu-KQ9d-eHTmxp1qSG_p3607DPlVQ&usqp=CAU",
                name: "Jeanette Harmon",
                status: 'Verifield Graduate',
                firstParagraph: `An overall wonderful and rewarding experience`,
                secondParagraph: `"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."`
            },
            {
                id: uuidv4(),
                className: "box-5",
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
                name: "Patrick Abrams",
                status: 'Verifield Graduate',
                firstParagraph: `Awesome teaching support from TAs who did the bootcamp themselves. 
                                Getting guidance from them and learning from their expriences was easy.`,
                secondParagraph: `"The staff seem genuinely concerned about my progress which I find really refreshing. 
                                The program gave me the confidence necessary to be able to go out in the world and present myself as capable junior developer. 
                                The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."`
            },
            

        ]
    )
    return (
        <div className='grid-container'>
            {
                state &&
                state.map((item) => 
                    <TestimoniesCartItems key={item.id} className={item.className} avatar={item.avatar} name={item.name} status={item.status} firstParagraph={item.firstParagraph} secondParagraph={item.secondParagraph} />
                )
            }
        </div>
    )
}

export default Testimonies
