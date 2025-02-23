import { FormErrors } from "@/types/interface/contact-form";
<<<<<<< HEAD
=======
// TODO: implement isFormValid

// STATUS: currently isFormValid is only checking against regex patterns and curse words
>>>>>>> 7b113c0 (Security: implementing against XSS on Contact component)

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
  // STATUS: nameRegEx not passing first & last names
  const nameRegEx = new RegExp(`^[A-Za-z]+(?:\s+[A-Za-z]+)?$`);
  const emailRegEx = new RegExp("@{1}", "g");
<<<<<<< HEAD
  const regexForServiceAndAbout = new RegExp("^[a-zA-Z0-9\\s]{3,}$", "i");
=======
  const regexForServiceAndAbout = new RegExp("^[a-zA-Z0-9s]{3,}$", "i");
  const expletives = ["fuck", "shit", "motherfucker", "fucker", "ho", "bitch"];
  // TODO: Add escapeHTML func below
  // call escapeHTML(fields) - make fields var a let to rewrite with the escapeHTML func
>>>>>>> 7b113c0 (Security: implementing against XSS on Contact component)

  fields.forEach((el) => {
    if (expletives.includes(el)) {
      return window.alert("Expletives are not allowed!");
    }
  });

<<<<<<< HEAD
  if (!nameRegEx.test(nameField)) {
    formErrorObj.nameError = "A valid name is required";
  }
  if (!emailRegEx.test(emailField)) {
    formErrorObj.emailError = "A valid email is required.";
  }
  if (!regexForServiceAndAbout.test(serviceField)) {
    formErrorObj.serviceError =
      "Please refrain from using anything other than text. Thank you.";
  }
  if (!regexForServiceAndAbout.test(aboutField)) {
    formErrorObj.aboutError =
=======
  // TODO: can place entire control logic below in the forEach method
  if (!nameField.match(nameRegEx)) {
    formErrorObj.nameError = "A valid name is required";
  } else if (!emailField.match(emailRegEx)) {
    formErrorObj.emailError = "A valid email is required.";
  } else if (
    !serviceField.match(regexForServiceAndAbout) ||
    !aboutField.match(regexForServiceAndAbout)
  ) {
    formErrorObj.serviceOrAboutError =
>>>>>>> 7b113c0 (Security: implementing against XSS on Contact component)
      "Please refrain from using anything other than text. Thank you.";
  }
  return formErrorObj;
};
