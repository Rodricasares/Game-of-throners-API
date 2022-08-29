import React, { useState, useContext, useEffect, useReducer } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Card = () => {
  const { store, actions } = useContext(Context);
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(52);


  useEffect(() => {
    actions.getCharacters();
  }, []);

  return (
    <div className="container ">
      <motion.div className="slider-container ">

        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -13400 }}
        >        
        

          {store.characters.slice(init, end).map((item, index) => (
           
           <div
              className="col m-1 "
              key={index}
              onClick={() => actions.setID(item.id)}
            > 
              <motion.div className="item m-4 rounded-circle">   

                <img
                  src={item.imageUrl}
                  className="smallCard"
                  alt="..."
                  style={{ width: "14rem", height: "14rem" }}
                />
                <h6
                  className="card-title bg-dark text-light text-center p-2"
                  style={{ width: "auto" }}
                >
                  {item.fullName}
                </h6>
              </motion.div>
            </div>
            
          ))}
        </motion.div>
      </motion.div>

    </div>
  );
};
