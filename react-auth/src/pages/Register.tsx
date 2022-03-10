import { useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();
  const handleForm = async (event: any) => {
    event.preventDefault();

    const dataForm = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const response = await window.fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataForm),
    });

    const content = await response.json();

    if (content.id) {
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleForm}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <input
        type="text"
        className="form-control"
        name="name"
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        name="email"
        required
      />

      <input
        type="password"
        className="form-control"
        placeholder="Password"
        name="password"
        required
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Register;
