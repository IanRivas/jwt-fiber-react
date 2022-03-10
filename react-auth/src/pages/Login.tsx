import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  const handleForm = async (event: any) => {
    event.preventDefault();

    const dataForm = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // credentials include para que enviee la cookie
    const response = await window.fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(dataForm),
    });

    const content = await response.json();

    if (content.message === 'success') {
      navigate('/');
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        name="email"
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
}
