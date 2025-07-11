import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");

  function clickHandler(tab) {
    setCurrentTab(tab);
  }

  useEffect(
    function () {
      console.log(currentTab);
    },
    [currentTab]
  );

  return (
    <>
      <BrowserRouter>
        <Link
          onClick={() => {
            clickHandler("home");
          }}
          style={{
            color: currentTab === "home" ? "red" : "black",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            clickHandler("network");
          }}
          style={{
            color: currentTab === "network" ? "red" : "black",
          }}
          to="/network"
        >
          Network
        </Link>
        <Link
          onClick={() => {
            clickHandler("jobs");
          }}
          style={{
            color: currentTab === "jobs" ? "red" : "black",
          }}
          to="/jobs"
        >
          Jobs
        </Link>
        <Link
          onClick={() => {
            clickHandler("settings");
          }}
          style={{
            color: currentTab === "settings" ? "red" : "black",
          }}
          to="/settings"
        >
          Settings
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/network" element={<Network />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NotFound() {
  return <div>Page not found</div>;
}

function Home() {
  return <div>This is Home</div>;
}

function Jobs() {
  return <div>This is Jobs</div>;
}

function Network() {
  return <div>This is Network</div>;
}

function Settings() {
  const navigate = useNavigate();

  useEffect(function () {

    console.log("Hello");
    const clock = setInterval(redirectUser, 5000);
    return function () {
      clearInterval(clock);
      console.log("unmounted")
    };
  }, []);

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      This is Settings
      <button onClick={redirectUser}>Go to Home Page</button>
    </div>
  );
}
