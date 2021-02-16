import React from "react";
import Navbar from "components/Navbar";
import { Container, Button, Grid, Typography, Box } from "@material-ui/core";
import {
  Home,
  Refresh,
  WbSunnyRounded as Sun,
  Brightness2Rounded as Moon,
} from "@material-ui/icons";
import { useRouter } from "next/router";

const Layout = ({
  children,
  setThemeName,
  currentTheme,
  homepage,
  contentHeader,
}) => {
  const router = useRouter();
  return (
    <>
      <Navbar
        setThemeName={setThemeName}
        currentTheme={currentTheme}
        subtitle={contentHeader}
      />
      <Container style={{ marginTop: "2.5em", marginBottom: "7.5em" }}>
        <main>
          <Box marginTop={7.5} marginBottom={2.5}>
            <Typography variant="h2" component="h1">
              <b>{contentHeader}</b> <small>summary</small>
            </Typography>
          </Box>
          <Grid container justify="space-between" alignItems="flex-end">
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                aria-label="home"
                onClick={() => router.push("/")}
                disabled={homepage}
                title="Go to homepage"
              >
                <Home />
              </Button>
              {homepage && (
                <Typography
                  variant="subtitle2"
                  component="span"
                  style={{ marginLeft: ".5em" }}
                >
                  Click on a <b>country</b>!
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    aria-label="refresh"
                    onClick={() => router.reload()}
                    fullWidth
                    title="Refresh data"
                  >
                    <Refresh />
                  </Button>
                </Grid>
                <Grid item>
                  <ThemeButton
                    currentTheme={currentTheme}
                    setThemeName={setThemeName}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {children}
        </main>
        <footer>
          <div>© 2021 John Paul Ong</div>
        </footer>
      </Container>
    </>
  );
};

const ThemeButton = ({ currentTheme, setThemeName }) =>
  currentTheme === "darkTheme" ? (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setThemeName("lightTheme")}
      size="small"
      aria-label="light mode"
      fullWidth
      title="Toggle light mode"
    >
      <Sun />
    </Button>
  ) : (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => setThemeName("darkTheme")}
      size="small"
      aria-label="dark mode"
      fullWidth
      title="Toggle dark mode"
    >
      <Moon />
    </Button>
  );

export default Layout;
