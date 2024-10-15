import React from 'react'
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from 'formik'
import * as Yup from 'yup'

const Signup = () => {
  return (
    <>
    <Formik initialValues={{fname:'', lname:'',email:'',psw:'',cpsw:''}}
    validationSchema={Yup.object({
      fname:Yup.string()
      .required('first name cannot be empty.')
      .max(20,'20 chharacteer is lesss.'),
      lname:Yup.string()
      .required('last name cannot be empty.')
      .max(20,'20 chharacteer is lesss.'),
      email:Yup
      .string()
      .required('Email cannot be empty.')
      .email('Invalid format'),

      psw: Yup.string()
      .required('password is mandatory.')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#_.,!?$])[A-Za-z\d@#_.!?$]{8,50}$/,'must contain one uppercase, one lowercase, one digit, one special character and must be minimum of 8 character upto 50'),


      cpsw: Yup.string()
      .required('password is mandatory.')
      .oneOf([Yup.ref('psw'),null],'Password and confirm password doesnot match.')

     
    })}
    >
    <div className="container my-5 ">
        <div className="row d-flex justify-content-center">
            <div className="col md-4 shadow p-3">
              <Form action="">
                <div className="mb-2">
                  <label htmlFor="fname">First Name</label><span style={{color:'red'}}>*</span>
                  <Field type='text' name='fname' id='fname' className='form-control'/>
                  <ErrorMessage name='fname'>
                    {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                  </ErrorMessage>
                  </div>
                  <div className="mb-2">
                  <label htmlFor="lname">Last Name</label><span style={{color:'red'}}>*</span>
                  <Field type='text' name='lname' id='lname' className='form-control'/>
                  <ErrorMessage name='lname'>
                    {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                  </ErrorMessage>
                  </div>
                  <div className="mb-2">
                  <label htmlFor="email">Email</label><span style={{color:'red'}}>*</span>
                  <Field type='text' name='email' id='email' className='form-control'/>
                  <ErrorMessage name='email'>
                    {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                  </ErrorMessage>
                  </div>  
                  <div className="mb-2">
                  <label htmlFor="psw">Password</label><span style={{color:'red'}}>*</span>
                  <Field type='password' name='psw' id='psw' className='form-control'/>
                  <ErrorMessage name='psw'>
                    {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                  </ErrorMessage>
                  </div>
                  <div className="mb-2">
                  <label htmlFor="cpsw">Confirm Password</label><span style={{color:'red'}}>*</span>
                  <Field type='password' name='cpsw' id='cpsw' className='form-control'/>
                  <ErrorMessage name='cpsw'>
                    {(msg)=> <div style={{color:'red'}}>{msg}</div>}
                  </ErrorMessage>
                  </div>
              </Form>
            </div>
            </div>
        </div>
        </Formik>
            
    </>
  )
}

export default Signup