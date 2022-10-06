/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

// Images
import fence from "assets/images/logos/fence.png";
import irrigation from "assets/images/logos/irrigation.png";
import streetLight from "assets/images/logos/street-light.png";
import tractor from "assets/images/logos/tractor.png";
import windmill from "assets/images/logos/wind-power.png";
import solar from "assets/images/logos/solar-panel.png";

export default function data() {
  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox component="img" src={image} alt="solar energy" width="1.5rem" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "type d'équipement", accessor: "companies", width: "45%", align: "left" },
      { Header: "nombre total", accessor: "number", align: "center" },
      { Header: "statut", accessor: "status", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={tractor} name="Tracteurs" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            10
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={irrigation} name="Arrosage" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            153
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={90} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={streetLight} name="Eclairage" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            30
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={80} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={fence} name="Portails" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            14
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={90} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={windmill} name="Éoliennes" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={50} color="warning" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={solar} name="Panneaux solaires" />,
        number: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        status: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="error" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
