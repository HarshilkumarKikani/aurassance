import React, { useState } from 'react';
import axios from 'axios';

function Contact() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        servicesInterested: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.country || !formData.servicesInterested || !formData.message) {
                alert('Please fill in all fields');
                return;
            }
            const response = await axios.post('http://localhost:5000/submitform', {
                fullName: formData.fullName,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                country: formData.country,
                servicesInterested: formData.servicesInterested,
                message: formData.message
            });
            if (response.status === 200) {
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    country: '',
                    servicesInterested: '',
                    message: ''
                });
                alert('Form submitted successfully!');

            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }

    };

    return (
        <div className='contact-main'>
            <h3 className='mt-3 text-center'>Contact Us</h3>

            <section className='mt-3'>
                <form onSubmit={handleSubmit}>
                    <h4>Request a call for an appointment!</h4> <br />
                    <label>Full Name</label>
                    <input
                        type='text'
                        name='fullName'
                        placeholder='Enter your name'
                        value={formData.fullName}
                        onChange={handleChange}
                    />


                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <label>Phone Number</label>
                    <input
                        type='number'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        pattern='[0]*'
                    />

                    <label>Country</label>
                    <input
                        type='text'
                        name='country'
                        placeholder='Enter your phone Country'
                        value={formData.country}
                        onChange={handleChange}
                    />


                    <label>Services Interested</label>
                    <select
                        name='servicesInterested'
                        value={formData.servicesInterested}
                        onChange={handleChange}
                    >
                        <option value=''>Select services interested</option>
                        <option value='Website development'>Website development</option>
                        <option value='Google & Facebook Ads'>Google & Facebook Ads</option>
                        <option value='Logo Design'>Logo Design</option>
                    </select>


                    <label>Your message</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <div>
                        <button className='btn bg-info' type='submit'>
                            Submit
                        </button>
                    </div>

                </form>

            </section>

        </div>
    );
}

export default Contact;
