import React from "react";
import styles from "./SalaryStructure.module.css";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";
import Buttonfield from "../buttonField/ButtonField";
import useFetch from "../fetch/Fetch";

function SalaryStructure({ data = {}, onChange }) {
  const paylevelOptions = useFetch({
    endpoint: "/newEmp/payLevel",
    valueKey: "GD_id",
    labelKey: "basic_from",
  });

  const cityOptions = useFetch({
    endpoint: "/newEmp/city",
    valueKey: "CITY_ID",
    labelKey: "CITY_NAME",
  });

  const desginationOptions = useFetch({
    endpoint: "/newEmp/designation",
    valueKey: "DESIGNATION_ID",
    labelKey: "DESIGNATION",
  });
  const groupOptions = useFetch({
    endpoint: "/newEmp/group",
    valueKey: "GRADE_ID",
    labelKey: "GRADE_NAME",
  });
  const quarterOptions = useFetch({
    endpoint: "/newEmp/quarter",
    valueKey: "QUARTER_ID",
    labelKey: "QUARTER_ID",
  });
  return (
    <div className={styles["salary-structure-container"]}>
      <div className={styles["salary-structure-form"]}>
        <div className={styles["form-column"]}>
          <SelectField
            label="CPF/GPF/NPS Type"
            id="pfType"
            name="pfType"
            value={data.pfType || ""}
            onChange={onChange}
            defaultValue="Select PF Type"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={[
              { value: "cpf", label: "CPF" },
              { value: "gpf", label: "GPF" },
              { value: "nps", label: "NPS" },
            ]}
          />

          <SelectField
            label="Designation *"
            id="desgination"
            name="desgination"
            value={data.desgination || ""}
            onChange={onChange}
            required
            defaultValue="Select Designation"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={desginationOptions}
          />

          <SelectField
            label="Entry Group *"
            id="entryGroup"
            name="entryGroup"
            value={data.entryGroup || ""}
            onChange={onChange}
            required
            defaultValue="Select Group"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={groupOptions}
          />

          <SelectField
            label="Entry Pay Level *"
            id="entryPayLevel"
            name="entryPayLevel"
            value={data.entryPayLevel || ""}
            onChange={onChange}
            required
            defaultValue="Select Pay Level"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={paylevelOptions}
          />

          <InputField
            label="Basic *"
            id="basic"
            name="basic"
            type="number"
            placeholder="Basic"
            value={data.basic || ""}
            onChange={onChange}
            required
            className={styles["salary-label"]}
            inputClassName={styles["form-control"]}
          />
        </div>

        <div className={styles["form-column"]}>
          <SelectField
            label="Posting City *"
            id="postingCity"
            name="postingCity"
            value={data.postingCity || ""}
            onChange={onChange}
            required
            defaultValue="Select Posting City"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={cityOptions}
          />

          <SelectField
            label="Posted Designation"
            id="postedDesignation"
            name="postedDesignation"
            value={data.postedDesignation || ""}
            onChange={onChange}
            defaultValue="Posted Designation"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={desginationOptions}
          />

          <SelectField
            label="Quarter No"
            id="quarterNo"
            name="quarterNo"
            value={data.quarterNo || ""}
            onChange={onChange}
            defaultValue="Select Quarter No"
            className={styles["salary-label"]}
            selectClassName={styles["form-select"]}
            options={quarterOptions}
          />
        </div>
      </div>

      <div className={styles["d-flex-center"]}>
        <Buttonfield
          type="button"
          className={styles["btn-heads"]}
          title="Heads"
        />
      </div>
    </div>
  );
}

export default SalaryStructure;
