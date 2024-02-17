import { Suspense, lazy } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { FormsListPage } from "@/pages/FormListPage";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/libs/classNames/classNames";

const OwnProfilePage = lazy(() =>
  import("@/pages/OwnProfilePage").then((module) => ({
    default: module.OwnProfilePage,
  }))
);

const ResponsePage = lazy(() =>
  import("@/pages/ResponsePage").then((module) => ({
    default: module.ResponsePage,
  }))
);

const FormResponsesPage = lazy(() =>
  import("@/pages/FormResponsesPage").then((module) => ({
    default: module.FormResponsesPage,
  }))
);

const FormPage = lazy(() =>
  import("@/pages/FormPage").then((module) => ({
    default: module.FormPage,
  }))
);

const FormConstructorPage = lazy(() =>
  import("@/pages/FormConstructorPage").then((module) => ({
    default: module.FormConstructorPage,
  }))
);

const LoginPage = lazy(() =>
  import("@/pages/LoginPage").then((module) => ({
    default: module.LoginPage,
  }))
);

const SignupPage = lazy(() =>
  import("@/pages/SignupPage").then((module) => ({
    default: module.SignupPage,
  }))
);

const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  }))
);

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>TOGGLE</button>
        <nav>
          <NavLink
            style={{ marginRight: "10px" }}
            replace
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            replace
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            signup
          </NavLink>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FormsListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/me" element={<OwnProfilePage />} />

            {/* <Route path="/forms/*" element={<FormsRoutes />} /> */}

            <Route path="/forms">
              <Route path="edit" element={<FormConstructorPage />} />
              <Route path="new" element={<FormConstructorPage />} />
              <Route path=":formId" element={<FormPage />} />
              <Route path="responses">
                <Route index element={<FormResponsesPage />} />
                <Route path=":responseId" element={<ResponsePage />} />
              </Route>
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
