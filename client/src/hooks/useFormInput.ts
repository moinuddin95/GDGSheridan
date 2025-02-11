import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import readFileAsDataURL from "../utils/readFileAsDataURL";

const useFormInput = (displayName: string) => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    eventName: "",
    eventDate: "",
    eventTimeFrom: "",
    eventTimeTo: "",
    eventLocation: "",
    eventDescription: "",
    eventThumbnail: null,
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (e.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (name === "eventThumbnail" && files?.[0]) {
        value = await readFileAsDataURL(files[0]);
      }
    }
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/submitEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formInput, executiveName: displayName }),
    })
      .then((res) => navigate("/success"))
      .catch((error) => navigate("/error"));
  };

  return { handleChange, handleSubmit };
};

export default useFormInput;
