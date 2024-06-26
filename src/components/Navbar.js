import React, { useState } from "react";

function Navbar() {

  //Set the pokemon and pass it to the Pokemon Page
  const [pokemon, setPokemon] = useState(null);


  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">Pokemon Information</a>
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
