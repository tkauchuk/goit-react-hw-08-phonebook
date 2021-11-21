import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/authentification/auth-operations';

import Section from '../components/Section';


function Signup() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  }

  const onSubmit = event => {
    event.preventDefault();

    const user = {name, email, password};
    dispatch(authOperations.signup(user));
    onReset();
  }

  return (
    <Section>
      <b className="appeal">Sign up</b>
        <form className="form" onSubmit={onSubmit} autoComplete="off">
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              required
              onChange={onChange}
            />
          </label>
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
          <button className="button" type="submit">Sign up!</button>
        </form>
    </Section>
  );
}

export default Signup;