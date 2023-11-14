import React, { useState } from 'react'
import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
function New() {

  const [file, setFile] = useState("");
 
  return (
    <div className='niews'>
    <Sidebar />
    <div className="niewContainer">
      <Navbar />
      <div className="top">
        <h1>
          Add New User
        </h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/158/158715.png"} alt="" />
          
        </div>
        <div className="right">
          <form>
          <div className="formInput">
              <label htmlFor="file" >Image: <DriveFolderUploadIcon className='icon'/></label>
              <input type="file" 
              placeholder='Your username'
               style={{display:"none"}}
                id='file' 
                onChange={(e) => setFile(e.target.files[0])}/>
            </div>
          
            <div className="formInput">
              <label htmlFor="">Username</label>
              <input type="text" placeholder='Your username'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Name an surname</label>
              <input type="text" placeholder='Your name'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Your Email'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder='Your phone'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Adress</label>
              <input type="text" placeholder='Your Adress'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Country</label>
              <input type="text" placeholder='Your country'/>
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password" placeholder='Your password'/>
            </div>
            <button>Send</button>
          </form>
          </div>
      </div>
    </div>
  </div>
  )
}

export default New