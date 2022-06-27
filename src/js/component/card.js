import React, { useState, useContext, useEffect, useReducer } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = () => {
  const { store, actions } = useContext(Context);
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(21);

  useEffect(() => {
    actions.getCharacters();
  }, []);

  console.log(store.characters);

  return (
    <div className="container ">
      <div className="row row-cols-lg-12 ">
        {store.characters.slice(init, end).map((item, index) => (
          <div
            className="col m-1 "
            key={index}
            onClick={() => actions.setID(item.id)}
          >
            <div className="card bg-dark" style={{ width: "9rem" }}>
              <img
                src={item.imageUrl}
                className="smallCard"
                alt="..."
                style={{ width: "auto", height: "12rem" }}
              />
                <h6 className="card-title bg-dark text-light">{item.fullName}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
