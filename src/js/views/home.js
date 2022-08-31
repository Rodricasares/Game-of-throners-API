import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Single } from "./single";

export const Home = () => (
	
	<div className="row" >
<div className="d-flex justify-content-center mb-3">
	<Single />
</div>
<div className="d-flex justify-content-between">
	<Card />
</div>
	</div>
);
