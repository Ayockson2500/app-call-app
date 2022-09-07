import React, { Fragment } from "react";
import "../App.css";

const UserImage = ({ userData }) => {
  return (
    <div className="row">
      <div className="col profile">
        {userData.map((userAvater, idx) => {
          return (
            <div key={idx} className="card">
              <img
                src={`${userAvater.picture.large}`}
                alt={`${userAvater.id.name}`}
              />
              <Fragment>
                <p className="m-0">
                  <strong>{userAvater.name.title}: </strong>
                  {`${userAvater.name.first + " " + userAvater.name.last}`}
                </p>
                <p className="m-0">
                  <strong>gender: </strong>
                  {userAvater.gender}
                </p>
                <p className="m-0">
                  <strong>Address: </strong>
                  <em>{userAvater.email}</em>
                </p>
                <p className="m-0">
                  <strong>Phone: </strong>
                  {userAvater.cell}
                </p>
                <p className="m-0">
                  <strong>Age: </strong>
                  {userAvater.registered.age}
                </p>
              </Fragment>
              <a
                className="btn btn-contact"
                href={`mailto: ${userAvater.email}`}
              >
                Contact
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserImage;
