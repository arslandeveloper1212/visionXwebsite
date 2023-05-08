import React, {useState} from 'react'
import "./Contact.css"
import { toast } from 'react-toastify';
const ContactForm = () => {
    const [detail, SetDetail] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
    })

    const HandleChange = (e) =>{
            const name = e.target.name
            const value = e.target.value

            console.log(name,value)

            SetDetail({...detail, [name]:value})
    }


    const HandleForm =async(e) =>{
        e.preventDefault();

        const {name,email,phone,company,subject,message}= detail;
      const res = await fetch ("/login",{
        method: "POST",
        headers:{
          "content-type": "application/json"
        },
        body:JSON.stringify({
            name,email,phone,company,subject,message
        })
      });

      const result = await res.json();
      if(result.status === 422 || !result){
        alert("not login")
        console.log("not registered successfully")
      }else{
      
        // toast.success("Registration Successfully");
        alert("login successfuly")
        SetDetail({...detail, name: "",email:"",phone: "",company:"",subject:"",message:"" })
      }

        
    }
    return (
        <div className='contact_background text-white'>
            <div className='container'>
                <div className='row d-flex justify-content-center '>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <div className='contact_handle'>
                        <h1 className='text-center custom_color'>Contact Form</h1>
                            <form method='POST' onSubmit={HandleForm}>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input type="name" name='name' value={detail.name} onChange= {HandleChange}  className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" name='email' value={detail.email} onChange= {HandleChange}  className="form-control" />
                                </div>
                                <div className='mb-3'>
                                    <label for="phone">Phone</label>
                                    <input type="name" name='phone' value={detail.phone} onChange= {HandleChange} className="form-control" />
                                </div>
                                <div className='mb-3'>
                                    <label for="company">Company</label>
                                    <input type="company" name='company' value={detail.company} onChange= {HandleChange} className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <label for="subject" className="form-label">Subject</label>
                                    <input type="text" name='subject' value={detail.subject} onChange= {HandleChange} className="form-control" />
                                </div>

                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" name='message' value={detail.message} onChange= {HandleChange} id="exampleFormControlTextarea1" placeholder='Message' rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex justify-content-center align-items-center ">
                               
                                <button type="submit" className="btn_sm_here col-6 m-0 ">Submit</button>
                                <button type="submit" className="btn_sm_here m-2 col-6 ">Cancel</button>
                                </div>
                                </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
