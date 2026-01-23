import { useState } from "react";
import { FormFields } from "@/types/interface/contact-form";
import type { FormEvent, ChangeEvent, ChangeEventTextArea } from "@/types/types";
import { isFormValid } from "@/util/isFormValid";
import { escapeHTML } from "@/util/escapeHTML";
import Modal from "./Modal";
import Button from "./Button";
import Image from "next/image";
import { useTheme } from "./Theme";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [about, setAbout] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, assets } = useTheme();

  const [nameErrorFocus, setNameErrorFocus] = useState(false);
  const [emailErrorFocus, setEmailErrorFocus] = useState(false);
  const [serviceErrorFocus, setServiceErrorFocus] = useState(false);
  const [aboutErrorFocus, setAboutErrorFocus] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [serviceErrorMessage, setServiceErrorMessage] = useState("");
  const [aboutErrorMessage, setAboutErrorMessage] = useState("");

  let getName = (event: ChangeEvent) => setName(event.currentTarget.value);
  let getEmail = (event: ChangeEvent) => setEmail(event.currentTarget.value);
  let getService = (event: ChangeEvent) => setService(event.currentTarget.value);
  let getAbout = (event: ChangeEventTextArea) => setAbout(event.currentTarget.value);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (nameErrorFocus || emailErrorFocus || serviceErrorFocus || aboutErrorFocus) {
      if (nameErrorFocus) setNameErrorMessage("");
      if (emailErrorFocus) setEmailErrorMessage("");
      if (serviceErrorFocus) setServiceErrorMessage("");
      if (aboutErrorFocus) setAboutErrorMessage("");
    }

    const formData = {} as FormFields;
    const preventXSS = escapeHTML([name, email, service, about]);
    const validation = isFormValid(
      preventXSS[0],
      preventXSS[1],
      preventXSS[2],
      preventXSS[3]
    );
    const formErrors = Object.values(validation);

    try {
      if (formErrors.length === 0) {
        formData.access_key = "d6d98634-99fa-47cf-8035-b05bd54b1ec7";
        formData.name = preventXSS[0];
        formData.email = preventXSS[1];
        formData.service = preventXSS[2];
        formData.about = preventXSS[3];

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });
        setName("");
        setEmail("");
        setService("");
        setAbout("");
        setIsLoading(false);
        // TODO: style modal popup that the form was successfully sent
        setIsModalOpen(true);
      }

      throw new Error();
    } catch (error) {
      setIsLoading(false);

      for (const [key, value] of Object.entries(validation)) {
        if (key === "nameError") {
          setNameErrorFocus(true);
          setNameErrorMessage(value);
        }
        if (key === "emailError") {
          setEmailErrorFocus(true);
          setEmailErrorMessage(value);
        }
        if (key === "serviceError") {
          setServiceErrorFocus(true);
          setServiceErrorMessage(value);
        }
        if (key === "aboutError") {
          setAboutErrorFocus(true);
          setAboutErrorMessage(value);
        }
      }
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={theme === "dev" ? "hacker" : "dev"}>
      <div className={assets.contactPageCSS}>
        <h1 className="text-center text-6xl font-bold font-poppins pb-10">
          COLLABORATION
        </h1>
        <hr />
        <div className="flex justify-center pt-5">
          <Image src={assets.contactPageLogo} alt="" width="128" height="128" />
        </div>
        <p className="pt-5 text-xl text-center font-semibold">Have a project?</p>
        <p className="text-center textarea-md font-semibold">
          I&apos;m open to projects and Technical Writing opportunities.
        </p>
        <form
          onSubmit={handleSubmit}
          className="leading-10"
          {...(isModalOpen ? { inert: "true" } : {})}
        >
          <div className={assets.contactFormCSS}>
            <label htmlFor="name">
              Name:<span className="text-rose-600">*</span>
            </label>
            <input
              value={name}
              onChange={getName}
              type="text"
              id="name"
              name="name"
              required
            />
            {nameErrorFocus && <p className="text-rose-600 italic">{nameErrorMessage}</p>}
            <label htmlFor="email">
              Email:<span className="text-rose-600">*</span>
            </label>
            <input
              value={email}
              onChange={getEmail}
              type="email"
              id="email"
              name="email"
              required
            />
            {emailErrorFocus && (
              <p className="text-rose-600 italic">{emailErrorMessage}</p>
            )}
            <label htmlFor="service">
              What service(s) are you looking for?<span className="text-rose-600">*</span>
            </label>
            <input
              value={service}
              onChange={getService}
              type="text"
              id="service"
              name="service"
              required
            />
            {serviceErrorFocus && (
              <p className="text-rose-600 italic">{serviceErrorMessage}</p>
            )}
            <label htmlFor="about">
              Tell Me More...<span className="text-rose-600">*</span>
            </label>
            <textarea
              value={about}
              onChange={getAbout}
              id="about"
              name="about"
              required
              rows={4}
              maxLength={500}
            ></textarea>
            {aboutErrorFocus && (
              <p className="text-rose-600 italic">{aboutErrorMessage}</p>
            )}
            {isLoading ? (
              <Button
                className={assets.contactFormButtonCSS}
                text="Submitting..."
                disabled={isLoading}
              />
            ) : (
              <Button
                className={assets.contactFormButtonCSS}
                text="Submit"
                disabled={isLoading}
              />
            )}
          </div>
        </form>
        {isModalOpen && <Modal closeModal={closeModal}></Modal>}
      </div>
    </div>
  );
}
