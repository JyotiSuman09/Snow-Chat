import React from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [err, serErr] = useState(false);
  const naviagate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth,email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          serErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
           await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
           });
           await setDoc(doc(db, "users", res.user.uid), {
             uid: res.user.uid,
             displayName,
             email,
             photoURL: downloadURL,
           });

           await setDoc(doc(db, "userChats", res.user.uid), {})
           naviagate("/")
          });
        }
      );
    } catch (err) {
      serErr(true);
    }

  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Snow Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="display name" />
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add your avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
