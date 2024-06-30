import { useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import logo from '/public/dedios_logo.png';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [about, setAbout] = useState('');

  // TODO: implement the functions - getIsFormValid, clearForm, handleSubmit
  const getIsFormValid = () => {};

  const clearForm = () => {
    // i am assuming we add conditionals here for getIsFormValid
    // it should only clear all of these if the form was validated and that form submitted.
    setName('');
    setEmail('');
    setService('');
    setAbout('');
  };

  const handleSubmit = () => {};

  return (
    <div className='p-40 bg-creme'>
      <h1 className='text-center text-6xl text-navy font-bold font-poppins'>COLLABORATION</h1>
      <div className='flex justify-center pt-5'>
        <Image src={logo } alt='dedios logo' width='128' height='128'/>

      </div>
      <form onSubmit={handleSubmit} className='text-navy leading-10'>
        <div className='flex flex-col p-10 font-semibold'>
          <p className='text-navy pt-5'>Have a project?</p>
          <p className='text-navy mb-4'>Big or small, lets connect.</p>
          <label htmlFor="fullname">
            <h1>Name:</h1>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            id="fullname" className='text-creme bg-navy'
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            id="email" className='text-creme bg-navy'
          />
          <label htmlFor="service">What service are you looking for?</label>
          <input
            value={service}
            onChange={(e) => setService(e.currentTarget.value)}
            type="text"
            id="service" className='text-creme bg-navy'
          />
          <label htmlFor="about">Tell Me More:</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.currentTarget.value)}
            id="about" className='text-creme bg-navy'
          ></textarea>
          <Button className="flex justify-center border-2 mt-6 hover:uppercase hover:bg-gold" text="Submit" />
        </div>
      </form>
    </div>
  );
}
