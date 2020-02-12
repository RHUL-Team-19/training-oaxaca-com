import React from 'react';
import { Router } from 'react-router-dom';
import history from '../history';
import NavItem from './NavItem';
import { capitalise } from '../util/Util';

const NavOption = ({ option }: { option: string }) => (
  <Router history={history}>
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">{capitalise(option)}</a>
      <div className="navbar-dropdown">
        <NavItem selected={option} option="find" />
        <NavItem selected={option} option="view" />
        <hr className="navbar-divider" />
        <NavItem selected={option} option="create" />
      </div>
    </div>
  </Router>
);

export default NavOption;
