/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
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

import "./dashboard.css";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import Button from "@mui/material/Button";
import {useState} from 'react';

function Dashboard() {
  const { sales, tasks, localDate } = reportsLineChartData;

  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const handleClick2 = () => {
    // 👇️ toggle
    setIsActive2((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const handleClick3 = () => {
    // 👇️ toggle
    setIsActive3((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Consommation électrique"
                  description="données en kWh"
                  date="3 - 9 octobre"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="cour des céréales"
                  description={
                    <>
                      (<strong>+3,00</strong>) Blé <strong>| </strong>(<strong>-1,00</strong>) Colza{" "}
                      <strong>| </strong>(<strong>-13,50</strong>) Maïs
                    </>
                  }
                  date={localDate}
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="weather-widget">
                <img alt="weather widget" src={require("../../assets/images/weather.png")} />
              </div>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <Button>
                <div>
                  <div
                    tabIndex={0}
                    role="button"
                    style={{
                      backgroundColor: isActive ? "green" : "red",
                      color: isActive ? "green" : "red",
                    }}
                    onClick={handleClick}
                  >
                    <img
                      src={require("../../assets/images/tracteur.png")}
                      width={325}
                      height={325}
                      alt="tractor"
                    />
                  </div>
                </div>
              </Button>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <Button>
                <div>
                  <div
                    tabIndex={0}
                    role="button"
                    style={{
                      backgroundColor: isActive2 ? "green" : "red",
                      color: isActive2 ? "green" : "red",
                    }}
                    onClick={handleClick2}
                  >
                    <img
                      src={require("../../assets/images/pulverisateur.png")}
                      width={325}
                      height={325}
                      alt="irrigation"
                    />
                  </div>
                </div>
              </Button>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <Button>
                <div>
                  <div
                    tabIndex={0}
                    role="button"
                    style={{
                      backgroundColor: isActive3 ? "green" : "red",
                      color: isActive3 ? "green" : "red",
                    }}
                    onClick={handleClick3}
                  >
                    <img
                      src={require("../../assets/images/idee.png")}
                      width={325}
                      height={325}
                      alt="lightbulb"
                    />
                  </div>
                </div>
              </Button>
            </MDBox>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}
export default Dashboard;
