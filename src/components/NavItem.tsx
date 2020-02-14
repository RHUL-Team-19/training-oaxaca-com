import React from 'react';
import { redirect, capitalise } from '../util/Util';

const NavItem = ({
  selected,
  option
}: {
  selected: string;
  option: string;
}) => (
  <a className="navbar-item" onClick={() => redirect(`${selected}/${option}`)}>
    {capitalise(option)}
  </a>
);

export default NavItem;
