import * as Yup from "yup";

const capitalizeMsg = (msg) => {
  if (typeof msg === "string") {
    return msg.charAt(0).toUpperCase() + msg.slice(1);
  }
  return msg;
};

const noSpaceValidation = Yup.string().test(
  "no-leading-trailing-space",
  capitalizeMsg("starting and ending spaces are not allowed"),
  (value) => value === value?.trim()
);

export const contactValidation = Yup.object({
  name: noSpaceValidation.required("Name field is required"),

  email: noSpaceValidation
    .email("Invalid email")
    .required("Email field is required"),

  subject: noSpaceValidation.required("Subject field is required"),

  message: noSpaceValidation.required("Message field is required"),
});