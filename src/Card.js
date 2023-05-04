import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { FaEnvelope , FaMandalorian} from "react-icons/fa";
import {FcCallback} from "react-icons/fc";
import { BiCurrentLocation, BiMailSend } from "react-icons/bi";

const Cards = ({ details }) => {
  console.log(details.picture?.large);
  return (
    <Card>
      <CardBody className="text-centre d-flex flex-column column bg-primery align-items-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt=""
        />
        <CardTitle className="text-primery">
          <h1>
            <span>{details.name?.title}</span>
            <span className="mx-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        
        <CardSubtitle className="d-flex flex-row fw-bold align-items-start">

          <p><BiMailSend className="fs-3 text-success" /> {details?.email} </p>
          
         </CardSubtitle>
        
        <CardSubtitle className="d-flex flex-row fw-bold align-items-start">

          <p><FcCallback className="fs-3 text-success"/> {details?.phone} </p>
       
        </CardSubtitle>

        <CardSubtitle className="d-flex flex-row fw-bold align-items-start">
          <BiCurrentLocation className="fs-3 text-success" />
          <p>{details.location?.street?.number} , </p>
          <p>{details.location?.street?.name} , </p>
          <p>
            {details.location?.city} ,<br />{" "}
          </p>
        </CardSubtitle>

        <CardSubtitle className="d-flex flex-row fw-bold align-items-center">
          <p>{details.location?.state} , </p>
          <p>{details.location?.country} , </p>
          <p>{details.location?.postcode}</p>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default Cards;
