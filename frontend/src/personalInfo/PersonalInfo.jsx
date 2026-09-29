import styles from "./PersonalInfo.module.css";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";
import useFetch from "../fetch/Fetch";
import { useTheme } from "../context/CreateContext";

function PersonalInfo({ data = {}, onChange }) {
  const { theme, setTheme } = useTheme();
  const genderOptions = useFetch({
    endpoint: "/newEmp/gender/WEB/GENDER/Y",
    valueKey: "PDOC",
    labelKey: "DESCP1",
  });
  const stateOptions = useFetch({
    endpoint: "/newEmp/state",
    valueKey: "STATE_ID",
    labelKey: "STATE",
  });
  const maritalOptions = useFetch({
    endpoint: "/newEmp/marital",
    valueKey: "MARITAL_ID",
    labelKey: "MARITAL",
  });
  const religionOptions = useFetch({
    endpoint: "/newEmp/religion",
    valueKey: "RELIGION_ID",
    labelKey: "RELIGION",
  });
  const categoryOptions = useFetch({
    endpoint: "/newEmp/category",
    valueKey: "CATEGORY_ID",
    labelKey: "CATEGORY",
  });
  return (
    <div className={styles[`personal-info-form-body`]}>
      <div className={styles["personal-info-form"]}>
        <SelectField
          label="Gender *"
          id="gender"
          name="gender"
          value={data.gender || ""}
          onChange={onChange}
          required
          defaultValue="Select Gender"
          className={styles["personal-info-label"]}
          labelClassName=""
          selectClassName={styles["form-select"]}
          options={genderOptions}
        />

        <SelectField
          label="Personal Category *"
          id="personalCategory"
          name="personalCategory"
          value={data.personalCategory || ""}
          onChange={onChange}
          required
          defaultValue="Select Personal Category"
          className={styles["personal-info-label"]}
          selectClassName={styles["form-select"]}
          options={categoryOptions}
        />

        <SelectField
          label="Religion *"
          id="religion"
          name="religion"
          value={data.religion || ""}
          onChange={onChange}
          required
          defaultValue="Select Religion"
          className={styles["personal-info-label"]}
          selectClassName={styles["form-select"]}
          options={religionOptions}
        />
        <SelectField
          label="Post Category *"
          id="postCategory"
          name="postCategory"
          value={data.postCategory || ""}
          onChange={onChange}
          required
          defaultValue="Select Post Category"
          className={styles["personal-info-label"]}
          selectClassName={styles["form-select"]}
          options={categoryOptions}
        />
        <SelectField
          label="Marital Status *"
          id="maritalStatus"
          name="maritalStatus"
          value={data.maritalStatus || ""}
          onChange={onChange}
          required
          defaultValue="Select Marital Status"
          className={styles["personal-info-label"]}
          selectClassName={styles["form-select"]}
          options={maritalOptions}
        />
        <InputField
          label="Date of Birth *"
          id="dob"
          name="dob"
          type="date"
          value={data.dob || ""}
          onChange={onChange}
          required
          className={styles["personal-info-label"]}
          inputClassName={styles["form-control"]}
        />

        <InputField
          label="Email Address *"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={data.email || ""}
          onChange={onChange}
          required
          className={styles["personal-info-label"]}
          inputClassName={styles["form-control"]}
        />
        <InputField
          label="PAN *"
          id="PAN"
          name="PAN"
          type="text"
          placeholder="PAN no."
          value={data.PAN || ""}
          onChange={onChange}
          required
          className={styles["personal-info-label"]}
          inputClassName={styles["form-control"]}
        />

        <InputField
          label="Adhaar No. *"
          id="adhaarNo"
          name="adhaarNo"
          type="number"
          placeholder="Adhaar no."
          value={data.adhaarNo || ""}
          onChange={onChange}
          required
          className={styles["personal-info-label"]}
          inputClassName={styles["form-control"]}
        />
        <InputField
          label="Mobile No. *"
          id="mobileNo"
          name="mobileNo"
          type="number"
          placeholder="Mobile no."
          value={data.mobileNo || ""}
          onChange={onChange}
          required
          className={styles["personal-info-label"]}
          inputClassName={styles["form-control"]}
        />

        <SelectField
          label="State *"
          id="state"
          name="state"
          value={data.state || ""}
          onChange={onChange}
          required
          defaultValue="Select State"
          className={styles["personal-info-label"]}
          selectClassName={styles["form-select"]}
          options={stateOptions}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
