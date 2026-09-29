import React from "react";
import styles from "./ProfilePicture.module.css";
import InputField from "../inputField/InputField";
function ProfilePicture({ data = "", onChange, setFormData }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePicture: file,
      }));
    }
  };

  return (
    <div className={styles["profile-picture-container"]}>
      <h5 className={styles["title"]}>Profile Picture</h5>

      <div className={styles["profile-picture-form"]}>
        <InputField
          label="Image"
          id="profileImage"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles["profile-picture-form"]}
          inputClassName={styles["form-control"]}
        />
      </div>
    </div>
  );
}

export default ProfilePicture;
