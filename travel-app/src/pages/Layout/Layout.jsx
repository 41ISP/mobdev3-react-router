import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>Домой</li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>2025</footer>
        </div>
    )
}

export default Layout