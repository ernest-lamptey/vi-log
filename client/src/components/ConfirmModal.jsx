import React from 'react'
import '../styles/modal.scss'

const ConfirmModal = () => {
  return (
    <>
      <form className='edit-modal'>
        <label htmlFor="f_name">First Name</label>
        <input type="text" />
        <label htmlFor="l_name">Last Name</label>
        <input type="text" />
        <label htmlFor="department">Department</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="text" />
        <label htmlFor="f_name">Phone</label>
        <input type="text" />
      </form>
    </>
  )
}

export default ConfirmModal