import React, { use } from "react";
import styles from "./OtherDetails2.module.css";
import SelectField from "../selectField/SelectField";
import useFetch from "../fetch/Fetch";
function OtherDetails2({ data = {}, onChange }) {
  const standardUserOptions = [
    { value: "1", label: "me" },
    { value: "2", label: "varnika" },
    { value: "3", label: "Other" },
  ];

  const booleanOptions = [
    { value: "No", label: "No" },
    { value: "Yes", label: "Yes" },
  ];

  const salaryBillTypeOptions = useFetch({
    endpoint: "/newEmp/salaryBill",
    valueKey: "BILL_TYPE_ID",
    labelKey: "DESCRIPTION",
  });
  const locationOptions = useFetch({
    endpoint: "/newEmp/location",
    valueKey: "LOCATION_CODE",
    labelKey: "LOCATION_NAME",
  });

  const associationOptions = useFetch({
    endpoint: "/newEmp/association",
    valueKey: "ASSOCIATION_ID",
    labelKey: "association_name",
  });
  const classOptions = useFetch({
    endpoint: "/newEmp/class",
    valueKey: "CLASS_ID",
    labelKey: "CLASS",
  });
  const ddoOptions = useFetch({
    endpoint: "/newEmp/ddo",
    valueKey: "DDONAME",
    labelKey: "DDOCODE",
  });

  return (
    <div className={styles["other-details2-body"]}>
      <div className={styles["other-details2-form"]}>
        <SelectField
          label="Reporting To"
          id="reportingTo"
          name="reportingTo"
          value={data.reportingTo || ""}
          onChange={onChange}
          defaultValue="Reporting To"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={standardUserOptions}
        />

        <SelectField
          label="on Deputation?"
          id="onDeputation"
          name="onDeputation"
          value={data.onDeputation || "No"}
          onChange={onChange}
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={booleanOptions}
        />

        <div></div>

        <SelectField
          label="Deputed Location"
          id="deputedLocation"
          name="deputedLocation"
          value={data.deputedLocation || ""}
          onChange={onChange}
          defaultValue="Deputed Location"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={locationOptions}
        />

        <SelectField
          label="is Suspended?"
          id="isSuspended"
          name="isSuspended"
          value={data.isSuspended || "No"}
          onChange={onChange}
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={booleanOptions}
        />
        <SelectField
          label="association"
          id="association"
          name="association"
          value={data.association || ""}
          onChange={onChange}
          defaultValue="association"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={associationOptions}
        />

        <SelectField
          label="salaryBillType *"
          id="salaryBillType"
          name="salaryBillType"
          value={data.salaryBillType || ""}
          onChange={onChange}
          required
          defaultValue="Select Salary Bill Type"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={salaryBillTypeOptions}
        />
        <SelectField
          label="is Handicapped?"
          id="isHandicapped"
          name="isHandicapped"
          value={data.isHandicapped || "No"}
          onChange={onChange}
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={booleanOptions}
        />
        <div></div>
        <SelectField
          label="class"
          id="class"
          name="class"
          value={data.class || ""}
          onChange={onChange}
          defaultValue="class"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={classOptions}
        />
        <SelectField
          label="posting DDO *"
          id="postingDDO"
          name="postingDDO"
          value={data.postingDDO || ""}
          onChange={onChange}
          required
          defaultValue="Select Posting DDO Type"
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={ddoOptions}
        />

        <SelectField
          label="is PT-Applicable?"
          id="ptApplicable"
          name="ptApplicable"
          value={data.ptApplicable || "No"}
          onChange={onChange}
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={booleanOptions}
        />

        <SelectField
          label="Stop Salary"
          id="stopSalary"
          name="stopSalary"
          value={data.stopSalary || "No"}
          onChange={onChange}
          className={styles["other-details2-label"]}
          selectClassName={styles["form-select"]}
          options={booleanOptions}
        />
      </div>
    </div>
  );
}

export default OtherDetails2;
