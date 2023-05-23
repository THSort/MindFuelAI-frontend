import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHouse, faRightFromBracket, faSheetPlastic, faUserPlus } from '@fortawesome/free-solid-svg-icons'


export default props => {

    const handleLogout = () => {
		localStorage.removeItem("token");
    localStorage.removeItem("plan");
    localStorage.removeItem("email");
		window.location.reload();
	};

    const user = localStorage.getItem("token");
    const plan = localStorage.getItem("plan");
  return (
    <Menu>
      <a className="menu-item" href="/home">
      <FontAwesomeIcon icon={faHouse} /> Home
      </a>
      <a className="menu-item" href="/sales">
      <FontAwesomeIcon icon={faSheetPlastic} /> Plans
      </a>
      { !user &&
      <a className="menu-item" href="/login">
        <FontAwesomeIcon icon={faUserPlus} /> Sign Up/Log In
      </a>}
      { user && plan &&
      <a className="menu-item" href="/dashboard">
        <FontAwesomeIcon icon={faComment} /> Chat
      </a>}
      { user &&
      <a style={{cursor: "pointer"}} className="menu-item"  onClick={handleLogout}>
        <FontAwesomeIcon icon={faRightFromBracket} /> Log Out
      </a>}
    </Menu>
  );
};