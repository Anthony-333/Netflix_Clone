import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import "./SignUpScreen.css";
import SignInScreen from "../SignInScreen/SignInScreen";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [signIn, setSignIn] = useState(false);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {signIn ? (
        <SignInScreen />
      ) : (
        <>
          <form className="SignInForm">
            <h1>Sign Up</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button onClick={register} type="submit">
              Sign Up
            </button>
            <h4>
              {" "}
              <span className="signupScreen__gray">Have account? </span>
              <span
                onClick={() => setSignIn(true)}
                className="signupScreen__link"
              >
                Sign In now.
              </span>
            </h4>
          </form>
        </>
      )}
    </>
  );
}

export default SignupScreen;
