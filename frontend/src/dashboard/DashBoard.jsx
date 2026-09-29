import { useState } from "react";
import Header from "../header/Header";
import EmployeeMaster from "../treemenu/EmployeeMaster";
import Button from "../button/Button";
import CreateManageEmp from "../createManageEmp/CreateManageEmp";
import NewEmp from "../newEmp/NewEmp";
import ReportSummary from "../reportSummary/ReportSummary";
import Welcome from "../welcome/Welcome";
import PendingTask from "../pendingTask/PendingTask";
import styles from "./DashBoard.module.css";
import TodoList from "../toDoList/ToDoList";
import PurchaseRequest from "../purchaseRequest/PurchaseRequest";

const COMPONENT_MAP = {
  createManageEmp: CreateManageEmp,
  newEmp: NewEmp,
};

function DashBoard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState(null);

  const [headerLoading, setHeaderLoading] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SelectedComponent = COMPONENT_MAP[activeView];

  return (
    <div className={styles.dashboardLayouts}>
      <Header loading={headerLoading} />

      <div className={styles.menuButtonWrapper}>
        <Button isOpen={isMenuOpen} onToggle={toggleMenu} />
      </div>

      {isMenuOpen && <EmployeeMaster onSelectOption={setActiveView} />}

      <main className={styles.mainWorkspaceContent}>
        {SelectedComponent ? (
          <SelectedComponent onSelectOption={setActiveView} />
        ) : (
          <div className={styles.dashbordContent}>
            <Welcome />
            <ReportSummary />
            <PendingTask />
            <TodoList />
            <PurchaseRequest />
          </div>
        )}
      </main>
    </div>
  );
}

export default DashBoard;
