import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

//action imports
import { searchMovies } from "../actions/searchMovies";
import DisplayMovies from "./DisplayMovies";

const SearchMovies = ({ searchMovies }) => {
   const [movie, setMovie] = useState("");

   const handleChange = (e) => setMovie(e.target.value);

   const handleSubmit = (e) => {
      e.preventDefault();
      searchMovies(movie);
   };

   return (
      <Fragment>
         <form onSubmit={handleSubmit}>
            <div className="input-group my-3">
               <input
                  type="text"
                  id="movie"
                  name="movie"
                  required
                  value={movie}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Search movies"
                  aria-label="Search movies"
                  aria-describedby="button-addon2"
               />
               <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
               >
                  Search
               </button>
            </div>
         </form>
         <DisplayMovies />
      </Fragment>
   );
};

const mapStateToProps = (state) => ({
   data: state.searchMovies.data,
});

export default connect(mapStateToProps, { searchMovies })(SearchMovies);
