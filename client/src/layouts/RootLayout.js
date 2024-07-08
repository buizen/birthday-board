import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Drinking Night Friendos</h1>
                    <NavLink to="/birthday-board">Home</NavLink>
                    <NavLink to="/upload">Upload</NavLink>
                </nav>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    )
}