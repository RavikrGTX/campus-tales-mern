import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-scrren mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'> <Link
         to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-4xl' >
        <span className='px-2 py1 bg-gradient-to-r from-green-900 via-green-700 to-green-400 rounded-lg text-white text-4xl'>ThePharmacast</span>Blog
        </Link>
        <p className='text-sm mt-5'>
          you can signup with your email and password
        </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label> user name</Label>
              <TextInput 
              type='text'
              placeholder='username'
              id='username'/>
              </div>
            <div>
              <Label>email</Label>
              <TextInput 
              type='text'
              placeholder='Email'
              id='email'/>
              </div>
            <div>
              <Label>password</Label>
              <TextInput 
              type='text'
              placeholder='password'
              id='password'/>
              </div>
              <Button gradientDuoTone='greenToBlue' type='submit'>Sign-Up</Button>
               <div className='flex gap-3 text-sm mt-4'>
              <span>already signedin?</span>
              <Link className='text-blue-500' to="/sign-in"> 
                   sign-in 
              </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}
