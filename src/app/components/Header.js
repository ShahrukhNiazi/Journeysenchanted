"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Link,
} from "@mui/material";

import logo from "../../app/assets/images/logo.png";

const Header = () => {
  return (
    <>
      <Box className="header">
        <Container maxWidth="xl" rowSpacing={0} pb={0}>
          <Grid container maxWidth="xl" pb={0} className="main-menu">
            <Grid item md={2} lg={2} sm={12} xs={3}>
              <Link className="logo">
                <img src={logo.src} alt="logo" />
              </Link>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={9}>
              <List className="navigation">
                <ListItem>
                  <Link>Home </Link>
                </ListItem>
                <ListItem>
                  <Link>ABOUT US</Link>
                </ListItem>
                <ListItem>
                  <Link>OFFERINGS AND PROMOTIONS</Link>
                </ListItem>
                <ListItem>
                  <Link>APPLICATIONS FORM</Link>
                </ListItem>
                <ListItem>
                  <Link>CONTACT US</Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={2} lg={2} sm={12} xs={3}>
              <Box className="themeBtn">
               <Link>
                Book Now
               </Link>      
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;

// const styles = {
//   navigation: {
//     backgroundColor: "red",
//     border: "none",
//     boxShadow: "none",
//     textAlign: "center",
//     display: "flex",
//     alignItems: "center",
//     ul: {
//       padding: "0px",
//       width: "90%",
//       margin: "0 0 0 auto",
//       display: "flex",
//       alignItems: "center",
//     },
//     li: {
//       display: "inline",
//       textAlign: "center",
//       padding: "0px",
//     },
//     a: {
//       color: "#fff",
//       display: "inline",
//       textAlign: "center",
//       textDecoration: "none",
//       cursor: "pointer",
//       fontSize: 18,
//     },
//   },
//   headerlogo: {
//     textAlign: "center",
//   },
//   padd0: {
//     padding: 0,
//   },
//   Mainheader: {
//     position: "absolute",
//     width: "100%",
//   },
//   paddTop: {
//     paddingTop: 2,
//   },
//   carticon: {
//     display: "flex",
//     li: {
//       flex: "0 0 20%",
//       maxWidth: "20%",
//       marginLeft: "30px",
//     },
//     a: {
//       width: "40px",
//       height: "40px",
//       backgroundColor: "#fda10b",
//       display: "flex",
//       alignItems: "center",
//       textAlign: "center",
//       justifycontent: "center",
//       borderRadius: "100%",
//       color: "#fff",
//       justifyContent: "center",
//     },
//   },
//   cartsearch: {
//     display: "flex",
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//     marginTop: "50px",
//   },
//   mainheader: {
//     position: "absolute",
//     width: "100%",
//     left: 0,
//     right: 0,
//     zIndex: 999,
//     marginTop: "70px",
//   },
//   headerContainer: {
//     textAlign: "center",
//   },
// };
