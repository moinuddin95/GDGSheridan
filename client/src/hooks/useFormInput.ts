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
    eventThemes: [""],
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    let { name, value } = e.target;
    if (e.target instanceof HTMLInputElement) {
      const files = e.target.files;
      if (name === "eventThumbnail" && files?.[0]) {
        value = await readFileAsDataURL(files[0]);
      }
      if (name === "eventThemes" && index !== undefined) {
        let updatedThemes = formInput.eventThemes;
        updatedThemes[index] = value;
        const lastIndex = updatedThemes.length - 1;
        if(index === lastIndex) {
          updatedThemes.push("");
        }else{
          if(value === ""){
            updatedThemes.splice(index, 1);
            document.getElementById(`event-theme-${updatedThemes.length - 1}`)?.focus();
          }
        }
        setFormInput((prev) => ({
          ...prev,
          eventThemes: updatedThemes,
        }));
        return;
      }
    }
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
