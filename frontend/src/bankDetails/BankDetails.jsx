import React from "react";
import styles from "./BankDetails.module.css";
import SelectField from "../selectField/SelectField";
import InputField from "../inputField/InputField";
import useFetch from "../fetch/Fetch";
function BankDetails({ data = {}, onChange }) {
  const paymentModeOptions = useFetch({
    endpoint: "/newEmp/paymentMode/HRMS/PAY_MODE/Y",
    valueKey: "PDOC",
    labelKey: "DESCP1",
  });
  return (
    <div className={styles["bank-details-body"]}>
      <div className={styles["bank-details-form"]}>
        <SelectField
          label="payment Mode *"
          id="paymentMode"
          name="paymentMode"
          value={data.paymentMode || ""}
          onChange={onChange}
          required
          defaultValue="Select Payment Mode"
          className={styles["bank-details-label"]}
          selectClassName={styles["form-select"]}
          options={paymentModeOptions}
        />
        <InputField
          label="accountNo *"
          id="accountNo"
          name="accountNo"
          type="number"
          value={data.accountNo || ""}
          onChange={onChange}
          required
          className={styles["bank-details-label"]}
          inputClassName={styles["form-input"]}
        />

        <InputField
          label="bank *"
          id="bank"
          name="bank"
          type="text"
          value={data.bank || ""}
          onChange={onChange}
          required
          className={styles["bank-details-label"]}
          inputClassName={styles["form-input"]}
        />
        <SelectField
          label="Account Type *"
          id="accountType"
          name="accountType"
          value={data.accountType || ""}
          onChange={onChange}
          required
          defaultValue="Select accountType"
          className={styles["bank-details-label"]}
          selectClassName={styles["form-select"]}
          options={[
            { value: "1", label: "Savings" },
            { value: "2", label: "Current" },
          ]}
        />

        <InputField
          label="ifsc *"
          id="ifsc"
          name="ifsc"
          type="text"
          value={data.ifsc || ""}
          onChange={onChange}
          required
          className={styles["bank-details-label"]}
          inputClassName={styles["form-input"]}
        />
        <InputField
          label="MICR *"
          id="MICR"
          name="MICR"
          type="number"
          value={data.MICR || ""}
          onChange={onChange}
          required
          className={styles["bank-details-label"]}
          inputClassName={styles["form-input"]}
        />

        <InputField
          label="vendorCode *"
          id="vendorCode"
          name="vendorCode"
          type="text"
          value={data.vendorCode || ""}
          onChange={onChange}
          required
          className={styles["bank-details-label"]}
          inputClassName={styles["form-input"]}
        />
      </div>
    </div>
  );
}

export default BankDetails;
