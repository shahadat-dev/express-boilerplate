import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  id,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        onChange={onChange}
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': !isEmpty(error)
        })}
        id={id}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.string
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup
