import React from "react";
import styles from "./PF_Details.module.css";
import InputField from "../inputField/InputField";

function PF_Details({ data = {}, onChange }) {
  return (
    <div className={styles["pf-body"]}>
      <div className={styles["pf-form"]}>
        <InputField
          label="CPF/GPF/NPS BANK *"
          id="pfBank"
          name="pfBank"
          type="number"
          value={data.pfBank || ""}
          onChange={onChange}
          required
          className={styles["pf-label"]}
          inputClassName={styles["form-input"]}
        />

        <InputField
          label="CPF/GPF/NPS ACCOUNT NUMBER*"
          id="pfAccount"
          name="pfAccount"
          type="number"
          value={data.pfAccount || ""}
          onChange={onChange}
          required
          className={styles["pf-label"]}
          inputClassName={styles["form-input"]}
        />

        <InputField
          label="CPF/GPF/NPS BALANCE*"
          id="pfBalance"
          name="pfBalance"
          type="number"
          value={data.pfBalance || ""}
          onChange={onChange}
          required
          className={styles["pf-label"]}
          inputClassName={styles["form-input"]}
        />
      </div>
    </div>
  );
}

export default PF_Details;
