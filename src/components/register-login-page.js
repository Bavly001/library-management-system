import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

const LoginForm = () => {
      const { register, handleSubmit } = useForm()
      const [errorEmail, setErrorEmail] = useState(false)
      const [errorPassword, setErrorPassword] = useState(false)


      return (
            <form
                  onSubmit={handleSubmit((data) => {
                        let login;
                        if (localStorage.getItem('registers')) {
                              const user = JSON.parse(localStorage.getItem('registers')).filter(user => user.email === data.email)
                              if (user.length > 0) {
                                    login = user[0]
                                    if (login.password === data.password) {
                                          localStorage.setItem('login', JSON.stringify(login))
                                          console.log(JSON.parse(localStorage.getItem('login')))
                                          if (login.token) {
                                                localStorage.setItem('token', JSON.stringify(login.token))
                                                console.log(JSON.parse(localStorage.getItem('login')))
                                          }
                                          window.location = '/'
                                    }
                                    else {
                                          setErrorPassword(true)
                                          setTimeout(() => setErrorPassword(false), 5000)
                                    }
                              }
                              else {
                                    setErrorEmail(true)
                                    setTimeout(() => setErrorEmail(false), 5000)
                              }

                        }
                        else {
                              setErrorEmail(true)
                              setTimeout(() => setErrorEmail(false), 5000)
                        }
                  })}
                  className='was-validated rounded-5 text-beige w-100 h-100 bg-orange-dark d-flex justify-content-center align-items-center flex-column'>
                  <div className='w-75'>
                        <h1 className='d-flex justify-content-between align-items-center'>Please, Login Now
                              <Link to='/' className='btn bg-brown-dark rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><AiOutlineHome className='fs-5 me-2' /> Home</Link>
                        </h1>
                        <input
                              type='email'
                              placeholder='Please Enter Your Email Address'
                              {...register('email')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />
                        {errorEmail && <h1 className='text-beige display-6 fs-6'>Please, sign up first or check your email address</h1>}
                        <input
                              type='password'
                              placeholder='Please Enter Your Password'
                              {...register('password')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />
                        {errorPassword && <h1 className='text-beige display-6 fs-6'>Please, check your password</h1>}
                  </div>
                  <button type="submit" className="btn bg-brown-dark text-beige my-3 w-75">Login</button>


            </form>
      )
}

const RegisterForm = () => {
      const { register, handleSubmit, reset } = useForm()
      const [done, setDone] = useState(false)
      const [error, setError] = useState(false)

      return (
            <form
                  onSubmit={handleSubmit((data) => {
                        let registers;
                        console.log()
                        if (localStorage.getItem('registers')) {
                              if (JSON.parse(localStorage.getItem('registers')).filter(user => user.email === data.email).length > 0) {
                                    setError(true)
                                    setTimeout(() => setError(false), 5000)
                              }
                              else {
                                    registers = JSON.parse(localStorage.getItem('registers'))
                                    if (data.email.includes('@superadmin')) {
                                          data.token = 'superadmin';
                                    }
                                    else if (data.email.includes('@admin')) {
                                          data.token = 'admin';
                                    }
                                    registers.push(data)
                                    console.log(registers)
                                    localStorage.setItem('registers', JSON.stringify(registers))
                                    setDone(true);
                                    setTimeout(() => setDone(false), 5000)
                                    reset();
                              }

                        }
                        else {
                              registers.push(data)
                              localStorage.setItem('registers', JSON.stringify(registers))
                              setDone(true);
                              setTimeout(() => setDone(false), 5000)
                              reset();
                        }

                  })}
                  className='was-validated rounded-5 text-beige w-100 h-100 bg-orange-dark d-flex justify-content-center align-items-center flex-column'>
                  <div className='w-75'>
                        <h1 className='d-flex justify-content-between align-items-center'>Please, Sign Up Now
                              <Link to='/' className='btn bg-brown-dark rounded-5 text-beige d-flex justify-content-center align-items-center overflow-hidden text-decoration-none'><AiOutlineHome className='fs-5 me-2' /> Home</Link>
                        </h1>

                        <input
                              type='text'
                              placeholder='Please Enter Your First Name'
                              {...register('firstName')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />

                        <input
                              type='text'
                              placeholder='Please Enter Your Last Name'
                              {...register('lastName')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />

                        <input
                              type='email'
                              placeholder='Please Enter Your Email Address'
                              {...register('email')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />

                        {error && <h1 className='text-beige display-6 fs-6'>This email is already registered</h1>}

                        <input
                              type='password'
                              placeholder='Please Enter Your Password'
                              {...register('password')}
                              className="form-control my-5"
                              required
                              autoComplete='off' />

                  </div>
                  <button type="submit" className="btn bg-brown-dark text-beige my-3 w-75">Sign Up</button>
                  {done && <div className='alert bg-brown text-beige display-6 fs-6 text-center'>User is added successfully</div>}

            </form>
      )
}

function RegisterLoginPage() {

      const [state, setState] = useState(true)


      return (
            <div className="register-login-page container-fluid w-100 vh-100 d-flex justify-content-center align-items-center flex-column">
                  <div className='w-25 py-1 mb-5 bg-brown rounded-5 d-flex justify-content-around align-items-center text-beige position-relative'>
                        <h1 className='display-6'>Login</h1>
                        <h1 className='display-6'>Register</h1>
                        <div className={`w-50 h-100 mb-5 bg-brown-dark rounded-5 position-absolute top-0 no-hover cursor-pointer d-flex justify-content-center align-items-center ${state ? 'end-0' : 'start-0'}`} onClick={() => setState(!state)}>
                              <div className='bg-orange-dark py-3 w-50 rounded-5'></div>
                        </div>
                  </div>
                  <div className='w-50 h-75'>
                        {state ?
                              <div className='w-100 h-100'>
                                    <LoginForm />
                                    <h1 onClick={() => setState(!state)} className='text-center cursor-pointer display-6 fs-6 text-orange-dark text-decoration-underline mt-3'>Don't have account..? Sign Up Now</h1>
                              </div>
                              :
                              <div className='w-100 h-100'>
                                    <RegisterForm />
                                    <h1 onClick={() => setState(!state)} className='text-center cursor-pointer display-6 fs-6 text-orange-dark text-decoration-underline mt-3'>Have account..? Login Now</h1>
                              </div>
                        }
                  </div>
            </div>
      )
}
export default RegisterLoginPage