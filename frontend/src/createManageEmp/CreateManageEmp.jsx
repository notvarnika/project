import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CreateManageEmp.module.css"; // Converted to CSS Modules

function CreateManageEmp({ onSelectOption }) {
  const [formData, setFormData] = useState({
    location: "",
    employeeCode: "",
    employeeName: "",
    department: "",
    fundType: "",
    employeeLeftStatus: "No",
    classType: "",
    payLevel: "",
    ddo: "",
    employeeCodeM: "",
    designation: "",
    discipline: "",
    natureType: "",
    category: "",
    group: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search clicked:", formData);
  };

  const handleReset = () => {
    setFormData({
      location: "",
      employeeCode: "",
      employeeName: "",
      department: "",
      fundType: "",
      employeeLeftStatus: "No",
      classType: "",
      payLevel: "",
      ddo: "",
      employeeCodeM: "",
      designation: "",
      discipline: "",
      natureType: "",
      category: "",
      group: "",
      state: "",
    });
  };

  return (
    <div className={styles["erp-page-wrapper"]}>
      <h2 className={styles["erp-page-title"]}>Create and Manage Employee</h2>

      <div className={styles["erp-form-card"]}>
        <div className={styles["erp-criteria-banner"]}>Searching Criteria</div>

        <form className={styles["erp-form"]}>
          <div className="row g-4 px-4 py-3">
            <div className="col-md-6">
              <div className={styles["erp-form-group"]}>
                <label>Location</label>
                <select
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="">Select Location</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Employee Code</label>
                <select
                  name="employeeCode"
                  className="form-select"
                  value={formData.employeeCode}
                  onChange={handleChange}
                >
                  <option value="">Select Employee Code</option>
                  <option value="E001">E001</option>
                  <option value="E002">E002</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  className="form-control"
                  placeholder="Employee Name"
                  value={formData.employeeName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Department</label>
                <select
                  name="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Fund Type</label>
                <select
                  name="fundType"
                  className="form-select"
                  value={formData.fundType}
                  onChange={handleChange}
                >
                  <option value="">Select Fund Type</option>
                  <option value="General">General</option>
                  <option value="Special">Special</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Employee Left Status</label>
                <select
                  name="employeeLeftStatus"
                  className="form-select"
                  value={formData.employeeLeftStatus}
                  onChange={handleChange}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Class</label>
                <select
                  name="classType"
                  className="form-select"
                  value={formData.classType}
                  onChange={handleChange}
                >
                  <option value="">Select Class Type</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Pay Level</label>
                <select
                  name="payLevel"
                  className="form-select"
                  value={formData.payLevel}
                  onChange={handleChange}
                >
                  <option value="">Select Pay Level</option>
                  <option value="L1">Level 1</option>
                  <option value="L2">Level 2</option>
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles["erp-form-group"]}>
                <label>DDO</label>
                <select
                  name="ddo"
                  className="form-select"
                  value={formData.ddo}
                  onChange={handleChange}
                >
                  <option value="">Select DDO</option>
                  <option value="DDO1">DDO1</option>
                  <option value="DDO2">DDO2</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Employee Code(M)</label>
                <input
                  type="text"
                  name="employeeCodeM"
                  className="form-control"
                  placeholder="Manual Employee Code"
                  value={formData.employeeCodeM}
                  onChange={handleChange}
                />
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Designation</label>
                <select
                  name="designation"
                  className="form-select"
                  value={formData.designation}
                  onChange={handleChange}
                >
                  <option value="">Select Designation</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Discipline</label>
                <select
                  name="discipline"
                  className="form-select"
                  value={formData.discipline}
                  onChange={handleChange}
                >
                  <option value="">Select Discipline</option>
                  <option value="IT">IT</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Nature Type</label>
                <select
                  name="natureType"
                  className="form-select"
                  value={formData.natureType}
                  onChange={handleChange}
                >
                  <option value="">Select Nature Type</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Category</label>
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>Group</label>
                <select
                  name="group"
                  className="form-select"
                  value={formData.group}
                  onChange={handleChange}
                >
                  <option value="">Select Group</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>

              <div className={styles["erp-form-group"]}>
                <label>State</label>
                <select
                  name="state"
                  className="form-select"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="DL">Delhi</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles["erp-btn-container"]}>
            <button
              type="button"
              className={styles["erp-btn"]}
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              className={styles["erp-btn"]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectOption("newEmp");
              }}
            >
              New
            </button>
            <button
              type="button"
              className={styles["erp-btn"]}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateManageEmp;
