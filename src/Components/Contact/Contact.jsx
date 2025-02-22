import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e36706f-2feb-4d6f-9daa-f6595d01ce50");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res)
      alert(res.message)
    }
  };


  return (
    <div id='contact' className='contact'>
      
      <div className="contact-tittle">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />

      </div>
      <div className="contact-section">
        <div className="contact-leftsection">
<h1>Let's Talk</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, necessitatibus quas\</p>
<div className="contact-details">
    <div className="contact-detail">
        
<img src={mail_icon} alt="" />
<p>dev.sheryaramir@gmail.com </p>
    </div>
    <div className="contact-detail">
    <img src={call_icon} alt="" />  
    <p>03144480335</p>
    </div>
    <div className="contact-detail">
    <img src={location_icon} alt="" />
    <p>Gilgit Pakistan</p>
    </div>
</div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
<label htmlFor="">Your Name</label>
<input type="text" placeholder='Enter you name' name='name'/>
<label htmlFor="">Your Email</label>
<input type="email" placeholder='Enter you Email' name='email'/>
<label htmlFor="">Write you message Here !</label>
<textarea name="message" rows="8" placeholder='Enter you message'></textarea>

<button type='submit' className="contact-submit">
    Submit
</button>


        </form>
      </div>
    </div>
  )
}

export default Contact
