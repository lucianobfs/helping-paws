import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Home from './Home';
import NavBar from './NavBar';
import AllPets from './AllPets';
import AddPet from './AddPet';
import FormField from "./FormField";
import SelectInput from "./SelectInput";

function EditPet() {
    const navigate = useNavigate();

    const params = useParams()

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


    useEffect(() => {
        async function fetchFormData() {
          try {
            const response = await axios.get(
              `https://ironrest.herokuapp.com/matheus-luciano/${params.id}`
            );
            delete response.data._id;
            setFormData({ ...response.data });
          } catch (err) {
            console.error(err);
          }
        }
        fetchFormData();
      }, [params.id]);

  
    function handleChange(event) {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  
    console.log(formData);
  
    function handleSubmit(event) {
      event.preventDefault();
  
      setIsSending(true);
  
      axios
        .put(`https://ironrest.herokuapp.com/matheus-luciano/${params.id}`, formData)
        .then((response) => {
          console.log(response);
          navigate("/AllPets")
          setIsSending(false);
        })
        .catch((err) => {
          console.log(err);
  
          setIsSending(false);
        });
    }
  
    return (
      <div className="container mt-5">
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
  
          <SelectInput
              label="Sex"
              id="SexInput"
              name="sex"
              onChange={handleChange}
              value={formData.sex}
          >
              <option value="male">Macho</option>
              <option value="female">Fêmea</option>
          </SelectInput>
  
          <FormField
            label="Age"
            id="AgeInput"
            type="number"
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



export default EditPet