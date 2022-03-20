import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from '../../types';

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: { name: 'Rengoku' }
    }
    
    dispatch(action);
    
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    });

  }
  
  return (
    <div className="container mt-5">
      <h1>login</h1>
      <hr />
      <button
        onClick={ handleLogin }
        className="btn btn-primary"
      >
        login
      </button>
    </div>
  )
}
