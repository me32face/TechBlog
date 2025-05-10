import React, { useEffect, useState } from 'react'
import Navbar from '../STATIC/Navbar';
import "../../Assets/Styles/ViewUsers.css"
import axios from 'axios';
import Footer from '../STATIC/Footer';

function ViewUsers() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios
        .post('http://localhost:3003/TechBlog/ViewUsers')
        .then((res)=>{
            console.log(res);
            setUsers(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
            alert("Error fetching users");
        })
        
    },[])

  return (
    <div>
        <Navbar/>
        <div className='View-User-main-page'>
            <div className='UserDetailsTable'>
                <table>
                <thead className="BorderSetting-viewUsersPage">
                    <tr>
                        <th className="thBorderSetting-viewUsersPage">Name</th>
                        <th className="thBorderSetting-viewUsersPage">Username</th>
                        <th className="thBorderSetting-viewUsersPage">Email</th>
                        <th className="thBorderSetting-viewUsersPage">.</th>
                    </tr>
                    </thead>

                    <tbody>
                        {users.map((user)=>(
                            <tr key={user._id}>
                                <td>{user.fullName}</td>
                                <td>{user.username}</td>    
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-info ViewProfileButton"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#modal-${user._id}`}
                                    >
                                        View Profile
                                    </button>
                                    <div className="modal fade" 
                                        id={`modal-${user._id}`} 
                                        tabIndex="-1" 
                                        aria-labelledby={`modalLabel-${user._id}`} 
                                        aria-hidden="true">
                                        <div className="modal-dialog modal-xl custom-modal-width modal-dialog-centered">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id={`modalLabel-${user._id}`}>Profile</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                            <div className="profile-container container">
                                                <div className="profile-card row justify-content-center align-items-center shadow p-4 rounded">
                                                    <div className="col-md-4 text-center">
                                                        <img
                                                        src={`http://localhost:3003/${user?.image?.filename}`}
                                                        alt="No Profile Picture Uploaded"
                                                        className="profile-picture w-100 h-auto mb-3 rounded"
                                                        />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="profile-info">
                                                        <h3 className="profile-name mb-3">{user.fullName}</h3>
                                                        <p className="profile-id mb-2"><strong>ID: </strong>{user._id}</p>
                                                        <p className="profile-email mb-2"><strong>Email: </strong>{user.email}</p>
                                                        <p className="profile-username mb-2"><strong>Username: </strong>{user.username}</p>
                                                        <p className="profile-username mb-2"><strong>Password: </strong>{user.password}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ViewUsers
