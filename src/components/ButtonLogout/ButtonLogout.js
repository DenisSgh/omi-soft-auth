import { CssButtonLogOut } from 'components/customInputs';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const ButtonLogout = () => {
  const dispatch = useDispatch();

  return (
    <CssButtonLogOut onClick={() => dispatch(logOut())}>Logout</CssButtonLogOut>
  );
};

export default ButtonLogout;
