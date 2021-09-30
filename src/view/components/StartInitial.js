import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
import { useMain } from "../../context/ContextProvider";

const StartInitial = () => {
  const { initStart, setInitStart } = useMain();

  const changeHandler = (event) => {
    setInitStart({ ...initStart, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setInitStart({ ...initStart, ready: true });
  };

  return (
    <Container>
      <Paper sx={{ padding: "4rem", backgroundColor: "#dedeff" }}>
        <Typography align="center">Start play memory</Typography>
        <form onSubmit={submitHandler}>
          <TextField
            name="login"
            onChange={changeHandler}
            value={initStart.login}
            variant="outlined"
            required
            fullWidth
            margin="normal"
            type="text"
            label="Login"
          />
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select size field</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="square"
                value={initStart.square}
                onChange={changeHandler}
              >
                <FormControlLabel
                  value="4"
                  control={<Radio />}
                  label="field 4x4"
                />
                <FormControlLabel
                  value="6"
                  control={<Radio />}
                  label="field 6x6"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Grid container justifyContent="center">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default StartInitial;
