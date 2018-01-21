import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import * as styles from './Navbar.less';

@CSSModules(styles, { allowMultiple: true })
export default class Navbar extends Component {
  render() {
    const { absolute, backIcon, backLink, title, icon } = this.props;
    return (
      <ul styleName={`navbar${absolute ? ' absolute' : ''}`}>
        <li styleName={backIcon}>
          <Link to={backLink} />
        </li>
        <li styleName="title">{title}</li>

        <li styleName={icon}>
          <span />
        </li>
      </ul>
    );
  }
}

Navbar.propTypes = {
  absolute: PropTypes.bool,
  backIcon: PropTypes.string,
  backLink: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string
};
