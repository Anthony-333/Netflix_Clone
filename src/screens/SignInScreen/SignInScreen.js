import React, { useRef, useState } from "react";
import { auth } from "../../firebase";
import "./SignInScreen.css";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [signUp, setSignUp] = useState(false);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      {signUp ? (
        <SignUpScreen />
      ) : (
        <>
          <form className="SignInForm">
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button onClick={signIn} type="submit">
              Sign In
            </button>
            <h4>
              {" "}
              <span className="signupScreen__gray">New to Netflix? </span>
              <span
                onClick={() => setSignUp(true)}
                className="signupScreen__link"
              >
                Sign Up now.
              </span>
            </h4>
          </form>
        </>
      )}
      
    </>
  );
}

export default SignupScreen;
