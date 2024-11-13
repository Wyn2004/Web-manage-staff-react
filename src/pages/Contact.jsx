import React from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { Formik } from "formik";
import * as yup from "yup";

const Contact = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    username: yup.string().required("Username is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup.string().required("Zip is required"),
    terms: yup
      .boolean()
      .oneOf([true], "You must agree before submitting.")
      .required("Terms must be accepted."),
  });

  return (
    <Box margin={5}>
      <Typography variant="h3" gutterBottom>
        Contact Form
      </Typography>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
        initialValues={{
          firstName: "",
          lastName: "",
          username: "",
          city: "",
          state: "",
          zip: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <TextField
                  label="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="State"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} lg={10}>
                <TextField
                  label="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  error={touched.zip && Boolean(errors.zip)}
                  helperText={touched.zip && errors.zip}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="terms"
                      checked={values.terms}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  label="Agree to terms and conditions"
                />
                {touched.terms && errors.terms && (
                  <Typography color="error">{errors.terms}</Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
