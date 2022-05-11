import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  let [ user, setUser ] = useState( {
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
  } )

  let [ errorMsg, setErrorMsg ] = useState( '' );
  let [ errorList, setErrorList ] = useState( [] )

  let fNameError = errorList.splice( 0, 1 );
  let lNameError = errorList.splice( 0, 1 );
  let ageError = errorList.splice( 0, 1 );
  let emailError = errorList.splice( 0, 1 );
  let passwordError = errorList.splice( 0, 1 );

  let navigate = useNavigate();
  function loginForm() {
    let path = '/login';
    navigate( path )
  }

  async function submitData( e ) {
    e.preventDefault();
    let validation = inputsValid();

    if ( validation.error ) {
      setErrorList( validation.error.details )
    } else {

      let { data } = await axios.post( 'https://routeegypt.herokuapp.com/signup', user );

      if ( data.message === 'success' ) {
        loginForm();
      } else {
        setErrorMsg( data.message );
      }
    }

  }

  function inputsValid() {
    const schema = Joi.object( {
      first_name: Joi.string().alphanum().required().min( 3 ).max( 10 ),
      last_name: Joi.string().required().alphanum().min( 3 ).max( 10 ),
      age: Joi.number().required().min( 15 ).max( 85 ),
      email: Joi.string().required().email( { tlds: { allow: [ 'com', 'net' ] } } ),
      password: Joi.string().required().pattern( new RegExp( /^[a-zA-Z0-9]{3,30}$/ ) ),
    } )
    return schema.validate( user, { abortEarly: false } );
  }

  function getValue( e ) {
    let copyUser = { ...user };
    copyUser[ e.target.name ] = e.target.value;
    setUser( copyUser );
  }

  return (
    <>
      <section className='d-flex justify-content-center align-items-center vh-100'>
        <div className="registeration w-75">

          <h5 className='text-capitalize my-3'>registeration form</h5>

          <form onSubmit={ submitData }>
            { errorMsg ? <div className='text-danger'>{ errorMsg }</div> : '' }
            <div className="input-gp my-3">
              <label htmlFor="firstName">first name : </label>
              <input onChange={ getValue } type="text" name="first_name" id="firstName" className='form-control my-2' />
              { fNameError.map( ( error, index ) => <div key={ index } className='text-danger'>{ error.message }</div> ) }
              {/* { errorList.map( ( error, index ) => <div key={ index }>{ error.message }</div> ) } */ }
            </div>

            <div className="input-gp my-3">
              <label htmlFor="lastName">last name : </label>
              <input onChange={ getValue } type="text" name="last_name" id="lastName" className='form-control my-2' />
              { lNameError.map( ( error, index ) => <div key={ index } className='text-danger'>{ error.message }</div> ) }
            </div>

            <div className="input-gp my-3">
              <label htmlFor="age">age : </label>
              <input onChange={ getValue } type="number" name="age" id="age" className='form-control my-2' />
              { ageError.map( ( error, index ) => <div key={ index } className='text-danger'>{ error.message }</div> ) }
            </div>

            <div className="input-gp my-3">
              <label htmlFor="email">email : </label>
              <input onChange={ getValue } type="email" name="email" id="email" className='form-control my-2' />
              { emailError.map( ( error, index ) => <div key={ index } className='text-danger'>{ error.message }</div> ) }
            </div>

            <div className="input-gp my-3">
              <label htmlFor="password">password : </label>
              <input onChange={ getValue } type="password" name="password" id="password" className='form-control my-2' />
              { passwordError.map( ( error, index ) => <div key={ index } className='text-danger'>{ error.message }</div> ) }
            </div>

            <div className="submitBtn d-flex justify-content-end ">
              <button type='submit' className='btn btn-primary my-3 text-capitalize'>register</button>
            </div>

          </form>

        </div>
      </section>
    </>
  )
}
