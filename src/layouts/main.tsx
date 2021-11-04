import React from "react";
import "./main.css";
import Header from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="layout-container">{children}</div>
    </>
  );
};
export default MainLayout;
