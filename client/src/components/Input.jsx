import React from 'react'

const Input = ({
    type = 'text',
    label,
    min,
    max,
    value,
    onChange,
    placeholder = ' ',
    ...props
  }) => {
  return (
      <div className=" bg-gray-100 rounded-xl flex relative py-3 focus-within:">
        <input 
            type={type}
            min={min}
            max={max}
            value={value}
            onChange={onChange} 
            className="peer block w-full py-2 border-none outline-none bg-transparent focus:outline-none text-gray-900 px-[25px]" 
            {...props} 
        />
        <label         
            htmlFor={props.id || 'input'}
            className=" absolute left-5 top-[50%] text-gray-600 text-base font-medium transition-all transform -translate-y-1/2 scale-100 origin-[0] peer-focus:-translate-y-[90%] peer-focus:top-[40%] peer-focus:scale-75 peer-focus:text-sm peer-in-range:text-red-800  capitalize"
        >{label}</label>
    </div>
  )
}

export default Input