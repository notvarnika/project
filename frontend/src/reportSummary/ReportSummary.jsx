import styles from "./ReportSummary.module.css";

export default function ReportSummary({
  mostRecent = "Expense Claim - July",
  unsubmittedReports = 0,
  awaitingApproval = 0,
  awaitingReimbursement = 0,
}) {
  return (
    <div className={styles.summaryCard}>
      <fieldset className={styles.summaryFieldset}>
        <legend className={styles.summaryLegend}>Report Summary</legend>

        <div className={styles.recentSection}>
          <span className={styles.label}>Most Recent:</span>
          <span className={styles.recentValue}>{mostRecent}</span>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span className={styles.statCount}>{unsubmittedReports}</span>
            <span className={styles.statLabel}>Unsubmitted Reports</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statCount}>{awaitingApproval}</span>
            <span className={styles.statLabel}>Awaiting Approval</span>
          </div>

          <div className={styles.statBox}>
            <span className={styles.statCount}>{awaitingReimbursement}</span>
            <span className={styles.statLabel}>Awaiting Reimbursement</span>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
