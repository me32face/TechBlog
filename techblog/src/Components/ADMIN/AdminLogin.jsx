import React from 'react'
import "../../Assets/Styles/AdminLogin.css"

function AdminLogin() {
  return (
    <div className='mainDiv'>
        <div className='AdminNavbar'>
          <h2 className='TechblogLogo' >TechBlog</h2>
          <ul>
            <li className='AdminNavbarMenu'><a className='AdminNavbarMenuLink' href="">Home</a></li>
          </ul>
        </div>

        <div className='Admin-ContentArea'>
          <form className='AdminLoginFormDiv'>
              <h3 className='Welcome-Admin'>Welcome Admin</h3>

              <div>
                <label htmlFor="adminUsername" className='adminUsernameClass' >Username : </label>
                <input type="text" id="adminUsername" name='adminUsername' required/>
              </div>

              <div>
                <label htmlFor="adminPassword" className='adminPasswordClass' >Password : </label>
                <input type="text" id="adminPassword" name='adminPassword'required/>
              </div>

              <div className='AdminLoginDiv' >
                <button className='AdminLoginBtn btn btn-danger' type='submit'>Login</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin
