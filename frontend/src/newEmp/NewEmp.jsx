import PersonalInfo from "../personalInfo/PersonalInfo";
import OtherDetails from "../otherDetails/OtherDetails";
import OtherRoles from "../otherRoles/OtherRoles";
import OtherDetails2 from "../otherDetails2/OtherDetails2";
import BankDetails from "../bankDetails/BankDetails";
import PF_Details from "../pf_details/PF_Details";
import SalaryStructure from "../salaryStructure/SalaryStructure";
import EarningAndDeductionHead from "../earnningAndDeduction/EarningAndDeduction";
import ProfilePicture from "../profilePicture/ProfilePicture";
import { useState } from "react";
import styles from "./NewEmp.module.css";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";
import Buttonfield from "../buttonField/ButtonField";
import useFetch from "../fetch/Fetch";

const CHOSEN_MAP = {
  personalInfo: PersonalInfo,
  otherDetails: OtherDetails,
  otherRoles: OtherRoles,
  otherDetails2: OtherDetails2,
  bankDetails: BankDetails,
  pf_details: PF_Details,
  salaryStructure: SalaryStructure,
  earningAndDeductionHead: EarningAndDeductionHead,
  profilePicture: ProfilePicture,
};

const INITIAL_FORMDATA = {
  baseInfo: {
    empCode: "AUTO-GENERATED",
    title: "select title",
    empName: "",
    manualEmpCode: "",
    fatherName: "",
  },
  personalInfo: {
    gender: "",
    religion: "",
    maritalStatus: "",
    email: "",
    adhaarNo: "",
    state: "",
    personalCategory: "",
    postCategory: "",
    dob: "",
    PAN: "",
    mobileNo: "",
  },
  otherDetails: {
    location: "",
    department: "",
    designation: "",
    dateOfAppointment: "",
    inProbation: "NO",
    dateOfRetirement: "",
    lastJoiningDate: "",
    employeeLeftStatus: "NO",
    employeeLeftStatusDetail: "",
    leavingDate: "",
    leavingRemarks: "",
    technicalServiceGrade: "",
    DDO: "",
    deptHead: "",
    discipline: "",
    dateOfJoining: "",
    lastAppointmentDate: "",
    fundType: "",
    budgetHead: "",
    budgetHeadDetails: "",
    natureType: "",
    presentDiscipline: "",
    technicalServiceCategory: "",
  },
  otherRoles: [
    {
      location: "",
      DDO: "",
      department: "",
      desgination: "",
      assignDate: "",
      releaseDate: "",
    },
  ],
  otherDetails2: {
    reportingTo: "",
    reportingDirector: "",
    deputedLocation: "",
    association: "",
    isHandicapped: "NO",
    class: "",
    ptApplicable: "NO",
    onDeputation: "NO",
    isSuspended: "NO",
    salaryBillType: "",
    postingDDO: "",
    stopSalary: "NO",
  },
  bankDetails: {
    paymentMode: "",
    bank: "",
    ifsc: "",
    vendorCode: "N/A",
    accountNo: "",
    accountType: "",
    MICR: "",
  },
  pf_details: { pfBank: "", pfBalance: "", pfAccount: "" },
  salaryStructure: {
    pfType: "",
    desgination: "",
    entryGroup: "",
    entryPayLevel: "",
    presentGroup: "",
    basic: "",
    postingCity: "",
    postedDesignation: "",
    quarterNo: "",
    incrementNo: "",
    presentPayLevel: "",
    incrementDueDate: "",
  },
  earningAndDeductionHead: {
    earnings: [
      {
        description: "",
        mapping: "",
        amount: "",
        assignmentFrom: "",
        isManual: "",
      },
    ],
    deductions: [
      {
        description: "",
        mapping: "",
        amount: "",
        assignmentFrom: "",
        isManual: "",
      },
    ],
  },
  profilePicture: { image: null },
};

function NewEmp() {
  const [activeTab, setActivetab] = useState("personalInfo");
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  const titleOptions = useFetch({
    endpoint: "/newEmp/salutations",
    valueKey: "SAL_ID",
    labelKey: "SALUTATION",
  });

  const handleChange = (section, e, index = null) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (index !== null && Array.isArray(prev[section])) {
        const updatedArray = [...prev[section]];
        updatedArray[index] = { ...updatedArray[index], [name]: value };
        return { ...prev, [section]: updatedArray };
      }

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      };
    });
  };

  const SelectedTab = CHOSEN_MAP[activeTab];

  const handleReset = () => {
    setFormData(INITIAL_FORMDATA);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className={styles["full-body"]}>
        <div className={styles["upper-form"]}>
          <form onSubmit={handleSave}>
            <fieldset>
              <legend>New Record</legend>

              <InputField
                label="Employee code"
                className={styles["mb-3"]}
                id="empCode"
                name="empCode"
                disabled
                value={formData.baseInfo.empCode}
                labelClassName={styles["form-label"]}
                inputClassName={styles["form-control"]}
              />
              <InputField
                label="Employee Code(M) *"
                className={styles["mb-3"]}
                id="manualEmpCode"
                name="manualEmpCode"
                placeholder="Manual Employee Code"
                value={formData.baseInfo.manualEmpCode}
                onChange={(e) => handleChange("baseInfo", e)}
                labelClassName={styles["form-label"]}
                inputClassName={styles["form-control"]}
                required
              />

              <div className={styles["mb-3"]}>
                <label htmlFor="empNameSelect" className={styles["form-label"]}>
                  Employee Name *
                </label>

                <SelectField
                  name="title"
                  id="empNameSelect"
                  selectClassName={styles["select-label-empName"]}
                  value={formData.baseInfo.title}
                  onChange={(e) => handleChange("baseInfo", e)}
                  defaultValue="select title"
                  options={titleOptions}
                />

                <InputField
                  type="text"
                  inputClassName={styles["form-control"]}
                  placeholder="Name"
                  name="empName"
                  value={formData.baseInfo.empName}
                  onChange={(e) => handleChange("baseInfo", e)}
                  required
                />
              </div>

              <InputField
                label="Father Name"
                className={styles["mb-3"]}
                id="fatherName"
                name="fatherName"
                placeholder="Father Name"
                value={formData.baseInfo.fatherName}
                onChange={(e) => handleChange("baseInfo", e)}
                labelClassName={styles["form-label"]}
                inputClassName={styles["form-control"]}
                required
              />
            </fieldset>
          </form>
        </div>

        <div className={styles["nav-tab"]}>
          {Object.keys(CHOSEN_MAP).map((tabKey) => (
            <div
              key={tabKey}
              className={`${styles.tab} ${activeTab === tabKey ? styles.active : ""}`}
              onClick={() => setActivetab(tabKey)}
              style={{ cursor: "pointer" }}
            >
              {tabKey
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </div>
          ))}
        </div>

        <div className={styles["tab-content"]}>
          {SelectedTab && (
            <SelectedTab
              data={formData[activeTab]}
              onChange={(e, index = null) => handleChange(activeTab, e, index)}
              setFormData={setFormData}
            />
          )}
        </div>

        <div className={styles["lower-body"]}>
          <Buttonfield onClick={handleSave} title={"Save"} />
          <Buttonfield title={"Back"} />
          <Buttonfield onClick={handleReset} title={"Reset"} />
        </div>
      </div>
    </>
  );
}

export default NewEmp;
