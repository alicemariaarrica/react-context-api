import { NavLink } from "react-router-dom"
export default function MainMenu() {

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Posts">Posts</NavLink>
                <NavLink to="/Chisiamo">Chisiamo</NavLink>

            </nav>


        </>
    )

}