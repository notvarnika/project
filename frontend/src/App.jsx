import Login from "./login/Login";
import DashBoard from "./dashboard/DashBoard";
import ForgotPass from "./forgot/ForgotPass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateManageEmp from "./createManageEmp/CreateManageEmp";
import NewEmp from "./newEmp/NewEmp";
import PersonalInfo from "./personalInfo/PersonalInfo";
import OtherDetails from "./otherDetails/OtherDetails";
import OtherRoles from "./otherRoles/OtherRoles";
import OtherDetails2 from "./otherDetails2/OtherDetails2";
import BankDetails from "./bankDetails/BankDetails";
import PF_Details from "./pf_details/PF_Details";
import SalaryStructure from "./salaryStructure/SalaryStructure";
import EarningAndDeductionHead from "./earnningAndDeduction/EarningAndDeduction";
import ProfilePicture from "./profilePicture/ProfilePicture";
import Button from "./button/Button";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              }
            />
            <Route
              path="/ForgotPass"
              element={
                <PrivateRoute>
                  <ForgotPass />
                </PrivateRoute>
              }
            />
            <Route
              path="/CreateManageEmp"
              element={
                <PrivateRoute>
                  <CreateManageEmp />
                </PrivateRoute>
              }
            />
            <Route
              path="/NewEmp"
              element={
                <PrivateRoute>
                  <NewEmp />
                </PrivateRoute>
              }
            />
            <Route
              path="/button"
              element={
                <PrivateRoute>
                  <Button />
                </PrivateRoute>
              }
            />
            <Route
              path="/personalInfo"
              element={
                <PrivateRoute>
                  <PersonalInfo />
                </PrivateRoute>
              }
            />
            <Route
              path="/otherDetails"
              element={
                <PrivateRoute>
                  <OtherDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/otherRoles"
              element={
                <PrivateRoute>
                  <OtherRoles />
                </PrivateRoute>
              }
            />
            <Route
              path="/otherDetails2"
              element={
                <PrivateRoute>
                  <OtherDetails2 />
                </PrivateRoute>
              }
            />
            <Route
              path="/bankDetails"
              element={
                <PrivateRoute>
                  <BankDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/pfDetails"
              element={
                <PrivateRoute>
                  <PF_Details />
                </PrivateRoute>
              }
            />
            <Route
              path="/salaryStructure"
              element={
                <PrivateRoute>
                  <SalaryStructure />
                </PrivateRoute>
              }
            />
            <Route
              path="/earningAndDeduction"
              element={
                <PrivateRoute>
                  <EarningAndDeductionHead />
                </PrivateRoute>
              }
            />
            <Route
              path="/profilePicture"
              element={
                <PrivateRoute>
                  <ProfilePicture />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
