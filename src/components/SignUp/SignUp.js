import React from "react";
import SignUpHeroSection from "./SignUpHeroSection";
import { homeObjOne } from "./Data";

function SignUp() {
  return (
    <>
      <SignUpHeroSection {...homeObjOne} />
    </>
  );
}

export default SignUp;
