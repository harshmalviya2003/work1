import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-us">
            <header className="contact-us-header">
                <h2>Contact Us</h2>
                <h1>Let’s Start a Conversation</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim.
                </p>
            </header>
            <div className="contact-info">
                <div className="working-hours">
                    <h3>Working Hours</h3>
                    <p>Monday To Friday</p>
                    <p>9:30 AM to 8:00 PM</p>
                    <p>Our Support Team is available 24/7</p>
                </div>
                <div className="contact-details">
                    <h3>Contact Us</h3>
                    <p>020 7993 2905</p>
                    <p>hello@freest.com</p>
                </div>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Your Email" required />
                <select required>
                    <option value="">Query Related</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="general">General Inquiry</option>
                </select>
                <textarea placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );

}

export default Contact
