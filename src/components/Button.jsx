import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text, to, onClick, className="", showDot = false}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to)
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
        {/* <div className="cnt-btn"> */}
          {/* <button  onClick={handleClick} className='bg-amber-300 text-black font-semibold px-4 py-2 rounded'>{text}</button> */}




    <button
      onClick={handleClick}
      className={`
        flex items-center justify-center gap-3.75 
        border  rounded-[50px] 
        px-6 py-3.5 
         transition-all duration-300 ease-in-out
          hover:cursor-pointer 
        ${className} 
      `}
    >
      {/* Agar showDot true ho toh red dot dikhao (Flicc style) */}
      {showDot && (
        <span className="w-2 h-2 bg-[#ff4d4d] rounded-full transition-colors duration-300"></span>
      )}
      
      <span>{text}</span>
    </button>
        {/* </div> */}
    </div>
  )
}

export default Button