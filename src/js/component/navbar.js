import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
		
			<div className="d-flex justify-content-center">
		<img className="m-2 gthrone" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/2560px-Game_of_Thrones_2011_logo.svg.png" alt="Bootstrap" width="550" height="60"/>
			</div>
		</nav>
	);
};
