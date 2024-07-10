import { useState } from "react"

export default function Upload() {

  const [file, setFile] = useState();
 

  function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <div className="home">
        <form action="https://buizen.icu//api/uploadFile" method="post" encType="multipart/form-data" >
          <h1>Create Post</h1>
          <span>Name:</span>
          <textarea name="name" required></textarea>
          <span>Message:</span>
          <textarea name="message" required></textarea>
          <input type="file" name="avatar" onChange={handleChange} />
          <br></br>
          <span>Only accepting: jpeg, jpg, png, gif. Max size 4 MB. No pipebombs pls</span>
          <br></br>
          <img src={file} alt="" />
          <br></br>
          <button type="submit" >Upload</button>
        </form>


      </div>
      
    )
  }