import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';

export default function index() {
  return (
    <>
      <div id="content">
        <Sidebar />

        <div id="home" class="col-10">
          <Topbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}
