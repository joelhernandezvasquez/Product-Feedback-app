
import PropTypes from 'prop-types';
export const Error = ({children,cssStyling}) => {
  return (
    <div className={cssStyling} role="alert">
      {children}
    </div>
  )
}
Error.propTypes = {
  cssStyling:PropTypes.string.isRequired
}
