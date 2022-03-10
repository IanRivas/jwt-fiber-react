import { Link } from 'react-router-dom';

type props = {
  name: string;
  setName: (name: string) => void;
};

export default function Nav(props: props) {
  const { name, setName } = props;
  const logout = async () => {
    await window.fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    setName('');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {!name ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link active" to="/login" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
