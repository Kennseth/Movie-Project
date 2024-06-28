import React from "react";
import Hero from "../hero/Hero"; // Correct import path to Hero component

const Homm = ({ movies }) => {
    return (
        <div>
            {movies && <Hero movies={movies} />} {/* Render Hero only if movies is defined */}
        </div>
    );
};

export default Homm;
