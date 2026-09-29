import React from "react";
import styles from "./OtherRoles.module.css";
import SelectField from "../selectField/SelectField";
import InputField from "../inputField/InputField";
import Buttonfield from "../buttonField/ButtonField";
import useFetch from "../fetch/Fetch";

function OtherRoles({ data = [], onChange, setFormData }) {
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

  const createEmptyRow = () => ({
    location: "",
    DDO: "",
    department: "",
    desgination: "",
    assignDate: "",
    releaseDate: "",
  });

  const handleAddRow = () => {
    setFormData((prev) => ({
      ...prev,
      otherRoles: [...prev.otherRoles, createEmptyRow()],
    }));
  };

  const handleDeleteRow = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      otherRoles: prev.otherRoles.filter((_, idx) => idx !== indexToRemove),
    }));
  };

  const rows = Array.isArray(data) ? data : [createEmptyRow()];

  return (
    <div className={styles["other-roles-container"]}>
      <h3>Other Roles</h3>

      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Location</th>
            <th>DDO</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Assign Date</th>
            <th>Release Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <SelectField
                  name="location"
                  value={row.location || ""}
                  onChange={(e) => onChange(e, index)}
                  defaultValue="Select Location"
                  selectClassName={styles["form-select"]}
                  options={locationOptions}
                />
              </td>

              <td>
                <SelectField
                  name="DDO"
                  value={row.DDO || ""}
                  onChange={(e) => onChange(e, index)}
                  defaultValue="Select DDO"
                  selectClassName={styles["form-select"]}
                  options={ddoOptions}
                />
              </td>

              <td>
                <SelectField
                  name="department"
                  value={row.department || ""}
                  onChange={(e) => onChange(e, index)}
                  defaultValue="Select department"
                  selectClassName={styles["form-select"]}
                  options={deptOptions}
                />
              </td>

              <td>
                <SelectField
                  name="desgination"
                  value={row.desgination || ""}
                  onChange={(e) => onChange(e, index)}
                  defaultValue="Select designation"
                  selectClassName={styles["form-select"]}
                  options={desginationOptions}
                />
              </td>

              <td>
                <InputField
                  type="date"
                  name="assignDate"
                  value={row.assignDate || ""}
                  onChange={(e) => onChange(e, index)}
                  inputClassName={styles["form-control"]}
                />
              </td>

              <td>
                <InputField
                  type="date"
                  name="releaseDate"
                  value={row.releaseDate || ""}
                  onChange={(e) => onChange(e, index)}
                  inputClassName={styles["form-control"]}
                />
              </td>

              <td className={styles["text-center"]}>
                <Buttonfield
                  type="button"
                  className={styles["btn-delete"]}
                  onClick={() => handleDeleteRow(index)}
                >
                  <span>🗑</span> Delete
                </Buttonfield>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles["d-flex-end"]}>
        <Buttonfield
          type="button"
          className={styles["btn-add"]}
          onClick={handleAddRow}
          title="Add"
        />
      </div>
    </div>
  );
}

export default OtherRoles;
