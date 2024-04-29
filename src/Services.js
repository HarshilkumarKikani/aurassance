import React from 'react'
import websiteimage from './Assets/website.jpg'
import adsimage from './Assets/ads.jpg'
import logoimage from './Assets/logodata.jpg'

function Services() {
    return (
        <div className='card-main'>
            <div className="card container">
                <div className='mt-5'>
                    <h1>Services</h1>
                    {/* first */}
                    <div className="card-body main-card-body d-flex row my-5">
                        <div className="image-container  col-md-12 col-lg-6">
                            <img src={websiteimage} alt="Website" />
                        </div>
                        <div className="content col">
                            <div className='content-main mt-3 p-1'>
                                <h2>Website Creation</h2>
                                <p>A strong online presence is essential in today's competitive landscape. Our team of skilled designers and software developers will create a professional, user-friendly website that reflects your brand identity and engages your target audience.</p>
                                <h3>Pricing</h3>

                                <div className='d-flex justify-content-around align-items-center mt-3 p-1 '>
                                    {
                                        Webdata.map((val) => {
                                            return <div className='card pricing-card '>
                                                <div className='card-body'>
                                                    <h3>{val.title}</h3>
                                                    <p>{val.conent}</p>
                                                    <h4>{val.price}</h4>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* second */}
                    <div className="card-body main-card-body d-flex row">
                        <div className="image-container  col-md-12 col-lg-6">
                            <img src={adsimage} alt="ads" />
                        </div>
                        <div className="content col">
                            <div className='content-main mt-3 p-1'>
                                <h2>Google & Facebook Ads</h2>
                                <p>Want to reach potential customers precisely when they're searching for the products or services you offer? Our Google Ads experts will craft targeted campaigns that maximize your return on investment and drive new customers to your business.</p>
                                <h3>Pricing</h3>

                                <div className='d-flex justify-content-around align-items-center mt-3 p-1 '>
                                    {
                                        AdsData.map((val) => {
                                            return <div className='card pricing-card'>
                                                <div className='card-body'>
                                                    <h3>{val.title}</h3>
                                                    {/* <p>{val.conent}</p>/ */}
                                                    <h4>{val.price}</h4>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* third */}
                    <div className="card-body main-card-body d-flex row">
                        <div className="image-container  col-md-12 col-lg-6">
                            <img src={logoimage} alt="logo" />
                        </div>
                        <div className="content col">
                            <div className='content-main mt-3 p-1'>
                                <h2>Logo Design</h2>
                                <p>Your logo is the face of your brand. Our talented designers will create a memorable and impactful logo that captures your business's essence and sets you apart from the competition.</p>
                                <h3>Pricing</h3>

                                <div className='d-flex justify-content-center gap-2 align-items-center mt-3 p-1 '>
                                    {
                                        LogoData.map((val) => {
                                            return <div className='card pricing-card'>
                                                <div className='card-body'>
                                                    <h3>{val.title}</h3>
                                                    <p>{val.conent}</p>
                                                    <h4>{val.price}</h4>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

const Webdata = [
    {
        title: 'Basic',
        conent: '3-5 RESPONSIVE WEB PAGES ',
        price: "$349.99"
    },
    {
        title: 'Standard',
        conent: '6-9 RESPONSIVE WEB PAGES ',
        price: "$399.99"
    },
    {
        title: 'Premium',
        conent: '3-5 RESPONSIVE WEB PAGES ',
        price: "$499.99"
    }
]

const AdsData = [
    {
        title: 'Basic',
        conent: '3-5 RESPONSIVE WEB PAGES ',
        price: "$249"
    },
    {
        title: 'Standard',
        conent: '3-5 RESPONSIVE WEB PAGES ',
        price: "$349"
    },
    {
        title: 'Premium',
        conent: '3-5 RESPONSIVE WEB PAGES ',
        price: "$399"
    },
]

const LogoData = [
    {
        title: 'Basic',
        conent: 'Single logo ',
        price: "$14.99"
    },
    {
        title: 'Standard',
        conent: '3 Logo ',
        price: "$24.99"
    }
]