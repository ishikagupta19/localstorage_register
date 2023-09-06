import React from "react";
import Header from "../Components/Header";

const TableList = () => {
 
  return (
    <div>
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h3 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h3>
          <div className="row">
            
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
                <h4>
                  Gender :{" "}
                  {localStorage.getItem("gender")
                    ? localStorage.getItem("gender")
                    : "NA"}
                </h4>
                <p>
                  Accepted Terms And Conditions :{" "}
                  {localStorage.getItem("terms") ? "YES" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
