import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg" src="14051642_1206971362659428_6879347595016222352_n.jpg" alt="ddd" />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display : "none"}}/>
                <input type= "text" placeholder="Title" className='writeInput' autoFocus={true}/>

            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story....' type= "text" className='writeInput writeText'></textarea>

            </div>
            <button className='writeSubmit'>Publish</button>
        </form>

    </div>
  );
}
