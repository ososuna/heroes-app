import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero =  useMemo( () => getHeroById( id ), [ id ]);
  

  const handleReturn = () => {
    navigate(-1);
  }

  if ( !hero ) {
    return <Navigate to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  const imgPath = `/assets/img/${ hero.id }.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={ imgPath } 
          alt={ superhero }
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>alter ego </b> { alter_ego }
          </li>
          <li className="list-group-item">
            <b>publisher </b> { publisher }
          </li>
          <li className="list-group-item">
            <b>first appearance </b> { first_appearance }
          </li>
        </ul>

        <h5 className="mt-5">characters</h5>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          return
        </button>

      </div>
    </div>
  )
}
