import React, { useState } from "react";
import SignInScreen from "../SignInScreen/SignInScreen";
import { useHistory } from "react-router-dom";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const history = useHistory();

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
           onClick={() => history.go(0)}
          className="loginScreen__logo"
          src="https://res.cloudinary.com/dzhvw7vxn/image/upload/v1642418007/netflix-clone/Netflix-logo_kblhxq.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart our
              membership.
            </h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
