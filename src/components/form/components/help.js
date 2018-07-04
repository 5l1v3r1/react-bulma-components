import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Help = ({
  className,
  children,
  color,
  ...props
}) => (
  <p
    {...props}
    className={classnames('help', className, {
      [`is-${color}`]: color,
    })}
  >
    {children}
  </p>
);

Help.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  children: PropTypes.node,
};

Help.defaultProps = {
  children: null,
  className: '',
  style: {},
  color: null,
};

export default Help;
