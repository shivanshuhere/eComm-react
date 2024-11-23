
const Button = (props) => {
  return (
    <div>
         <button 
         type="submit" 
         className={`${props.width} ${props.height} border text-white font-medium py-2 px-4 rounded-md mt-4 bg-[#DB4444] cursor-pointer`}
         onClick={props?.handleonClick}
         >
            {props.text}
         </button>

    </div>
  )
}

export default Button