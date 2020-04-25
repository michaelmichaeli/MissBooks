
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM
const history = History.createBrowserHistory()

function Home() {
    return <section>HOME</section>
}

import UserMsg from './cmps/UserMsg.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import BookApp from './pages/BookApp.jsx';
import About from './pages/About.jsx';
import BookDetails from './pages/BookDetails.jsx'
import BookAdd from './pages/BookAdd.jsx'
import Home from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container flex column align-center">
                    <AppHeader history={history} />
                    <UserMsg />
                    <main>
                        <Switch>
                            <Route exact component={BookDetails} path="/book/:bookid" />
                            <Route exact component={BookApp} path="/book" />
                            <Route exact component={BookAdd} path="/addBook" />
                            <Route exact component={About} path="/about" />
                            <Route exact component={Contact} path="/contact" />
                            <Route exact path='/careers' component={Careers} />
                            <Route exact component={Home} path="/" />
                        </Switch>
                    </main>
                </div>

            </Router >
        )
    }
}

