import React from 'react';

import { useForm } from '../../hooks/useForm';

export const SearchPage = () => {

  const [ formValues, handleInputChange ] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  const handleSearch = ( event ) => {
    event.preventDefault();
    console.log(searchText);
  } 

  return (
    <>
      <h1>search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>search</h4>
          <hr />
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              placeholder="search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              search
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
