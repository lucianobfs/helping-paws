import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../src/App.css"

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import EditPet from "./EditPet";
import FormField from "./FormField";
import SelectInput from "./SelectInput";
import hero from "../assets/images/hero-all-pets.jpg";

function AddPet() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    url: "",
    name: "",
    specie: "",
    breed: "",
    sex: "male",
    age: "",
    vaccinated: false,
    adopted: false,
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);

    axios
      .post("https://ironrest.herokuapp.com/matheus-luciano", formData)
      .then((response) => {
        console.log(response);
        navigate("/AllPets");
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);

        setIsSending(false);
      });
  }

  return (
    <>
      <div
        className="hero-image d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          height: "calc(100vh - 108.56px)",
        }}
      >
        <div className="hero-text text-white text-center">
          <h2 style={{ fontSize: "4rem", marginBottom: "75px" }}>
            Register a Pet
          </h2>
          <p style={{ fontSize: "1.8rem" }}>It's Free, Easy and Simple</p>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <FormField
            label="URL"
            id="URLInput"
            type="text"
            name="url"
            onChange={handleChange}
            value={formData.url}
            placeholder="Insert the Image URL of the Pet here"
            required
          />

          <FormField
            label="Name"
            id="NameInput"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Insert the name of the Pet here"
            required
          />

          <FormField
            label="Specie"
            id="SpecieInput"
            type="text"
            name="specie"
            onChange={handleChange}
            value={formData.specie}
            placeholder="Insert the specie of the Pet here"
            required
          />

          <FormField
            label="Breed"
            id="BreedInput"
            type="text"
            name="breed"
            onChange={handleChange}
            value={formData.breed}
            placeholder="Insert the breed of the Pet here"
            required
          />

          <SelectInput
            label="Sex"
            id="SexInput"
            name="sex"
            onChange={handleChange}
            value={formData.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </SelectInput>

          <FormField
            label="Age"
            id="AgeInput"
            type="number"
            name="age"
            onChange={handleChange}
            value={formData.age}
            placeholder="Insert the Age of the Pet here"
            required
          />

          <SelectInput
            label="Vaccinated"
            id="VaccinatedInput"
            name="vaccinated"
            onChange={handleChange}
            value={formData.vaccinated}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </SelectInput>

          <SelectInput
            label="Adopted"
            id="AdoptedInput"
            name="adopted"
            onChange={handleChange}
            value={formData.adopted}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </SelectInput>

          <button
            disabled={isSending}
            type="submit"
            className="btn btn-primary"
          >
            {isSending ? (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            ) : null}
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPet;

{
  /* <FormField
label="Adopted"
id="AdoptedInput"
type="select"
name="adopted"
onChange={handleChange}
value={formData.adopted}
required
>
<option selected value="Não">
  Não
</option>
<option value="Sim">
  Sim
</option>
</FormField> */
}

{
  /* <FormField
label="Breed"
id="BreedInput"
type="text"
name="breed"
onChange={handleChange}
value={formData.breed}
placeholder="Insert the breed of the Pet here"
required
/> */
}
