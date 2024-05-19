import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='w-full mt-[-5rem] h-screen flex justify-center items-center flex-col gap-4 '>
      <span className='font-yekan font-sb text-xl text-c-text3'>404 Page not found</span>
      <span className='font-yekan font-bl text-4xl text-c-text2'>صفحه مورد نظر یافت نشد</span>
      <Link to="/">
        <button className='font-yekan font-sb text-xl bg-c-back text-c-text3 hover:text-c-text2 transition-all duration-300 px-5 py-2 rounded-md'>بازگشت به صفحه اصلی &rarr;</button>
      </Link>
    </div>
  )
}

export default NoPage