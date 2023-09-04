import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title">Home</h4>
              </div>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
