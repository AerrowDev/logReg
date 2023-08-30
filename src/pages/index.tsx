import Image from "next/image";
import { Inter } from "next/font/google";
import Firstform from "./firstform";
import styles from "@/styles/home.module.css";
const inter = Inter({ subsets: ["latin"] });
import React, { useState } from "react";
import Secondform from "./secondform";
import Thirdform from "./thirdform";

export default function Home() {
  
  const [activeTab, setActiveTab] = useState(0);
  const [nextClicked, setNextClicked] = useState(false);

  const handleNextClick = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
      setNextClicked(true);
    }
  };

  return (
    <main className={` ${inter.className}`}>
      <section className={styles.sectioncon}>
        <div className={`relative flex w-96`}>
          <div
            className={`${styles.tabsfirst} ${
              activeTab === 0 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(0)}
          >
            first
          </div>
          <div
            className={`${styles.tabssecond} ${
              activeTab === 1 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            second
          </div>
          <div
            className={`${styles.tabsthird} ${
              activeTab === 2 ? styles.active : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            third
          </div>
        </div>
        <div className={styles.formbox}>
          {activeTab === 0 && <Firstform />}
          {activeTab === 1 && <Secondform />}
          {activeTab === 2 && <Thirdform />}
        </div>
        <button
          className={`${styles.btn_next} ${
            nextClicked ? styles["background" + (activeTab + 2)] : ""
          }`}
          onClick={handleNextClick}
        >
          next
        </button>
      </section>
    </main>
  );
}
