// FindCarForm.jsx

import React, { useState } from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [carBrand, setCarBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function passed from the parent component
    onSearch(searchTerm, location, carBrand);
  };

  const handleClear = () => {
    setSearchTerm("");
    setLocation("");
    setCarBrand("");
    onSearch("", "", ""); // Reset the search in the parent component
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            placeholder="Search"
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search for a car"
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Select location"
          >
            <option value="">Location</option>
            <option value="chennai">Chennai</option>
            {/* Add more locations as needed */}
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            aria-label="Select car brand"
          >
            <option value="">Car Brand</option>
            <option value="suzuki">Suzuki</option>
            <option value="honda">Honda</option>
            <option value="kia">Kia</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
            {/* Add more brands as needed */}
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">Find Car</button>
          <button type="button" className="btn clear__car-btn" onClick={handleClear}>Clear</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;