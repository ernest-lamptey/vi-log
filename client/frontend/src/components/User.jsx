import React from 'react'
import "../styles/User.scss";

function User() {
  return (
    <body>
        <div className='container'>
            <div className="title">Fill Form</div>
             <form>
                 <div className="user-details">

                     <div className="input-box">
                         <span className='details'>First Name</span>
                         <input type="text" placeholder='Enter your first name'/>
                     </div>

                     <div className="input-box">
                         <span className='details'>Last Name</span>
                         <input type="text" placeholder='Enter your last name'/>
                     </div>

                     <div className="input-box">
                         <span className='details'>Email</span>
                         <input type="text" placeholder='Enter your email' required/>
                     </div>

                     <div className="input-box">
                         <span className='details'>Phone</span>
                         <input type="text" placeholder='Enter your phone number'/>
                     </div>

                     <div className="input-box">
                         <span className='details'>Company</span>
                         <input type="text" placeholder='Enter your Company name'/>
                     </div>

                     <div className="input-box">
                         <span className='details'>Host</span>
                         <input type="text" placeholder='Enter your first name'/>
                     </div>


                 </div>
             </form>
        </div>
    </body>
  )
}


export default User