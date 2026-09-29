import { useState } from "react";
import styles from "./EmployeeMaster.module.css"; // Imported CSS Modules
import { useLocation, useNavigate } from "react-router-dom";

function EmployeeMaster({ onSelectOption }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [pinnedMenu, setPinnedMenu] = useState(null);

  const loc = useLocation();
  const user = loc.state?.user;
  const navigate = useNavigate();

  const handleHover = (menuName, isSub = false) => {
    if (!pinnedMenu) {
      isSub ? setActiveSubMenu(menuName) : setActiveMenu(menuName);
    }
  };

  const handleLeave = (menuName, isSub = false) => {
    if (!pinnedMenu) {
      if (isSub && activeSubMenu === menuName) {
        setActiveSubMenu(null);
      } else if (!isSub && activeMenu === menuName) {
        setActiveMenu(null);
      }
    }
  };

  const handleClick = (menuName, isSub = false) => {
    if (isSub) {
      setActiveSubMenu(activeSubMenu === menuName ? null : menuName);
    } else {
      if (pinnedMenu === menuName) {
        setPinnedMenu(null);
        setActiveMenu(null);
        setActiveSubMenu(null);
      } else {
        setPinnedMenu(menuName);
        setActiveMenu(menuName);
      }
    }
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <ul className={styles["sidebar-menu"]}>
          <li
            className={styles.dashboard}
            onClick={() => onSelectOption("dashboard")}
          >
            <span>Dashboard</span>
          </li>

          {/* EMPLOYEE MASTER */}
          <li
            className={`${styles["menu-item"]} ${activeMenu === "admission" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("admission")}
            onMouseLeave={() => handleLeave("admission")}
            onClick={() => handleClick("admission")}
          >
            <span>Employee Master</span>
            {activeMenu === "admission" && (
              <ul className={styles["submenu-admission"]}>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectOption("createManageEmp");
                  }}
                >
                  Create And Manage Employee
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  update profile history
                </li>
              </ul>
            )}
          </li>

          {/* ATTENDANCE */}
          <li
            className={`${styles["menu-item"]} ${activeMenu === "attendance" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("attendance")}
            onMouseLeave={() => handleLeave("attendance")}
            onClick={() => handleClick("attendance")}
          >
            <span>Employee Attendance</span>
            {activeMenu === "attendance" && (
              <ul className={styles["submenu-attendance"]}>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectOption("myAttendance");
                  }}
                >
                  my attendance
                </li>
                <li
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectOption("myCalendar");
                  }}
                >
                  my calender
                </li>
              </ul>
            )}
          </li>

          <li
            className={`${styles["menu-item"]} ${activeMenu === "course" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("course")}
            onMouseLeave={() => handleLeave("course")}
            onClick={() => handleClick("course")}
          >
            <span>Department</span>
            {activeMenu === "course" && (
              <ul className={styles["submenu-course"]}>
                <li onClick={(e) => e.stopPropagation()}>
                  student course registration
                </li>
                <li onClick={(e) => e.stopPropagation()}>
                  major/minor registration
                </li>
              </ul>
            )}
          </li>

          {/* EXAM */}
          <li
            className={`${styles["menu-item"]} ${activeMenu === "exam" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("exam")}
            onMouseLeave={() => handleLeave("exam")}
            onClick={() => handleClick("exam")}
          >
            <span>Applications</span>
            {activeMenu === "exam" && (
              <ul className={styles["submenu-exam"]}>
                <li
                  className={`${styles["menu-item"]} ${activeSubMenu === "reports" ? styles.active : ""}`}
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    handleHover("reports", true);
                  }}
                  onMouseLeave={(e) => {
                    e.stopPropagation();
                    handleLeave("reports", true);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("reports", true);
                  }}
                >
                  <span>Employee Reports</span>
                  {activeSubMenu === "reports" && (
                    <ul className={styles["submenu-exam-report"]}>
                      <li onClick={(e) => e.stopPropagation()}>
                        Student Grade Card
                      </li>
                    </ul>
                  )}
                </li>
                <li onClick={(e) => e.stopPropagation()}>Exam Schedule</li>
                <li onClick={(e) => e.stopPropagation()}>My Hall Tickets</li>
                <li onClick={(e) => e.stopPropagation()}>Exam Score</li>
                <li onClick={(e) => e.stopPropagation()}>Score Card</li>
                <li onClick={(e) => e.stopPropagation()}>
                  My Retest Exam Slip
                </li>
                <li onClick={(e) => e.stopPropagation()}>My Exam Form</li>
              </ul>
            )}
          </li>

          {/* FINANCE */}
          <li
            className={`${styles["menu-item"]} ${activeMenu === "finance" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("finance")}
            onMouseLeave={() => handleLeave("finance")}
            onClick={() => handleClick("finance")}
          >
            <span>Finance</span>
            {activeMenu === "finance" && (
              <ul className={styles["submenu-fee"]}>
                <li onClick={(e) => e.stopPropagation()}>
                  Student Fee Details
                </li>
              </ul>
            )}
          </li>

          {/* FEEDBACK */}
          <li
            className={`${styles["menu-item"]} ${activeMenu === "Feedback Form" ? styles.active : ""}`}
            onMouseEnter={() => handleHover("Feedback Form")}
            onMouseLeave={() => handleLeave("Feedback Form")}
            onClick={() => handleClick("Feedback Form")}
          >
            <span>Feedback Form</span>
            {activeMenu === "Feedback Form" && (
              <ul className={styles["submenu-feedback"]}>
                <li onClick={(e) => e.stopPropagation()}>My feedback form</li>
              </ul>
            )}
          </li>

          <li className={styles["registered-course"]}>My registered course</li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeMaster;
