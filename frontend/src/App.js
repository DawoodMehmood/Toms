import TermsAndConditions from "./pages/terms";
import { Routes, Route } from "react-router-dom";
import FAQS from "./pages/faqs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>

        <Route path="/faqs" element={<FAQS />}></Route>
      </Routes>
    </div>
  );
}

export default App;
