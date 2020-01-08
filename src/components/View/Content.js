import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CheckBox } from "material-ui-icons";

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing(1)
  },
  contentWrapper: {
    margin: "40px 16px"
  }
});

function Content(props) {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.addUser}
              >
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="left"></Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={0.5}>
            <Grid item xs={2} className={classes.paper} component="h4" variant="h5">
               Nombre (s):
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                autoComplete="nombre"
              />
            </Grid>
            <Grid item xs={2} className={classes.paper} component="h4" variant="h5">
               Apellido (s):
            </Grid>
            <Grid item xs={10}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="apellido"
                label="Apellido(s)"
                name="apellido"
                autoComplete="apellido"
              />
            </Grid>
            <Grid item xs={3} className={classes.paper} component="h4" variant ="h5">
              Edad:
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="edad"
                label="Edad"
                name="edad"
                autoComplete="edad"
              />
            </Grid>
            {/* <Grid item xs={3} className={classes.paper} component="h4" variant ="h5">
              Sexo:
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
              control={<CheckBox value="M" color="primary"/>}
              label="M"
              />
            </Grid> */}

          </Grid>
        </form>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
