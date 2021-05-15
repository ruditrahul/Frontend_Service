import { Formik, Form } from "formik";
import log from "../icons/login.svg";
import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required"),
  });

  const handleLogin = (values, { resetForm }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("API_END_POINT", requestOptions)
      .then((response) => response.json())
      .then(console.log);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={handleLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4 mt-5 p-4 border border-secondary shadow rounded sign-up-card">
              <div className="container-fluid p-2 mt-3 text-center anton-font">
                <h3>
                  <img src={log} alt="sign up" className="img-user-register" />
                  Log In
                </h3>
              </div>
              <Form onSubmit={handleSubmit} className="mt-3">
                <div className="form-group mb-3">
                  <label className="form-label text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email && "is-invalid"
                    }`}
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label className="form-label text-white" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password && touched.password && "is-invalid"
                    }`}
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <button
                  disabled={!values.email || !values.password}
                  className="btn btn-submit mt-4 w-100"
                >
                  Login
                </button>
              </Form>
              <div className="container-fluid mt-5 mb-3 text-white">
                Not Registered?{" "}
                <a className="fancy-colored-text" href="\register">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
