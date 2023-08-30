import React from "react";
import { useState } from "react";
import styles from "@/styles/home.module.css";

const Firstform = () => {

  return (
    <>
      <div className="flex flex-col gap-4">
        <label className="text-white">Name</label>
        <div className={styles.inputbox}>
              <input
          type="email"
          placeholder="Email"
      
        />
        </div>
      
        <label className="text-white">Password</label>
        <div className={styles.inputbox}>
              <input
          type="password"
          placeholder="Password"
          //   className="border-b-4 m-4 "
        />
        </div>
      
      </div>
    </>
  );
};

export default Firstform;
