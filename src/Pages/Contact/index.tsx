import { useState, FormEvent, useRef, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "./../../services/emailjs";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import useAnimatedLetters from "./../../hooks/useAnimatedLetters";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loader from "../../components/Loader";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

interface IContact {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [contact, setContact] = useState<IContact>();
  const [isSending, setIsSending] = useState(false);

  const letterClass = useAnimatedLetters();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (event: FormEvent) => {
    event.preventDefault();

    setIsSending(!isSending);

    await toast.promise(
      sendEmail(formRef),
      {
        pending: {
          render() {
            return "Enviando email...";
          },
        },
        success: {
          render() {
            setIsSending(false);
            setContact({ name: "", email: "", subject: "", message: "" });
            return "Email enviado com sucesso!";
          },
        },
        error: {
          render() {
            setIsSending(false);
            return "Falha no envio de email.";
          },
        },
      },
      {
        position: "top-center",
        closeButton: true,
        pauseOnHover: false,
        theme: "dark",
        style: { textAlign: "center" },
      }
    );
  };

  const handleContact = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (target.name) {
      case "name":
        setContact({ name: target.value });
        break;
      case "email":
        setContact({ email: target.value });
        break;
      case "subject":
        setContact({ subject: target.value });
        break;
      case "message":
        setContact({ message: target.value });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {isSending && (
        <>
          <Loader />
        </>
      )}
      <ToastContainer />
      <motion.div
        animate={{ animation: "zoomInDown 1s linear both" }}
        exit={{ display: "none" }}
        className="contact"
      >
        <div className="contact__container">
          <div className="container__title">
            <h1>
              <AnimatedLetters
                className={letterClass}
                index={12}
                animatedText="Contato"
              />
            </h1>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <form
            ref={formRef}
            onSubmit={handleSendEmail}
            className="container__form"
          >
            <div className="form__input-group">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                required
                value={contact?.name}
                onChange={handleContact}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={contact?.email}
                onChange={handleContact}
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              required
              value={contact?.subject}
              onChange={handleContact}
            />
            <textarea
              name="message"
              placeholder="Escreva sua mensagem..."
              cols={30}
              rows={12}
              required
              value={contact?.message}
              onChange={handleContact}
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
        <figure>
          <img src="/assets/images/email.svg" alt="desenho de um homem" />
          <a
            href="https://storyset.com/people"
            target={"_blank"}
            rel="noreferrer"
          >
            People illustrations by Storyset
          </a>
        </figure>
      </motion.div>
    </>
  );
};

export default Contact;
