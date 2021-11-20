import Section from '../components/Section';

function Login() {
  return (
    <Section>
      <b className="appeal">Log in</b>
      <form className="form">
        <label className="label">
          Email
          <input
            className="input"
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
          />
        </label>
        <button className="button" type="submit">Log in!</button>
      </form>
    </Section>
  );
}

export default Login;