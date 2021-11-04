import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="layout-container">{children}</div>
    </div>
  );
};
export default MainLayout;
