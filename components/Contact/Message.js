import * as Yup from "yup";
import { Formik, Form } from "formik";
import { TextField, TextArea } from "../common/InputField";

function Message() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="bg-slate-50">
      <div className="container py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="space-y-4 lg:space-y-8 text-center lg:text-right">
            <h1 className="text-[28px] lg:text-[42px] mt-6 font-oswald font-light">
              Write a message
            </h1>
            <p className="text-custom-gray">
              If you got any questions, please do not hesitate to send us a
              message. We reply within 24 hours !
            </p>
          </div>

          <div className="lg:min-w-[800px]">
            <Formik
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <TextField
                    label="Your Name (required)"
                    name="name"
                    type="text"
                  />
                  <TextField
                    label="Your Email (required)"
                    name="email"
                    type="email"
                  />
                  <TextField label="Subject" name="subject" type="text" />
                  <TextArea label="Your Message" name="message" type="text" />

                  <button
                    type="submit"
                    className="mt-3 px-5 py-3 border-2 border-custom-green rounded text-custom-green text-sm hover:bg-gray-100 transition duration-300"
                  >
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
