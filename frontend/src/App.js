import TermsAndConditions from "./pages/terms";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
