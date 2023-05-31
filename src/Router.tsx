import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdditionalInfo from "./components/authentication/AdditionalInfo";
import AuthContainer from "./components/authentication/AuthContainer";
import Login from "./components/authentication/Login";
import PasswordReset, {
  CreateNewPassword,
} from "./components/authentication/PasswordReset";
import PersonalInfo from "./components/authentication/PersonalInfo";
import Registration from "./components/authentication/Registration";
import Verification from "./components/authentication/Verification";
import Home from "./components/home/Home";
import AboutNav from "./components/nav/AboutNav";
import Navbar from "./components/nav/Navbar";
import UserNav from "./components/nav/UserNav";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import CourseUpload from "./components/pages/CourseUpload";
import PageNotFound from "./components/pages/PageNotFound";
import ProtectedRoute from "./components/pages/ProtectedRoute";
import Payment from "./components/payment/Payment";
import Audit from "./components/user/Audit";
import Collection from "./components/user/Collection";
import Course from "./components/user/Course";
import Explore from "./components/user/Explore";
import Dashboard from "./components/user/Library";
import Settings from "./components/user/Settings";
import UserManagement from "./components/admin/UserManagement";
import CourseManagement from "./components/admin/CourseManagement";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Navbar />
            <AuthContainer>
              <Login />
            </AuthContainer>
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <UserNav>
              <Settings />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/passwordreset"
        element={
          <>
            <Navbar />
            <AuthContainer>
              <PasswordReset />
            </AuthContainer>
          </>
        }
      />
      <Route
        path="/createpassword"
        element={
          <ProtectedRoute>
            <Navbar />
            <AuthContainer>
              <CreateNewPassword />
            </AuthContainer>
          </ProtectedRoute>
        }
      />
      <Route
        path="/personalinfo"
        element={
          <>
            <Navbar />
            <AuthContainer>
              <PersonalInfo />
            </AuthContainer>
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Navbar />
            <AuthContainer>
              <Registration />
            </AuthContainer>
          </>
        }
      />
      <Route
        path="/verification"
        element={
          <ProtectedRoute>
            <Navbar />
            <AuthContainer>
              <Verification />
            </AuthContainer>
          </ProtectedRoute>
        }
      />
      <Route
        path="/additionalinfo"
        element={
          <ProtectedRoute>
            <Navbar />
            <AuthContainer>
              <AdditionalInfo />
            </AuthContainer>
          </ProtectedRoute>
        }
      />
      <Route
        path="/personalinfo"
        element={
          <ProtectedRoute>
            <Navbar />
            <AuthContainer>
              <PersonalInfo />
            </AuthContainer>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserNav>
              <Dashboard />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/course/id/:id"
        element={
          <ProtectedRoute>
          <UserNav>
            <Course />
          </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/library"
        element={
          <ProtectedRoute>
          <UserNav>
            <Collection />
          </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/audit"
        element={
          <ProtectedRoute>
            <UserNav>
              <Audit />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <UserNav>
              <Explore />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <UserNav>
              <AdminDashboard />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/courseupload"
        element={
          <ProtectedRoute>
            <UserNav>
              <CourseUpload />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <>
            <Navbar />
            <Blog />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <AboutNav />
            <About />
          </>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Navbar />
            <AuthContainer>
              <Payment />
            </AuthContainer>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/usermanagement"
        element={
          <ProtectedRoute>
            <UserNav>
              <UserManagement />
            </UserNav>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/coursemanagement"
        element={
          <>
            <ProtectedRoute>
              <UserNav>
                <CourseManagement />
              </UserNav>
            </ProtectedRoute>
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            {/* <Navbar /> */}
            <PageNotFound />
          </>
        }
      />
    </Routes>
  );
};
