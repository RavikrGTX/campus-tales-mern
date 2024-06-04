import { Alert, Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Spinner } from 'flowbite-react';
import { Link ,useNavigate } from 'react-router-dom';


export default function SignIn() {
 const [formData, setFormData] = useState({});
 const [errorMessage, setErrorMessage] = useState(null);
 const [loading, setLoading] = useState(false);
 const navigate=useNavigate();
 const handleChange= (e)=>{
  setFormData({ ...formData,[e.target.id]: e.target.value.trim()});
 };
 const handleSubmit= async (e)=>{
   e.preventDefault();
   if(!formData.email||!formData.password){
    return setErrorMessage('please fill out all fields.');
   }
   try{
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch('api/auth/signin',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(formData),

    });
    const data = await res.json();
    if(data.succes===false){
       return setErrorMessage(data.message);
    }
    setLoading(false);
    if(res.ok){
      navigate('/');
    }
   }catch(error){
     setErrorMessage(error.message);
     setLoading(false);
   };
 }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'> <Link
         to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-4xl' >
        <span className='px-2 py1 bg-gradient-to-r from-green-900 via-green-700 to-green-400 rounded-lg text-white text-4xl'>ThePharmacast</span>Blog
        </Link>
        <p className='text-sm mt-5'>
          you can signin with your email and password
        </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
         
            <div>
              <Label>email</Label>
              <TextInput 
              type='email'
              placeholder='Email'
              id='email'onChange={handleChange}/>
              </div>
            <div>
              <Label>password</Label>
              <TextInput 
              type='password'
              placeholder='password'
              id='password' onChange={handleChange}/>
              </div>
              <Button gradientDuoTone='greenToBlue' type='submit' onClick={handleSubmit} disabled={loading}>{
                loading?(
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading</span>
                  </>
                ):'Sign In'
              }
              </Button>
               <div className='flex gap-3 text-sm mt-4'>
              <span>Don't Have an account?</span>
              <Link className='text-blue-500' to="/sign-up"> 
                   sign Up
              </Link>
              </div>
              {
                errorMessage&&(
                  <Alert className='mt-5' color='failure' > 
                    {errorMessage}
                  </Alert>
                )
              }
          </form>
        </div>
      </div>
    </div>
  )
}
