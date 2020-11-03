import { Avatar } from '@material-ui/core'
import React from 'react'
import './Testimonies-Cart-Items.css'

const TestimoniesCartItems = ({className, avatar, name, status, firstParagraph, secondParagraph}) => {
    return (
        <div className="wrapper" >
            <div className={className}>
                <div className="profile">
                    <Avatar src={avatar}/>
                    <div className="details">
                        <h3>{name}</h3>
                        <p>{status}</p>
                    </div>
                </div>
                
                <div className="first-paragraph">{firstParagraph}</div>
                <div className="second-paragraph">{secondParagraph}</div>
            </div>
            
        </div>
    )
}

export default TestimoniesCartItems
