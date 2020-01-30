import React from "react";
import ChatList from "./chatList.jsx";
import Page from "./page.jsx";
import Header from "./header.jsx";

const Layout = () => (
    <div className="Layout">
        <Header/>
        <div className="Layout-wrap">
        <ChatList/>
        <Page/>
        </div>
    </div>
);
export default Layout;




