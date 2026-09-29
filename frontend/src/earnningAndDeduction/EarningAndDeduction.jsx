import React from "react";
import styles from "./EarningAndDeduction.module.css";
import InputField from "../inputField/InputField";
import SelectField from "../selectField/SelectField";

const RenderHeadTable = ({ title, list, onInputChange, type, options }) => (
  <div>
    <h5 className={styles["table-title"]}>{title}</h5>
    <div className={styles["table-wrapper"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Mapping</th>
            <th>Amount</th>
            <th>Assignment From</th>
            <th>Is Manual</th>
          </tr>
        </thead>
        <tbody>
          {(list || []).map((row, index) => (
            <tr key={index}>
              <td>
                <InputField
                  type="text"
                  value={row.description}
                  onChange={(e) =>
                    onInputChange(type, index, "description", e.target.value)
                  }
                  inputClassName={styles["form-control"]}
                />
              </td>
              <td>
                <SelectField
                  value={row.mapping}
                  onChange={(e) =>
                    onInputChange(type, index, "mapping", e.target.value)
                  }
                  selectClassName={styles["form-select"]}
                  options={options?.mapping || []}
                />
              </td>
              <td>
                <InputField
                  type="number"
                  value={row.amount}
                  onChange={(e) =>
                    onInputChange(type, index, "amount", e.target.value)
                  }
                  inputClassName={styles["form-control"]}
                />
              </td>
              <td>
                <SelectField
                  value={row.assignmentFrom}
                  onChange={(e) =>
                    onInputChange(type, index, "assignmentFrom", e.target.value)
                  }
                  selectClassName={styles["form-select"]}
                  options={options?.assignment || []}
                />
              </td>
              <td>
                <SelectField
                  value={row.isManual}
                  onChange={(e) =>
                    onInputChange(type, index, "isManual", e.target.value)
                  }
                  selectClassName={styles["form-select"]}
                  options={options?.boolean || []}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

function EarningDeductionHead({
  earningsList,
  deductionsList,
  handleInputChange,
  options,
}) {
  return (
    <div className={styles["earning-deduction-container"]}>
      <div className={styles["tables-grid"]}>
        <RenderHeadTable
          title="Earning Head"
          type="earnings"
          list={earningsList}
          onInputChange={handleInputChange}
          options={options}
        />
        <RenderHeadTable
          title="Deduction Head"
          type="deductions"
          list={deductionsList}
          onInputChange={handleInputChange}
          options={options}
        />
      </div>
    </div>
  );
}

export default EarningDeductionHead;
