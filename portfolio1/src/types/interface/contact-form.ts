export interface FormFields {
  access_key: string;
  name: string;
  email: string;
  service: string;
  about: string;
}

export interface FormErrors {
  nameError: string;
  emailError: string;
  serviceOrAboutError: string;
}
