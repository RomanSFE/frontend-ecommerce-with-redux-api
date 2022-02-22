import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
          <div className="SidebarMainWrapBox">
              <ul>
                  <li>
                    <Link to="/">
                            All In One Tab
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/:id">
                        Test category
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                        Test category 1
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                        Test category 2
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                        Test category 3
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                        Test category 4
                    </Link>
                  </li>
              </ul>
          </div>
        </>
    )
}

export default Sidebar
