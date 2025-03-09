import { FormErrors } from "@/types/interface/contact-form";
// STATUS: currently isFormValid is only checking against regex patterns and curse words
export const isFormValid = (
  nameField: string,
  emailField: string,
  serviceField: string,
  aboutField: string
) => {
  let formErrorObj = {} as FormErrors;
  const serviceArray = serviceField.split(" ");
  const aboutArray = aboutField.split(" ");
  const fields = [nameField, emailField, ...serviceArray, ...aboutArray];
  const expletives = ["fuck", "shit", "motherfucker", "fucker", "ho", "bitch"];
  // STATUS: nameRegEx not allowing first & last names - ONLY first names
  const nameRegEx = new RegExp(`^[A-Za-z]+(?:\s+[A-Za-z]+)?$`);
  const emailRegEx = new RegExp("@{1}", "g");
  const regexForServiceAndAbout = new RegExp("^[a-zA-Z0-9\\s]{3,}$", "i");

  fields.forEach((el) => {
    if (expletives.includes(el)) {
      return window.alert("Expletives are not allowed!");
    }
  });

  if (!nameRegEx.test(nameField)) {
    formErrorObj.nameError = "First & Last name required.";
  }
  if (!emailRegEx.test(emailField)) {
    formErrorObj.emailError = "A valid email is required.";
  }
  if (!regexForServiceAndAbout.test(serviceField)) {
    formErrorObj.serviceError = "Content must be longer than 3 characters.";
  }
  if (!regexForServiceAndAbout.test(aboutField)) {
    formErrorObj.aboutError = "Content must be longer than 3 characters.";
  }
  return formErrorObj;
};
