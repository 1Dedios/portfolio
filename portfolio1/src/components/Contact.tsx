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

  // TODO: implement the functions - isFormValid, handleSubmit
  const isFormValid = () => {
    const formErrors = { name, email, service, about };

    // validate name for no expletives
    if (!email.match(/@{1}/)) {
      formErrors.email = 'A valid email is required.';
    }

    // validate only text on service, and about
    if (!service.match(/[a-z]/) && !about.match(/[a-z]/)) {
      formErrors.service =
        'Please refrain from using anything other than text. Thank you.';
    }

    return formErrors;
  };

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
      <form onSubmit={handleSubmit} className="text-navy leading-10">
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
          <label htmlFor="about">Tell Me More:</label>
          <textarea
            value={about}
            onChange={getAbout}
            id="about"
            typeof="text"
            name="about"
            required
            className="text-creme bg-navy"
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
