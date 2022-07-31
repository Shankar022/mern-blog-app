import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import {Layout} from "antd";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Layout>
            <Navbar/>
        </Layout>
    );
}

export default App;
