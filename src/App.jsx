import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Chisiamo from "./pages/Chisiamo"
import PostsDetails from "./pages/PostsDetails"
import Defaultlayout from "./pages/Defaultlayout"
import { PostProvider } from './context/PostContext';

function App() {

    return (
        <>

            <PostProvider>

                <BrowserRouter>

                    <Routes>
                        <Route element={<Defaultlayout />}>

                            <Route path="/" element={<Home />} />
                            <Route path="/Posts" element={<Posts />} />
                            <Route path="/Chisiamo" element={<Chisiamo />} />
                            <Route path="/posts/:id" element={<PostsDetails />} />

                        </Route>

                    </Routes>
                </BrowserRouter>



            </PostProvider>




        </>
    )
}

export default App