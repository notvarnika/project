import styles from "./OtherDetails.module.css";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";
import useFetch from "../fetch/Fetch";

function OtherDetails({ data = {}, onChange }) {
  const locationOptions = useFetch({
    endpoint: "/newEmp/location",
    valueKey: "LOCATION_CODE",
    labelKey: "LOCATION_NAME",
  });

  const ddoOptions = useFetch({
    endpoint: "/newEmp/ddo",
    valueKey: "DDONAME",
    labelKey: "DDOCODE",
  });

  const deptOptions = useFetch({
    endpoint: "/newEmp/dept",
    valueKey: "DEPT_ID",
    labelKey: "DEPARTMENT",
  });
  const desginationOptions = useFetch({
    endpoint: "/newEmp/designation",
    valueKey: "DESIGNATION_ID",
    labelKey: "DESIGNATION",
  });
  const deptHeadOptions = useFetch({
    endpoint: "/newEmp/deptHead",
    valueKey: "DEPT_HEAD_ID",
    labelKey: "DEPARTMENT_HEAD_NAME",
  });
  const disciplineOptions = useFetch({
    endpoint: "/newEmp/discipline",
    valueKey: "DISC_ID",
    labelKey: "DISCIPLINE",
  });

  const fundTypeOptions = useFetch({
    endpoint: "/newEmp/fundType",
    valueKey: "FUND_TYPE_ID",
    labelKey: "DESCRIPTION",
  });

  const budgetHeadOptions = useFetch({
    endpoint: "/newEmp/budgetHead/fund",
    valueKey: "FUND_TYPE",
    labelKey: "FUND_TYPE",
  });

  const dependentOptions = useFetch({
    endpoint: data.budgetHead
      ? `/newEmp/budgetHead/fund/${data.budgetHead}`
      : "/newEmp/budgetHead/fund/none",
    valueKey: "BUDGET_HEAD_ID",
    labelKey: "CONCAT_HEAD",
  });

  const natureOptions = useFetch({
    endpoint: "/newEmp/nature",
    valueKey: "NATURE_ID",
    labelKey: "NATURE",
  });

  return (
    <div className={styles["other-details-form-body"]}>
      <div className={styles["other-details-form"]}>
        <SelectField
          label="Location *"
          id="location"
          name="location"
          value={data.location || ""}
          onChange={onChange}
          required
          defaultValue="Select Location"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={locationOptions}
        />
        <SelectField
          label="DDO *"
          id="DDO"
          name="DDO"
          value={data.DDO || ""}
          onChange={onChange}
          required
          defaultValue="Select DDO"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={ddoOptions}
        />

        <SelectField
          label="Department *"
          id="department"
          name="department"
          value={data.department || ""}
          onChange={onChange}
          required
          defaultValue="Select Department"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={deptOptions}
        />
        <SelectField
          label="Department Head"
          id="deptHead"
          name="deptHead"
          value={data.deptHead || ""}
          onChange={onChange}
          defaultValue="Select Department Head"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={deptHeadOptions}
        />

        <SelectField
          label="Designation *"
          id="designation"
          name="designation"
          value={data.designation || ""}
          onChange={onChange}
          required
          defaultValue="Select Designation"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={desginationOptions}
        />
        <SelectField
          label="Discipline *"
          id="discipline"
          name="discipline"
          value={data.discipline || ""}
          onChange={onChange}
          required
          defaultValue="Select Discipline"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={disciplineOptions}
        />

        <InputField
          label="Date Of Appointment *"
          id="dateOfAppointment"
          name="dateOfAppointment"
          type="date"
          value={data.dateOfAppointment || ""}
          onChange={onChange}
          required
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />
        <InputField
          label="Date Of Joining *"
          id="dateOfJoining"
          name="dateOfJoining"
          type="date"
          value={data.dateOfJoining || ""}
          onChange={onChange}
          required
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />

        <SelectField
          label="in Probabtion?"
          id="inProbation"
          name="inProbation"
          value={data.inProbation || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={[
            { value: "No", label: "No" },
            { value: "Yes", label: "Yes" },
          ]}
        />
        <InputField
          label="Last Appointment Date"
          id="lastAppointmentDate"
          name="lastAppointmentDate"
          type="date"
          value={data.lastAppointmentDate || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />

        <InputField
          label="Date Of Retirement"
          id="dateOfRetirement"
          name="dateOfRetirement"
          type="date"
          value={data.dateOfRetirement || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />
        <SelectField
          label="Fund Type *"
          id="fundType"
          name="fundType"
          value={data.fundType || ""}
          onChange={onChange}
          required
          defaultValue="Select Fund Type"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={fundTypeOptions}
        />

        <InputField
          label="Last Joining Date"
          id="lastJoiningDate"
          name="lastJoiningDate"
          type="date"
          value={data.lastJoiningDate || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />

        <SelectField
          label="Budget Head *"
          id="budgetHead"
          name="budgetHead"
          value={data.budgetHead || ""}
          onChange={onChange}
          required
          defaultValue="Select Budget Head"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={
            budgetHeadOptions && Array.isArray(budgetHeadOptions)
              ? Array.from(
                  new Map(
                    budgetHeadOptions.map((item) => [item.value, item]),
                  ).values(),
                )
              : []
          }
        />

        <div className={styles["form-row-container"]}>
          <SelectField
            label="Employee's Left Status"
            id="employeeLeftStatus"
            name="employeeLeftStatus"
            value={data.employeeLeftStatus || ""}
            onChange={onChange}
            className={styles["label-with-select"]}
            labelClassName={styles["other-details-label"]}
            selectClassName={styles["form-select-short"]}
            options={[
              { value: "No", label: "No" },
              { value: "Yes", label: "Yes" },
            ]}
          />
          <SelectField
            id="employeeLeftStatusDetail"
            name="employeeLeftStatusDetail"
            value={data.employeeLeftStatusDetail || ""}
            onChange={onChange}
            defaultValue="Select Employee Default Status"
            className={styles["select-only-wrapper"]}
            selectClassName={styles["form-select-long"]}
            options={[
              { value: "yet", label: "yes" },
              { value: "no", label: "no" },
            ]}
          />
        </div>

        <SelectField
          label="Nature Type *"
          id="natureType"
          name="natureType"
          value={data.natureType || ""}
          onChange={onChange}
          required
          defaultValue="Select Nature Type"
          className={styles["other-details-label"]}
          selectClassName={styles["form-select"]}
          options={natureOptions}
        />

        {data.budgetHead && (
          <SelectField
            label="Select Budget Head Detail *"
            id="budgetHeadDetail"
            name="budgetHeadDetail"
            value={data.budgetHeadDetail || ""}
            onChange={onChange}
            required
            defaultValue="Select Detail"
            className={styles["other-details-label"]}
            selectClassName={styles["form-select"]}
            options={dependentOptions}
          />
        )}

        <InputField
          label="Leaving Date"
          id="leavingDate"
          name="leavingDate"
          type="date"
          value={data.leavingDate || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />

        <InputField
          label="Leaving Remarks"
          id="leavingRemarks"
          name="leavingRemarks"
          type="text"
          placeholder="Leaving Remarks"
          value={data.leavingRemarks || ""}
          onChange={onChange}
          className={styles["other-details-label"]}
          inputClassName={styles["form-control"]}
        />
      </div>
    </div>
  );
}

export default OtherDetails;
