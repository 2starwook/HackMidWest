import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  home as homeIcon,
  person as personIcon,
  settings as settingsIcon,
} from "ionicons/icons";
import { Link } from "react-router-dom";

import "../styles/Register.css";

const Register = () => {
  /* For Start Button */
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="container">
        <div className="components">
          <div className="rightFlex"></div>
          <div className="centerFlexCol">
            <h1>Welcome!</h1>
            <div class="form">
              <input type="text" class="form__input" placeholder="First Name" />
            </div>
            <br />
            <div class="form">
              <input type="text" class="form__input" placeholder="Last Name" />
            </div>
            <br />
            <div class="form">
              <input type="text" class="form__input" placeholder="Email" />
            </div>
            <br />
            <div class="form">
              <input type="text" class="form__input" placeholder="Password" />
            </div>
            <br />
            <a>
              <div className="btn btn_secondary">
                <p>Submit</p>
              </div>
            </a>
            <br />
            <div class="icon">
              <Link to="/">
                <div class="icon__home">
                  <IonIcon icon={homeIcon} />
                </div>
              </Link>
              <div class="icon__account">
                <IonIcon icon={personIcon} />
              </div>
              <div class="icon__settings">
                <IonIcon icon={settingsIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;