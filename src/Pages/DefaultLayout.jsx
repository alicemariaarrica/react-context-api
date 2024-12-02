import { Outlet } from "react-router-dom"
import MainMenu from "../Components/MainMenu.jsx"



export default function Defaultlayout() {

    return (
        <>


            <header>
                <div className="Logo">Logo :)</div>

                < MainMenu />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>

                <p>Copyright 2024</p>
            </footer>



        </>


    )
}