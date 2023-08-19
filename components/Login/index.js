// import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../../components/common/InputField";
// import Layout from "../../components/Layout";

function Login({ client }) {
  const initialvalues = {
    email: "",
    password: "",
  };

  const validate = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const { email, password } = values;

  //   const res = await fetch(`${API_URL}/login/${client}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   const data = await res.json();

  //   if (data.text === "success") {
  //     // toast.success("Success!");
  //     router.push("/dashboard");
  //     localStorage.setItem("token-webschool", data.token);
  //   } else if (data.text === "not found") {
  //     toast.error("Email not found");
  //   } else if (data.text === "failure") {
  //     toast.error("Wrong Password");
  //   } else {
  //     toast.error("Something went wrong!");
  //     console.log(res);
  //   }
  // };

  return (
    <div className="container py-20">
      <div className="lg:flex justify-center items-center">
        <div className="bg-custom-gray6 px-10 py-14 shadow-lg">
          <h1 className="text-2xl font-oswald text-center">
            Log in as <span className="capitalize">{client}</span>
          </h1>

          <div className="mt-8">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  {/* <ToastContainer /> */}
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="lg:min-w-[400px]">
                      <TextField label="Email *" name="email" type="email" />
                      <TextField
                        label="Password *"
                        name="password"
                        type="password"
                        autoComplete="on"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-2 px-5 py-2 border-2 border-custom-green rounded text-custom-green text-sm hover:bg-gray-200 transition duration-300"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
