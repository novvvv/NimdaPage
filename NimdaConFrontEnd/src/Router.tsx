import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "@/App";
import LoginPage from "@/domains/User/Login/Page";
import SignUp from "@/domains/User/Register";
import ProblemSubmitPage from "@/domains/Contest/Problem/ProblemSubmit"; // [DEBUG] 테스트용 코드
import JudgingStatusPage from "@/domains/Contest/Problem/JudgingStatus";
import ProblemsPage from "@/domains/Contest/Problem/Problems";
import ProblemCreatePage from "@/domains/Contest/Problem/ProblemCreate";
import AdminDashboard from "@/domains/Admin/AdminDashboard.jsx";
import ProblemDetail from "@/domains/Contest/Problem/ProblemDetail/ProblemDetail.jsx";
import Home from "@/domains/Home";

import ContestHome from "@/domains/Contest/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/problem-submit" element={<ProblemSubmitPage />} />
        <Route path="/problem-create" element={<ProblemCreatePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/problem/:id" element={<ProblemDetail />} />
        <Route path="/judging-status" element={<JudgingStatusPage />} />

        <Route path="/contest-home" element={<ContestHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
