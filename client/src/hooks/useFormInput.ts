import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventDetailsInterface from "../interfaces/EventsDetailsInterface";

const useFormInput = (displayName: string) => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState<EventDetailsInterface>({
    eventName: "",
    eventURL: "",
    eventDateFrom: "",
    eventDateTo: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    eventLocation: "",
    eventDescription: "",
    eventThemes: [""],
    executiveName: "",
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    let { name, value } = e.target;
    if (name === "eventThemes" && index !== undefined) {
      let updatedThemes= formInput.eventThemes;
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
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    console.log("Submitting form:", {...formInput, eventThemes, executiveName: displayName});
    fetch(`${API_BASE_URL}/events/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formInput, eventThemes, executiveName: displayName }),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/success");
        } else {
          navigate("/error");
        }
      })
      .catch((_error) => navigate("/error"));
  };

  return { handleChange, handleSubmit, keyThemes: formInput.eventThemes};
};

export default useFormInput;
