import React, { useState } from "react";

export default function SearchForm() {
  return (
    <section className="search-form" >
      <form >
        <input
          // onChange={handleChange}
          type="text"
          name="character"
          id="character"
          placeHolder="Search"
          />
      </form>
    </section>
  );
}