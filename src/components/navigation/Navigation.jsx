import React from "react";
import { Logo } from "../../img/svg/Logo";
import { MenuIcon, CommentIcon, RefreshIcon } from "../../img/svg/Icons";
import profile from "../../img/profile.png";

import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul className="navigation-items ">
        <li className="navigation-item active-navigation-item ">
          <MenuIcon navigationIcon="navigation-icon active-navigation-icon" />
        </li>
        <span className="border" />
        <li className="navigation-item">
          <CommentIcon navigationIcon="navigation-icon " />
        </li>
        <span className="border" />
        <li className="navigation-item">
          <RefreshIcon navigationIcon="navigation-icon" />
        </li>
      </ul>
      <span>
        <img className="profile-img" src={profile} alt="" />
      </span>
    </nav>
  );
};

export default Navigation;
