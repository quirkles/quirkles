import {
  useAppSelector,
  useAppDispatch,
  setAuthPassword,
  setAuthUsername,
} from '../store';

export function Login() {
  const { password, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="account-pages mt-5 mb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <p className="text-muted mb-4 mt-3">
                    Enter your email address and password to access admin panel.
                  </p>
                </div>

                <form action="#">
                  <div className="mb-3">
                    <label htmlFor="emailaddress" className="form-label">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="emailaddress"
                      required={true}
                      value={username}
                      onChange={(event) =>
                        dispatch(setAuthUsername(event.target.value))
                      }
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) =>
                          dispatch(setAuthPassword(event.target.value))
                        }
                        className="form-control"
                        placeholder="Enter your password"
                      />
                      <div className="input-group-text" data-password="false">
                        <span className="password-eye"></span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center d-grid">
                    <button className="btn btn-primary" type="submit">
                      {' '}
                      Log In
                    </button>
                  </div>
                </form>

                <div className="text-center">
                  <h5 className="mt-3 text-muted">Sign in with</h5>
                  <ul className="social-list list-inline mt-3 mb-0">
                    <li className="list-inline-item">
                      <a className="social-list-item border-primary text-primary">
                        <i className="mdi mdi-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-list-item border-danger text-danger">
                        <i className="mdi mdi-google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-list-item border-info text-info">
                        <i className="mdi mdi-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="social-list-item border-secondary text-secondary">
                        <i className="mdi mdi-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 text-center">
                <p>
                  <a href="auth-recoverpw.html" className="text-white-50 ms-1">
                    Forgot your password?
                  </a>
                </p>
                <p className="text-white-50">
                  Don't have an account?{' '}
                  <a href="auth-register.html" className="text-white ms-1">
                    <b>Sign Up</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
