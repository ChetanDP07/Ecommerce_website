// import React from 'react'
import { GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import SignGoogle from "../../assets/SignGoogle.png";
import { doc, setDoc } from "firebase/firestore";
import { auth,db } from "../../lib/firebase";
import toast from "react-hot-toast";

const LoginGoogle = () => {
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const { uid, displayName, email, photoURL } = result.user;
        const [firstName, ...lastNameParts] = displayName?.split(" ") || ["", ""];
        const lastName = lastNameParts.join(" ");
        await setDoc(doc(db, "users", uid), {
          firstName,
          lastName,
          email,
          avatar: photoURL,
          id: uid,
          createdAt: new Date(),
        });
        toast.success("User logged in successfully", {
          position: "top-center",
        });
        console.log(result);
         window.location.href = "/profile";
      }
    } catch (error) {
      toast.error("Error logging in with Google", {
        position: "top-center",
      });
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div className="pt-8">
      <p className="flex justify-center pb-4 text-black">
        Or Continue with......
      </p>
      <div className="flex justify-center">
        <img
          className="cursor-pointer"
          onClick={googleLogin}
          src={SignGoogle}
          alt="Sign in with Google"
          width="25%"
        />
      </div>
    </div>
  );
};

export default LoginGoogle;
