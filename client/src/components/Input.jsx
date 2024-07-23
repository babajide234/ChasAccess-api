import PropTypes from 'prop-types';

const Input = ({
    label,
    ...props
  }) => {
  return (

    <div className="relative">
        <input 
            
            className="block w-full px-4 py-5 text-sm text-gray-900 bg-gray-100 appearance-none rounded-xl focus:outline-none focus:ring-0 peer" 
            {...props}
        />
        <label htmlFor={props.id || 'input'} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{label}</label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Input