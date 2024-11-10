 import React from 'react';
 import classes from './login.module.css' ;

 
 const login = () => {
   return (
     <div>
        <h1>Login Page</h1>

        <button className='global-btn'>Login button</button>

        <button className={classes.loginBtn}> local login button</button>
     </div>
   )
 }
 
 export default login;