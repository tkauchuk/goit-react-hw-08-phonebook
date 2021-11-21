import { useState } from 'react';
import {useDispatch} from 'react-redux';
import authOperations from '../redux/authentification/auth-operations';
import Section from '../components/Section';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({target: {name, value}}) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }
  const onReset = () => {
    setEmail('');
    setPassword('');
  }
  const onSubmit = event => {
    event.preventDefault();
    const user = { email, password };
    dispatch(authOperations.login(user));
    onReset();
  }

  return (
    <Section>
      <b className="appeal">Log in</b>
      <form className="form" onSubmit={onSubmit} autoComplete="off">
        <label className="label">
          Email
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            required
            onChange={onChange}
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            required
            onChange={onChange}
          />
        </label>
        <button className="button" type="submit">Log in!</button>
      </form>
    </Section>
  );
}

export default Login;