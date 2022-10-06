/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/log-in-bg.jpg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPassword] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleOnChangeEmail = (e) => {
    setEmail(e);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e);
  };

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    const payload = { email, pw };
    fetch(
      new Request("http://localhost:5000/api", {
        method: "post",
        body: payload,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
    )
      .then((res) => {
        if (res.status === (200 || 304)) {
          return res.json();
        }
        return "hello";
      })
      .catch((error) => error);
    navigate("/dashboard");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Se connecter
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth onChange={handleOnChangeEmail} />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                onChange={handleOnChangePassword}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Se souvenir de moi
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                onClick={() => {
                  handleOnSubmit();
                }}
              >
                se connecter
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Pas de compte ?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  S&apos;enregistrer
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
