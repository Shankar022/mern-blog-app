import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <nav>
                <Link to="/login">Login</Link> |{" "}
                <Link to="/signup">Signup</Link>
            </nav>
            <Outlet />
        </div>

    )
}

export default Home;