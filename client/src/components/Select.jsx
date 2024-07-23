import PropTypes from 'prop-types';

const Select = ({ label, options, value, onChange, id, ...props }) => {
  return (
    <div className="relative">
      <select
        id={id}
        value={value ? value.value : ''} 
        onChange={onChange}
        className="block w-full px-4 py-5 text-sm text-gray-900 bg-gray-100 appearance-none rounded-xl focus:outline-none focus:ring-0 peer"
        {...props}
      >
        <option value="" disabled>Select a plan</option> {/* Placeholder option */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

export default Select;
