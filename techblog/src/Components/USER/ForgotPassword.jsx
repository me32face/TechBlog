import React, { useState } from 'react'
import Navbar from '../STATIC/Navbar';
import axios from 'axios';

function ForgotPassword() {

    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:""
    });

    const onValueChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    console.log(formData);

    const SubmitForm=(e)=>{
        e.preventDefault();

        if(formData.password.length<6){
            alert("The password should contain at least 6 letters");
            return;
        }

        if(formData.password!==formData.confirmPassword){
            alert("Recheck the password. The password and the confirm password should be the same.")
            return;
        }
        
        // if(formData.password===formData.confirmPassword){
        //     alert("Password Updated successfully")
        //     return;
        // }

        axios
        .post('http://localhost:3003/TechBlog/ForgotPassword',formData)
        .then((res)=>{
            console.log(res);
            
            if(res.data.status===200){
                alert(`Password updated successfully`)
            }
            else if(res.data.status===400){
                alert(`! Email id not registered !`)
            }
            else if(res.data.status===404){
                alert(`Un usual error. Contact admin`)
            }
              
        })
    }
        

    return (
    <div>
        <Navbar/>
        <div className="form-background">
            <div className="Reg-Form-Main">
                <h2 className="form-title">Reset Password</h2>
                <form>

                <div className="form-group">
                    <label className='userRegistrationlabel' htmlFor="email">Email Address:</label>
                    <input className='userRegistrationinput' type="email" id="email" name="email" value={formData.email} onChange={onValueChange} placeholder="Enter your email" required/>
                </div>

                <div className="form-group">
                    <label className='userRegistrationlabel' htmlFor="password">Password:</label>
                    <input className='userRegistrationinput' type="password" id="password" name="password" value={formData.password} onChange={onValueChange} placeholder="Enter a password" required/>
                </div>

                <div className="form-group">
                    <label className='userRegistrationlabel' htmlFor="confirmPassword">Confirm Password:</label>
                    <input className='userRegistrationinput' type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={onValueChange} placeholder="Confirm your password" required/>
                </div>

                <button onClick={SubmitForm} type="submit">Submit</button>

                </form>
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword
