import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

const InputGroup = ({
  placeholder,
  name,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames('form-control form-control-lg', {
          'is-invalid': !isEmpty(error)
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string
}

InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup
