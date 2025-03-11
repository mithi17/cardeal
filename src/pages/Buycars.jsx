// Buycars.jsx

import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import '../styles/rent-car-form.css';

import carData from "../assets/data/BuycarData";
import BuyItem from "../components/UI/BuyItem";
import FindCarForm from "../components/UI/FindCarForm";

const Buycars = () => {
  const [sortOption, setSortOption] = useState("low");
  const [filteredCars, setFilteredCars] = useState(carData);

  const handleSearch = (searchTerm, location, carBrand) => {
    const filtered = carData.filter(car => {
      const matchesSearchTerm = car.carName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = location ? car.location === location : true; // Assuming car has a location property
      const matchesBrand = carBrand ? car.brand.toLowerCase() === carBrand.toLowerCase() : true;

      return matchesSearchTerm && matchesLocation && matchesBrand;
    });

    setFilteredCars(filtered);
  };

  return (
    <Helmet title="Cars">
      <CommonSection title="Buy Cars" />

      <div className="hero__form1">
        <Container>
          <Row className="form__row1">
            <Col lg="4" md="4">
              <div className="find__cars-left1">
                <h2>Find your best car here</h2>
              </div>
            </Col>

            <Col lg="8" md="8" sm="12">
              <FindCarForm onSearch={handleSearch} />
            </Col>
          </Row>
        </Container>
      </div>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {filteredCars
              .slice()
              .sort((a, b) => {
                if (sortOption === "low") {
                  return a.price - b.price;
                } else {
                  return b.price - a.price;
                }
              })
              .map((item) => (
                <BuyItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Buycars;