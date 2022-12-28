import React, {useState} from "react";

function MovieListPage() {

    const[searchTerm, setSearchTerm] =useState('')

const handleSearchTermChange = (e)=>{
setSearchTerm(e.target.value);
}

  return (
    <div>
      <h1>Movie List Page</h1>
      Search <input type="text" onChange= {handleSearchTermChange} />
    </div>
  );
}

export default MovieListPage;
