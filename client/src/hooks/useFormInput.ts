import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import readFileAsDataURL from "../utils/readFileAsDataURL";
import { json } from "stream/consumers";

const useFormInput = (displayName: string) => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    eventName: "",
    eventDateFrom: "",
    eventDateTo: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    eventLocation: "",
    eventDescription: "",
    eventThemes: [""],
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    let { name, value } = e.target;
    if (name === "eventThemes" && index !== undefined) {
      let updatedThemes = formInput.eventThemes;
      updatedThemes[index] = value;
      const lastIndex = updatedThemes.length - 1;
      if (index === lastIndex) {
        updatedThemes.push("");
      } else {
        if (value === "") {
          updatedThemes.splice(index, 1);
          document
            .getElementById(`event-theme-${updatedThemes.length - 1}`)
            ?.focus();
        }
      }
      setFormInput((prev) => ({
        ...prev,
        eventThemes: updatedThemes,
      }));
      return;
    }
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const eventThemes = formInput.eventThemes.splice(
      formInput.eventThemes.length - 1,
      1
    );
    setFormInput((prev) => ({
      ...prev,
      eventThemes: eventThemes,
    }));
    console.log("Submitting form:", formInput);
    fetch("/api/events/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formInput, executiveName: displayName }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/success");
        } else {
          navigate("/error");
        }
      })
      .catch((error) => navigate("/error"));
  };

  return { handleChange, handleSubmit, keyThemes: formInput.eventThemes };
};

export default useFormInput;
