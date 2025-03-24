import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGES, Logo } from "../utils/constants";
import { addToggleSearch } from "../utils/gptSlice";
import { addCodeLang } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const toggleGPT = useSelector((store) => store.gpt?.toggleSearch);


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);


  const handleGptToggle = () => {
    dispatch(addToggleSearch())
  }

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    dispatch(addCodeLang(event.target.value));
  };


  return (
    <>
      <div className="absolute w-full px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black z-20">
        <img className="w-30 md:w-50 flex justify-center"
          src={Logo}
          alt="logo"
        />
        {user &&
          <div className="flex items-center space-x-4">

            {toggleGPT && <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="block w-48 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-500"
            >
              {Object.entries(LANGUAGES).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>}


            <button onClick={handleGptToggle}
              className="bg-amber-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-amber-600" >
              {!toggleGPT ? "AI search" : "Home Page"}
            </button>

            <img
              className="w-10 h-10 rounded-full object-cover border border-white"
              src={user?.photoURL}
              alt="User Profile"
            />
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default Header;
