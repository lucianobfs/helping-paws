import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import EditPet from "./EditPet";
import FormField from "./FormField";
import SelectInput from "./SelectInput";

function AddPet() {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    specie: "",
    breed: "",
    sex: "",
    age: "",
    vaccinated: false,
    adopted: false
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

        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);

        setIsSending(false);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormField
          label="URL"
          id="URLInput"
          type="text"
          name="url"
          onChange={handleChange}
          value={formData.url}
          required
        />

        <FormField
          label="Name"
          id="NameInput"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <FormField
          label="Specie"
          id="SpecieInput"
          type="text"
          name="specie"
          onChange={handleChange}
          value={formData.specie}
          required
        />

        <FormField
          label="Breed"
          id="BreedInput"
          type="text"
          name="breed"
          onChange={handleChange}
          value={formData.breed}
          required
        />

        <FormField
          label="Sex"
          id="SexInput"
          type="text"
          name="sex"
          onChange={handleChange}
          value={formData.sex}
          required
        />

        <FormField
          label="Age"
          id="AgeInput"
          type="text"
          name="age"
          onChange={handleChange}
          value={formData.age}
          required
        />

        <SelectInput
            label="Vaccinated"
            id="VaccinatedInput"
            name="vaccinated"
            onChange={handleChange}
            value={formData.vaccinated}
        >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
        </SelectInput>

        <SelectInput
            label="Adopted"
            id="AdoptedInput"
            name="adopted"
            onChange={handleChange}
            value={formData.adopted}
        >
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
        </SelectInput>

           

        <button disabled={isSending} type="submit" className="btn btn-primary">
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
