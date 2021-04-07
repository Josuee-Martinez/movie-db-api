import React from "react";
import { connect } from "react-redux";

const DisplayMovies = ({ data }) => {
   return (
      <div>
         {data.results.map((result) => (
            <h1>{result.original_title}</h1>
         ))}
      </div>
   );
};

const mapStateToProps = (state) => ({
   data: state.searchMovies.data,
});

export default connect(mapStateToProps, null)(DisplayMovies);
