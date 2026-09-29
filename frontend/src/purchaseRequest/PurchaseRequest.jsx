import { useState } from "react";
import styles from "./PurchaseRequest.module.css";

export default function PurchaseRequest({ onSubmitRequest }) {
  const [activeTab, setActiveTab] = useState("new"); // 'new' or 'history'

  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    department: "",
    justification: "",
  });

  // Sample data for previous requests
  const [previousRequests, setPreviousRequests] = useState([
    {
      id: "PR-1001",
      itemName: "Ergonomic Desk Chair",
      quantity: 1,
      department: "Engineering",
      status: "Approved",
      date: "2026-07-20",
    },
    {
      id: "PR-1002",
      itemName: "27-inch Monitor",
      quantity: 2,
      department: "Engineering",
      status: "Pending",
      date: "2026-07-25",
    },
    {
      id: "PR-1003",
      itemName: "Mechanical Keyboard",
      quantity: 1,
      department: "IT Support",
      status: "Rejected",
      date: "2026-07-26",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: `PR-${1000 + previousRequests.length + 1}`,
      ...formData,
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
    };

    setPreviousRequests([newEntry, ...previousRequests]);

    if (onSubmitRequest) {
      onSubmitRequest(formData);
    }

    setFormData({
      itemName: "",
      quantity: "",
      department: "",
      justification: "",
    });

    // Switch automatically to history tab to view the newly added request
    setActiveTab("history");
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return styles.statusApproved;
      case "rejected":
        return styles.statusRejected;
      default:
        return styles.statusPending;
    }
  };

  return (
    <div className={styles.card}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Purchase Request</legend>

        {/* Tab Switcher */}
        <div className={styles.tabHeader}>
          <button
            type="button"
            className={`${styles.tabButton} ${
              activeTab === "new" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("new")}
          >
            New Request
          </button>
          <button
            type="button"
            className={`${styles.tabButton} ${
              activeTab === "history" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("history")}
          >
            Previous Requests ({previousRequests.length})
          </button>
        </div>

        {activeTab === "new" ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                className={styles.input}
                placeholder="e.g. Ergonomic Chair"
                required
              />
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. 2"
                  min="1"
                  required
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g. Engineering"
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Justification</label>
              <textarea
                name="justification"
                value={formData.justification}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Reason for purchase..."
                rows="3"
                required
              />
            </div>

            <div className={styles.actionContainer}>
              <button type="submit" className={styles.submitButton}>
                Submit Request
              </button>
            </div>
          </form>
        ) : (
          /* Tab 2: Previous Requests View */
          <div className={styles.historyList}>
            {previousRequests.length === 0 ? (
              <p className={styles.emptyState}>No previous requests found.</p>
            ) : (
              previousRequests.map((req) => (
                <div key={req.id} className={styles.historyItem}>
                  <div className={styles.historyMain}>
                    <span className={styles.historyItemName}>
                      {req.itemName}
                    </span>
                    <span className={styles.historyDetails}>
                      Qty: {req.quantity} • {req.department}
                    </span>
                  </div>
                  <div className={styles.historyMeta}>
                    <span
                      className={`${styles.statusBadge} ${getStatusClass(
                        req.status,
                      )}`}
                    >
                      {req.status}
                    </span>
                    <span className={styles.historyDate}>{req.date}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </fieldset>
    </div>
  );
}
