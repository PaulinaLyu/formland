import { FormConstructorPage } from "@/pages/FormConstructorPage";
import { FormsListPage } from "@/pages/FormListPage";
import { FormPage } from "@/pages/FormPage";
import { FormResponsesPage } from "@/pages/FormResponsesPage";
import { LoginPage } from "@/pages/LoginPage";
import { OwnProfilePage } from "@/pages/OwnProfilePage";
import { ResponsePage } from "@/pages/ResponsePage";
import { SignupPage } from "@/pages/SignupPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormsListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/me" element={<OwnProfilePage />} />
      <Route path="/forms/edit" element={<FormConstructorPage />} />
      <Route path="/forms/new" element={<FormConstructorPage />} />
      <Route path="/forms/:formId" element={<FormPage />} />
      <Route path="/forms/:formId/responses" element={<FormResponsesPage />} />
      <Route path="/forms/:formId/responses/:responseId" element={<ResponsePage />} />
      {/* <Route path="profile" element={<ProfileLayout />}>
        <Route path="me" element={<OwnUserProfile />} />
        <Route path=":id" element={<UserProfile />} />
      </Route> */}
    </Routes>
  );
}

export default App;
