import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export async function sendEmail(
  formElement: RefObject<HTMLFormElement>
): Promise<Boolean> {
  try {
    await emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formElement.current || "",
      process.env.REACT_APP_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
