import React, { useState } from "react";
import Lottie from "lottie-react";
import spinner_dots from "../../../../public/imgs/loader/spinner_dots.json";
import "./ContactForm.css";

const ContactForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const data = { nome, email, telefone };

    fecth("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setNome("");
        setEmail("");
        setTelefone("");
        setLoader("");
        alert("Mensagem enviada com suscesso");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="py-11 px-8 md:px-20">
        <div className="w-full  flex flex-col items-center text-center">
          <h2 className="text-5xl text-white">
            Fique por dentro das nossas novidades!
          </h2>
          <p className="max-w-2xl my-5 text-white subtitle">
            Garanta a oportunidade de vivenciar experiências únicas em eventos e
            retiros na deslumbrante Chapada dos Veadeiros.
          </p>
        </div>

        <form
          className="contactForm flex flex-col md:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            className="h-11 my-3 mx-2 p-2 md:w-1/3 rounded"
            type="text"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          ></input>
          <input
            className="h-11 my-3 mx-2 p-2 md:w-1/3 rounded"
            type="text"
            id="telefone"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          ></input>
          <input
            className="h-11 my-3 mx-2 p-2 md:w-1/3 rounded"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <button
            className="my-3 mx-2 bg-[#06724C] hover:bg-[#056141] text-white sm:py-3 md:py-2 md:px-6 rounded submitform max-h-11"
            type="submit"
          >
            {loader ? (
              <Lottie
                className="mt-8"
                animationData={spinner_dots}
                loop={true}
              />
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;