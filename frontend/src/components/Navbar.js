import React, { useState } from "react";
import { Nav } from "@fluentui/react/lib/Nav";

const navLinkGroups = [
    {
        links: [
            {
                key: "home",
                name: "Home",
                url: "/",
            },
            {
                key: "setting",
                name: "Setting",
                url: "setting",
            }
        ],
    },
];

const sidebarStyle = {
    width: "250px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100vh",
};

const Navbar = () => {
  const [selectedKey, setSelectedKey] = useState("home"); // State to manage the selected key

  const handleLinkClick = (ev, item) => {
      setSelectedKey(item?.key);
  };

    return (
        <nav style={sidebarStyle}>
            <Nav
                selectedKey={selectedKey}
                ariaLabel='Navbar'
                groups={navLinkGroups}
                onLinkClick={handleLinkClick}
            />
        </nav>
    );
};

export default Navbar;
