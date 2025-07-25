import { BrowserRouter as Router } from "react-router-dom";
import "@/App.css";
import AppRoutes from "@/routes";

function App() {
  return (
    <>
      {/* Create Routes */}
      <Router>
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="max-w-[400px] h-[850px] w-full border-2 border-gray-300 rounded-xl overflow-hidden shadow-lg flex flex-col my-8">
            {/* Router Components*/}
            <AppRoutes />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
