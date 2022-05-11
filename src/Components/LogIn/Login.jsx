import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  let [ user, setUser ] = useState( {
    email: '',
    password: '',
  } )

  let [ errorMsg, setErrorMsg ] = useState( '' );
  let [ errorList, setErrorList ] = useState( [] )


  let emailError = errorList.splice( 0, 1 );
  let passwordError = errorList.splice( 0, 1 );

  let navigate = useNavigate();
  function homePage() {
    let path = '/home';
    navigate( path )
  }

  async function submitForm( e ) {
    e.preventDefault();
    let validation = inputsValid();

    if ( validation.error ) {
      setErrorList( validation.error.details )
    } else {

      let { data } = await axios.post( 'https://routeegypt.herokuapp.com/signin', user );

      if ( data.message === 'success' ) {
        homePage();
      } else {
        setErrorMsg( data.message );
      }
    }

  }

  function inputsValid() {
    const schema = Joi.object( {
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

          <h5 className='text-capitalize my-3'>login form</h5>

          <form onSubmit={ submitForm }>
            { errorMsg ? <div className='text-danger'>{ errorMsg }</div> : '' }

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
              <button type='submit' className='btn btn-primary my-3 text-capitalize'>login</button>
            </div>

          </form>

        </div>
      </section>
    </>
  )
}
