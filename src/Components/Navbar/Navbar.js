import './Navbar.css'

const Navbar=()=>{
    return(
        <header>
        <nav>
            <h2>Quote Generator</h2>
            <div className="icons">
            <a href="https://github.com/jaitensahu" target='_blank'><i className="fa-brands fa-github"></i></a>
           <a href="https://www.linkedin.com/in/jaiten-sahu/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>

            </div>
        </nav>
        </header>
    )
}

export default Navbar;