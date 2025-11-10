
function Navbar(){

    return(
        <nav className= "navbar_">
            <a href="/" className="Homepage">Homepage</a>
            <ul>
                <li>
                    <a href="/art_page" className= "Pages">Art Page</a>
                </li>
                <li>
                    <a href="/project_page" className= "Pages"> Project Page</a>
                </li>
                <li>
                    <a href="/coding_page" className= "Pages">Coding Page</a>
                </li>
            </ul>

        </nav>

    )
}

export default Navbar