import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { HeroCard } from '../hero/HeroCard';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../helpers/getHeroesByName';

export const SearchPage = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const { q = '' } = queryString.parse( location.search );

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const handleSearch = ( e ) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
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
              className="btn btn-outline-primary mt-3 btn-block"
            >
              search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>results</h4>
          <hr />
          {
            (q === '')
              ? <div className="alert alert-info">search a hero</div>
              : ( heroesFiltered.length === 0)
                && <div className="alert alert-danger">no results: { q }</div>
          }
          {
            heroesFiltered.map( hero => (
              <HeroCard
                key={ hero.id }
                { ...hero }
              />
            ))
          }

        </div>
      </div>
    </>
  )
}
