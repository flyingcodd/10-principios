import {
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import React from "react";
const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box my={5}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ minWidth: 500 }}>
          <Box sx={{ width: "500", padding: "20px" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "col", pt: 2 }}>
                  <CardContent my={4} sx={{ width: "100%" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      Formulario de Checkout
                    </Typography>
                    <Grid item xs={12} sm={12} padding={2}>
                      <TextField
                        variant="standard"
                        label="First Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} padding={2}>
                      <TextField
                        variant="standard"
                        label="Last Name"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} padding={2}>
                      <TextField variant="standard" label="Email" fullWidth />
                    </Grid>
                  </CardContent>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Card>
      </Grid>
    </Box>
  );
  /*return (
    <div>
      <h1>Checkout</h1>
      <Box my={5}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          
        >
          <Card sx={{ minWidth: 500 }} >
            <CardContent my={4} >
              <Typography gutterBottom variant="h5" component="div">
                Formulario de Checkout
              </Typography>
              <Grid item xs={12} sm={12} padding={2}>
                <TextField variant="standard" label="First Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}  padding={2}>
                <TextField variant="standard" label="Last Name" fullWidth />
              </Grid>
              <Grid item xs={12} sm={12}  padding={2}>
                <TextField variant="standard" label="Email" fullWidth />
              </Grid>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button variant="contained">Siguiente</Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </div>
  );*/
}

export default Checkout;
