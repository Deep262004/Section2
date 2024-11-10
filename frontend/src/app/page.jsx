'use clint'
// import Card from '@/components/card';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-3xl font-bold'>Home Page</h1>

      <p style={{ color: 'red' , fontSize: 50, fontweight:'bold' }}>JSX is the combination of JS and HTML</p>

      <input type="text" />
      <br />
      <hr />
       
       <button className='global-btn'>Home button</button>

       <img src="/globe.svg" className='size-16' alt="" />

       <div className='m-10 w-1/2'>

       {/* <Card title="Card title 1" description="Card 1 description" />
       <Card title="Card title 2" description="Card 2 description" />
       <Card title="Card title 3" description="Card 3 description" />
       <Card title="Card title 4" description="Card 4 description" />
       <Card title="Card title 5" description="Card 5 description" />
       <Card title="Card title 6" description="Card 6 description" /> */}

         

       
       </div>
        
    </div>
  )
}

export default Home;