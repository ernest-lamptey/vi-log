import React from 'react'
import '../styles/modal.scss'

const Confirm_Modal = () => {
  return (
    <>
        <div className='overlay'></div>
        <div className='confirm-modal'>
            <p>Are you sure you want to delete this employee?</p>
            <button>Yes</button>
            <button>Cancel</button>
        </div>
    </>
  )
}

export default Confirm_Modal