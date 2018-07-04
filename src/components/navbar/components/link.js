import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const NavbarLink = ({
  className,
  renderAs,
  children,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('navbar-link', className)}
    >
      {children}
    </Element>
  );
};


NavbarLink.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

NavbarLink.defaultProps = {
  style: {},
  className: '',
  children: null,
  renderAs: 'span',
};

export default NavbarLink;
