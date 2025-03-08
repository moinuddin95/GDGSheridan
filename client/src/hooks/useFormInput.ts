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
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleThemesChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    let { value } = e.target;
    let updatedThemes = formInput.eventThemes;
    updatedThemes[index] = value;
    const lastIndex = updatedThemes.length - 1;
    if (index === lastIndex) {
      updatedThemes.push("");
    } else if (value === "") {
      updatedThemes.splice(index, 1);
      document
        .getElementById(`event-theme-${updatedThemes.length - 1}`)
        ?.focus();
    }
    setFormInput((prev) => ({
      ...prev,
      eventThemes: updatedThemes,
    }));
    console.log(JSON.stringify(formInput));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    let eventThemes = formInput.eventThemes;
    eventThemes.splice(formInput.eventThemes.length - 1, 1);

    console.log("Submitting form:", {
      ...formInput,
      eventThemes,
      executiveName: displayName,
    });
    fetch(`${API_BASE_URL}/events/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formInput,
        eventThemes,
        executiveName: displayName,
      }),
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

  return {
    handleChange,
    handleThemesChange,
    handleSubmit,
    keyThemes: formInput.eventThemes,
  };
};

export default useFormInput;
