import React from 'react';
import notFound from '../../images/404error.png'

export default function NotFound() {
  return (
    <div className='vh-100'>
      <img src={ notFound } alt='' className='w-100 ' />
    </div>
  )
}
