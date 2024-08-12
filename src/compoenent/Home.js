import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <h1>Home</h1>
        <Link to="/footer">Footer</Link>  {/* Not Reloud The Page  */}
        <Link to="/header">Header</Link>
        <Link to="/test">Test</Link>

        </>

    )
}
export default Home