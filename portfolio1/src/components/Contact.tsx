import { useState } from 'react';
import { FormFields } from '@/types/interface/contact-form';
import type {
  FormEvent,
  ChangeEvent,
  ChangeEventTextArea,
} from '@/types/types';
import { isFormValid } from '@/util/valid-form';
import Button from './Button';
import Image from 'next/image';
import logo from '/public/dedios_logo.png';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [about, setAbout] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // TODO: fix prettier - everything below should be single line
  let getName = (event: ChangeEvent) => setName(event.currentTarget.value);
  let getEmail = (event: ChangeEvent) => setEmail(event.currentTarget.value);
  let getService = (event: ChangeEvent) =>
    setService(event.currentTarget.value);
  let getAbout = (event: ChangeEventTextArea) =>
    setAbout(event.currentTarget.value);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const validation = isFormValid(name, email, service, about);
    console.log(validation);
    const formErrors = Object.values(validation);
    const formData = {} as FormFields;
    console.log(formErrors);
    try {
      if (formErrors.length === 0) {
        formData.access_key = 'd6d98634-99fa-47cf-8035-b05bd54b1ec7';
        formData.name = name;
        formData.email = email;
        formData.service = service;
        formData.about = about;
        console.log(formData);

        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });
        // have modal popup that the form was successfully sent
      }
      // TODO: handle if there are formErrors
    } catch (error) {
      console.log(error);
    }
    // TODO: maybe a finally that clears values from form and set loading state to false to return submit button to normal state
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
