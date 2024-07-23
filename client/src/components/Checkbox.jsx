import { Check } from 'lucide-react'; // Make sure to import the Check icon appropriately
import PropTypes from 'prop-types';

const Checkbox = ({ src, label, ...props }) => {
    return (
      <label htmlFor={label} className="relative flex flex-col items-center justify-center gap-3 uppercase group">
        <input type="checkbox" id={label}  className="hidden peer" {...props} />
        <div className=" w-16 h-12 md:w-20 md:h-[60px] border rounded-md border-[#D0D5DD] peer-checked:border-primary/50 relative overflow-hidden">
          <img src={src} alt={label} className="w-full h-full" />
        </div>
          <span className="hidden items-center justify-center w-5 h-5 text-[4px] border rounded-full bg-primary/25 text-primary border-primary/50 absolute top-1 right-1 peer-checked:flex">
            <Check size={10} className="text-[5px]" />
          </span>
        <span className="text-sm font-normal uppercase">{label}</span>
      </label>
    );
  };
  Checkbox.propTypes = {
    src: PropTypes.string,
    label: PropTypes.string,
  };
  export default Checkbox;
