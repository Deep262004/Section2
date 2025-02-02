'use clint';
import React from 'react'

const EventHandling = () => {

      const previewImage = (e) =>{
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (data) =>{
                  const image =new Image();
                  image.src = data.target.result;
                  document.body.appendChild(image);
            }
            reader.readAsDataURL(file);
      }
  return (
    
    <div>
        <div className='container mx-auto h-screen' onMouseMove={(e)} =>{ 
            console.log(e.clientX, e.clientY);}

            const el = document.getElementById('circle');
            el.style.left = e.clientX -10 +'px';
            el.style.top =e.clint -10 + 'px';
          } 
          
          <div className='size-8 bg-red-500 rounded-full absolute transition duration-700'
          id= 'circle'
            <h1 className='my-5 text-counter font-bold text-3xl'>Event Handling</h1>

            <button className='mt-4 bg-black text-white p-3'
            onClick={() =>{ alert('button was clicked')}}>Click Event</button>

             <input className='border-black w-full p-3 mt-4'
             onChange={(e)=>{ console.log(e.target.value)}} type='text'/>

             <input className='border-black w-full p-3 mt-4'
                  placeholder='press any key'
                  onKeyDown={(e)=>{ console.log(e.code);}} type="text" />

            <input  type="color"
            onChange={(e)=>{ console.log(document.body.style.backgroundColor = e.target.value);}} />
            
            <input
                onChange={(e)=>{console.log(e.target.files);}}
                 type="file" multiple />

                 <input  type="file" accept='image*' onChange={previewImage} />
            
            </div> 
    </div>
  )
}

export default EventHandling;