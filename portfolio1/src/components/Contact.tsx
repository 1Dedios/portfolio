import { useState } from 'react';
import { FormEvent, ChangeEvent, ChangeEventTextArea } from '@/types/types';
import Button from './Button';
import Image from 'next/image';
import logo from '/public/dedios_logo.png';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [about, setAbout] = useState('');

  let getName = (event: ChangeEvent) => setName(event.currentTarget.value);
  let getEmail = (event: ChangeEvent) => setEmail(event.currentTarget.value);
  let getService = (event: ChangeEvent) =>
    setService(event.currentTarget.value);
  let getAbout = (event: ChangeEventTextArea) =>
    setAbout(event.currentTarget.value);

  const isFormValid = () => {
    const formErrors = { name, email, service, about };
    const serviceArray = service.split(' ');
    const aboutArray = about.split(' ');
    const fields = [name, email, ...serviceArray, ...aboutArray];
    const nameRegEx = new RegExp(`^[a-zA-Z\s]{3,}$`, 'i');
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
      formErrors.name = 'A valid name is required';
    }

    if (!email.match(emailRegEx)) {
      formErrors.email = 'A valid email is required.';
    }

    if (
      !service.match(regexForServiceAndAbout) ||
      !about.match(regexForServiceAndAbout)
    ) {
      if (!service.match(regexForServiceAndAbout)) {
        formErrors.service =
          'Please refrain from using anything other than text. Thank you.';
      } else {
        formErrors.about =
          'Please refrain from using anything other than text. Thank you.';
      }
    }

    return formErrors;
  };

  // TODO: implement handleSubmit
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const validation = isFormValid();
    const formErrors = Object.values(validation);

    if (!formErrors) {
      // getName, getEmail, getService, getAbout values send to database
    } else {
      // alert user of errors in the form
    }

    // clear values from form
    event.currentTarget.values = '';
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
          <Button
            className="mt-6 hover:uppercase hover:bg-gold rounded-lg"
            text="Submit"
          />
        </div>
      </form>
    </div>
  );
}
