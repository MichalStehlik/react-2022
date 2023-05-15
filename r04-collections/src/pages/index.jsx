import { Outlet, Link } from "react-router-dom"

export const FrontLayout = () => {
    return(
        <>
        <header>
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><a href="/">Home</a></li>
            </menu>
        </header>
        <main>
        <Outlet />
        </main>
        </>
    );
}

export default FrontLayout;