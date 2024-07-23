import PropTypes from 'prop-types';

const MaxWidth = ({children}) => {
  return (
    <div className="px-3 py-8  md:px-20 md:py-16">
        {children}
    </div>
  )
}
MaxWidth.propTypes = {
  children: PropTypes.node.isRequired,
};


export default MaxWidth