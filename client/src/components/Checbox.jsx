import { Check } from 'lucide-react'; // Make sure to import the Check icon appropriately

const Checkbox = ({ src, label }) => {
    return (
      <label className="flex flex-col items-center justify-center gap-3 uppercase group">
        <input type="checkbox" className="hidden peer" />
        <div className="w-20 h-[60px] border rounded-md border-[#D0D5DD] peer-checked:border-primary/50 relative overflow-hidden">
          <img src={src} alt={label} className="w-full h-full" />
          <span className="hidden items-center justify-center w-5 h-5 text-[4px] border rounded-full bg-primary/25 text-primary border-primary/50 absolute top-1 right-1 peer-checked:flex">
            <Check size={10} className="text-[5px]" />
          </span>
        </div>
        <span className="text-sm font-normal uppercase">{label}</span>
      </label>
    );
  };

  export default Checkbox;
