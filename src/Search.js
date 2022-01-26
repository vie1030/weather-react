import React from "react";

import "./App.css";

export default function Search() {
  return (
    <div className="Search ">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
              autocomplete="off"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
