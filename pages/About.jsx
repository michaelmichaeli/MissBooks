const { Route, Switch, NavLink } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

// import Careers from './Careers.jsx'
// import Contact from './Contact.jsx'

export default class About extends React.Component {

    render() {
        return (
            <section className="about">
                <div className="bg-image"></div>
                <div className="bg-text">
                    <div className="about-nav flex space-between">
                        <NavLink to="/careers">Careers</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <h2>Welecome To My Little Book Store</h2>
                    <h1>I am Michael</h1>
                </div>
            </section>


            // <Router>
            //     <section className="about-nav-bar">
            //         <h1>About</h1>
            //         {/* <NavLink to={`${match.url}/company`}>Company</NavLink>
            //     <NavLink to={`${match.url}/careers`}>Careers</NavLink> */}

            //         <NavLink to='/company'>Company</NavLink>
            //         <NavLink to='/careers'>Careers</NavLink>

            //         <Switch>
            //             <Route component={Careers} path="/careers" />
            //             <Route component={Contact} path="/contact" />
            //         </Switch>
            //     </section>
            // </Router>
        )
    }
}