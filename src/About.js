import React from 'react'
import teamimage from './Assets/team.jpg'
function About() {
    return (
        <div className='container'>
            <div className='about-main row p-5'>
                <h1>About us</h1>
                <div className='col-12 col-md-12 col-lg-6'>
                    <p>
                        Welcome to Aurassance, your one-stop solution for digital brand elevation. We specialize in crafting captivating websites that captivate audiences, implementing targeted Google and Facebook ad campaigns to skyrocket your online presence, and designing unique logos that embody your brand's essence. With our expert team at the helm, we'll not only boost your visibility but also ensure your brand stands out in today's competitive digital landscape.
                    </p>
                </div>
                <div className='team-image col'>
                    <img src={teamimage} alt='teamimage' />
                </div>
            </div>
        </div>
    )
}

export default About