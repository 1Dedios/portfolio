import { useEffect, useState } from 'react';
import type {
  FormEvent,
  ChangeEvent,
  ChangeEventTextArea,
} from '@/types/types';
import Button from './Button';
import Image from 'next/image';
import logo from '/public/dedios_logo.png';

export default function Contact() {
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => console.log(res.body?.toString()))
      .catch((e) => console.log(e));
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [about, setAbout] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let getName = (event: ChangeEvent) => setName(event.currentTarget.value);
  let getEmail = (event: ChangeEvent) => setEmail(event.currentTarget.value);
  let getService = (event: ChangeEvent) =>
    setService(event.currentTarget.value);
  let getAbout = (event: ChangeEventTextArea) =>
    setAbout(event.currentTarget.value);

  const isFormValid = () => {
    interface FormErrors {
      nameError: string;
      emailError: string;
      serviceOrAboutError: string;
    }
    let formErrorObj = {} as FormErrors;
    const serviceArray = service.split(' ');
    const aboutArray = about.split(' ');
    const fields = [name, email, ...serviceArray, ...aboutArray];
    // TODO: fix regex
    //const nameRegEx = new RegExp(`^[a-zA-Z\s]{3,}$`);
    const nameRegEx = new RegExp(`^[A-Za-z]+(?:\s+[A-Za-z]+)?$`);
    const emailRegEx = new RegExp('@{1}', 'g');
    const regexForServiceAndAbout = new RegExp('^[a-zA-Z0-9s]{3,}$', 'i');
    const expletives = [
      'fuck',
      'shit',
      'motherfucker',
      'fucker',
      'ho',
      'bitch',
    ];

    fields.forEach((el) => {
      if (expletives.includes(el)) {
        return window.alert('Expletives are not allowed!');
      }
    });

    if (!name.match(nameRegEx)) {
      formErrorObj.nameError = 'A valid name is required';
    } else if (!email.match(emailRegEx)) {
      formErrorObj.emailError = 'A valid email is required.';
    } else if (
      !service.match(regexForServiceAndAbout) ||
      !about.match(regexForServiceAndAbout)
    ) {
      formErrorObj.serviceOrAboutError =
        'Please refrain from using anything other than text. Thank you.';
    }
    return formErrorObj;
  };

  // TODO: implement handleSubmit
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const validation = isFormValid();
    console.log(validation);
    const formErrors = Object.values(validation);
    // ideally we want formErrors to be empty
    console.log(formErrors);
    //setIsLoading(true);

    if (formErrors.length === 0) {
      interface ContactFormData {
        name: string;
        email: string;
        service: string;
        about: string;
      }
      const formData = {} as ContactFormData;
      formData.name = name;
      formData.email = email;
      formData.service = service;
      formData.about = about;
      const jsonFormData = JSON.stringify(formData);
      console.log(formData);
      console.log(jsonFormData);
      await fetch('/api/contact', { method: 'POST', body: jsonFormData });
      // have modal popup that the form was successfully sent
    } else {
      // alert user of errors in the form with a window object
    }

    // try {

    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="p-40 bg-creme">
      <h1 className="text-center text-6xl text-navy font-bold font-poppins pb-10">
        COLLABORATION
      </h1>
      <div className="flex justify-center pt-5">
        <Image src={logo} alt="dedios logo" width="128" height="128" />
      </div>
      <p className="pt-5 text-xl text-center text-navy font-semibold">
        Have a project?
      </p>
      <p className="text-center textarea-md text-navy font-semibold">
        I&apos;m open to projects and Technical Writing opportunities.
      </p>
      <form
        onSubmit={handleSubmit}
        className="text-navy leading-10"
        method="post"
      >
        <div className="flex flex-col p-10 font-semibold">
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={getName}
            type="text"
            id="name"
            name="name"
            required
            className="text-creme bg-navy"
          />
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            onChange={getEmail}
            type="email"
            id="email"
            name="email"
            required
            className="text-creme bg-navy"
          />
          <label htmlFor="service">What service(s) are you looking for?</label>
          <input
            value={service}
            onChange={getService}
            type="text"
            id="service"
            name="service"
            required
            className="text-creme bg-navy"
          />
          <label htmlFor="about">Tell Me More...</label>
          <textarea
            value={about}
            onChange={getAbout}
            id="about"
            name="about"
            required
            className="text-creme bg-navy"
            rows={4}
            maxLength={500}
          ></textarea>
          {/*enable and disable submit button depending on loading state of submit handler*/}
          {isLoading ? (
            <Button
              className="mt-6 hover:uppercase hover:bg-gold rounded-lg"
              text="Submitting..."
              disabled={isLoading}
            />
          ) : (
            <Button
              className="mt-6 hover:uppercase hover:bg-gold rounded-lg"
              text="Submit"
              disabled={isLoading}
            />
          )}
        </div>
      </form>
    </div>
  );
}
