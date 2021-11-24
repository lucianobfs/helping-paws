import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../src/App.css";

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import EditPet from "./EditPet";
import FormField from "./FormField";
import SelectInput from "./SelectInput";
import hero from "../assets/images/hero-all-pets.jpg";
import Button from "@restart/ui/esm/Button";

function FakeForm() {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      navigate("/AllPets");
    }, 1000);
  }

  return (
    <div>
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
            Request Adoption
          </h2>
          <p style={{ fontSize: "1.8rem" }}>
            Answer some information to apply for adoption
          </p>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <SelectInput
            label="What kind of property do you live?"
            id="PropertyInput"

            // onChange={handleChange}
            // value={formData.sex}
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </SelectInput>

          <FormField
            label="What is the area of ​​your residence?"
            id="AreaInput"
            type="number"
            // onChange={handleChange}
            // value={formData.age}
            placeholder="The value should be in m²"
            required
          />

          <FormField
            label="How many people live in your residence?"
            id="PeopleInput"
            type="number"
            // onChange={handleChange}
            // value={formData.age}
            placeholder="Type 0 if you live alone"
            required
          />

          <FormField
            label="Do you already own a pet? if yes how many?"
            id="PetNumberInput"
            type="number"
            // onChange={handleChange}
            // value={formData.age}
            placeholder="Type 0 if you dont have any pets"
            required
          />

          <SelectInput
            label="Do you have the budget conditions to maintain the pet's food and health?"
            id="BudgetInput"

            // onChange={handleChange}
            // value={formData.sex}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </SelectInput>

          <FormField
            label="Personal Email:"
            id="EmailInput"
            type="email"
            // onChange={handleChange}
            // value={formData.age}
            placeholder="Insert your personal Email here"
            required
          />

          <FormField
            label="Phone"
            id="PhoneInput"
            type="tel"
            // onChange={handleChange}
            // value={formData.age}
            pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
            placeholder="(DDD) ####-####"
            required
          />

          <FormField
            label="Social Security Number"
            id="SocialSecurityInput"
            type="number"
            // onChange={handleChange}
            // value={formData.age}
            placeholder="Type your Social Security Number here"
            required
          />

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
    </div>
  );
}

export default FakeForm;
