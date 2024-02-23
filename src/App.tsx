import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoadingPage from "./pages/loading/LoadingPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import JobsPage from "./pages/jobs/JobsPage";

interface AppProps {}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <NavBar />
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
