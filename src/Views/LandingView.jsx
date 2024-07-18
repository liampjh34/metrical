import DemoDisclaimer from "../Components/DemoDisclaimer";
import SearchBar from "../Components/SearchBar";

export default function LandingView() {
    return <>
        <div id='landing-container'>
            <h1>Metrical</h1>
            <SearchBar displayDirection={'vertical'}/>
        </div>
        <footer>
            <p>A portfolio project by <a target="_blank" href="https://github.com/liampjh34">Liam</a></p>
            <p>Powered with help from <a target="_blank" href="https://github.com/thundercomb/poetrydb">PoetryDB</a>, <a target="_blank" href="https://github.com/spencermountain/compromise">Compromise</a> and <a target="_blank" href="https://naturalnode.github.io/natural/">Natural.js</a></p>
        </footer>
    </>
}