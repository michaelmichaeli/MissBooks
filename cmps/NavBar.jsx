const { NavLink } = ReactRouterDOM

export default function NavBar(props) {

    return <nav>
        <ul className="nav-bar flex clean-list">
            <li><NavLink exact to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/addBook'>Find Books</NavLink></li>
            <li><NavLink to='/book'>Books</NavLink></li>
        </ul>
    </nav>
}