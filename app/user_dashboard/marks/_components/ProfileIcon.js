import React from "react";
import styles from "./components.module.css";

const ProfileIcon = () => {
  return (
    <div className={styles.profileIcon}>
      <img src="/Profilephoto.png" alt="Profile photo." />
      <div>
        <p className={styles.userName}>Jimmy Ruud</p>
        <p className={styles.accountStatus}>Free Account</p>
      </div>
      <img src="/Logout.svg" />
    </div>
  );
};

export default ProfileIcon;
