import { Box } from "@chakra-ui/react";
import React from "react";
const NavbarTopOffer = () => {
  return (
    <Box
      style={{
        borderTop:'1px solid black',
        marginTop:'40px',
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <Box>
        <h2 style={{ fontWeight: "bold" }}>Today's Offers</h2>
        <h6>Top for Saving Made Simple</h6>
      </Box>
    </Box>
  );
};

export default NavbarTopOffer;
