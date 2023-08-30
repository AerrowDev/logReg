import React from "react";
import styles from "@/styles/home.module.css";
import { PiUserFocusLight } from "react-icons/pi";
const Thirdform = () => {
  return (
    <>
      <div className="items-center justify-center w-full flex flex-col">
        <PiUserFocusLight size={180} className={styles.icon} />
        <div className="relative cursor-pointer">
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-white text-center p-2 cursor-pointer">
           Upload Profile
          </div>
        </div>
      </div>
    </>
  );
};

export default Thirdform;
