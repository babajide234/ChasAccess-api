import { cn } from '../lib/utils'
import PropTypes from 'prop-types';

const Card = ({className,children}) => {
  return (
    <div className={cn("bg-white border-none border border-gray-200 md:border-solid rounded-xl p-0 md:p-12 flex-grow",className)}>
        {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card