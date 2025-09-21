import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
//import {} from '../State/Authentication/Action';



const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
};

export const RegisterForm = () => {
  const navigate = useNavigate();
   const dispatch=useDispatch()
  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    dispatch(registerUser({userData:values,navigate}))
    // you can call your API here
  };

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Register
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, values }) => (
          <Form>
            <Field
              as={TextField}
              name="fullName"
              label="Full name"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.fullName}
              onChange={handleChange}
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.email}
              onChange={handleChange}
            />

            <Field
              as={TextField}
              type="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.password}
              onChange={handleChange}
            />

           
              <Field
               fullWidth
               margin="normal"
                as={Select}
                labelId="role-simple-select-label"
                id="demo-simple-selcet"
                name="role"
                //value={values.role}
                //onChange={handleChange}
              >
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
              </Field>
           
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, padding: "1rem" }}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>

      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Already have an account?
        <Button size="small" onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  );
};