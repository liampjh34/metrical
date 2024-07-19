import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
    return <header>
        <Link to='/'><h1>Metrical</h1></Link>
        <SearchBar displayDirection={'horizontal'}/>
    </header>
}