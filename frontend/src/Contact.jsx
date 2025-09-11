import { useState } from "react";
import "../style/contact.css";

export const Contact = () => {
    const [save,setSave]=useState({
        name:"",
        email:"",
        message:"",
    });

    const handleinput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setSave((prev)=>({...prev,[name]:value}));
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch('http://localhost:3000/save/contact/details',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(save),
        })
        console.log(save);

        if(response.ok){
            alert('We will contact you shortly');
        }
        else{
            alert('At this moment we are not able to contact you');
        }
    }


  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handlesubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" required onChange={handleinput} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" onChange={handleinput} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message" name="message" onChange={handleinput} required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
