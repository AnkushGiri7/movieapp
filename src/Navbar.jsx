import React, {useState}from "react";

const Navbar = () => {
  const [searchTerm,setSearchTerm] = useState('');
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MovieApp
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" value = {searchTerm} placeholder="Search for Movies"aria-label="Search"/>
              <button className="btn btn-outline-success color-#fff" type="submit"onClick={()=>(searchMovies(searchTerm))}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
