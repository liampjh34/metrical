import DemoDisclaimer from "../Components/DemoDisclaimer";
import SearchBar from "../Components/SearchBar";

export default function LandingView() {
    return <>
        <div id='landing-container'>
            <h1>Metrical</h1>
            <SearchBar/>
        </div>
        <footer>
            <p>A portfolio project by Liam</p>
            <p>Powered with help from PoetryDB, Compromise and Natural.js</p>
        </footer>
    </>
}