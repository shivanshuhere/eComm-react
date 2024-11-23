import React from 'react'

const BTN = (props) => {
  return (
    <div className=' absolute left-2 top-4 '>
                <p className={`${props.color} px-4 py-1 rounded-md text-black `} >{props.text}</p>
                </div>
  )
}

export default BTN