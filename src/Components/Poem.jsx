export default function Poem({ title, author, lineCount, lines }) {
    return <div id='poem-container'>
        <h1>{title}</h1>
        <h2>by {author}</h2>
        {lines.map((line, index) => {
            return <li key={index} className='poem-line'>{line}</li>
        })}
        <p>{lineCount} lines</p>
    </div> 
}