import { FormErrors } from '@/types/interface/contact-form';

export const isFormValid = (
  nameField: string,
  emailField: string,
  serviceField: string,
  aboutField: string
) => {
  let formErrorObj = {} as FormErrors;
  const serviceArray = serviceField.split(' ');
  const aboutArray = aboutField.split(' ');
  const fields = [nameField, emailField, ...serviceArray, ...aboutArray];
  // TODO: fix regex
  //const nameRegEx = new RegExp(`^[a-zA-Z\s]{3,}$`);
  const nameRegEx = new RegExp(`^[A-Za-z]+(?:\s+[A-Za-z]+)?$`);
  const emailRegEx = new RegExp('@{1}', 'g');
  const regexForServiceAndAbout = new RegExp('^[a-zA-Z0-9s]{3,}$', 'i');
  const expletives = ['fuck', 'shit', 'motherfucker', 'fucker', 'ho', 'bitch'];

  fields.forEach((el) => {
    if (expletives.includes(el)) {
      return window.alert('Expletives are not allowed!');
    }
  });

  if (!nameField.match(nameRegEx)) {
    formErrorObj.nameError = 'A valid name is required';
  } else if (!emailField.match(emailRegEx)) {
    formErrorObj.emailError = 'A valid email is required.';
  } else if (
    !serviceField.match(regexForServiceAndAbout) ||
    !aboutField.match(regexForServiceAndAbout)
  ) {
    formErrorObj.serviceOrAboutError =
      'Please refrain from using anything other than text. Thank you.';
  }
  return formErrorObj;
};
