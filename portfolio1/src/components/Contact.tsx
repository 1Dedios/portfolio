import { useState } from 'react';
import Button from './Button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [about, setAbout] = useState('');

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Collaboration</h1>
        <p>Have a project?</p>
        <p>Big or small, lets connect.</p>
        <label htmlFor="fullname">
          <h1>Name:</h1>
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          id="fullname"
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
          id="email"
        />
        <label htmlFor="service">What service are you looking for?</label>
        <input
          value={service}
          onChange={(e) => setService(e.currentTarget.value)}
          type="text"
          id="service"
        />
        <label htmlFor="about">Tell Me More:</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.currentTarget.value)}
          id="about"
        ></textarea>
        <Button className="" text="Submit" />
      </form>
    </div>
  );
}
