import { Card } from "react-bootstrap";

export default function Poem({ title, author, lineCount, lines }) {
    return <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Card.Text>{lines.map((line, index) => {
                return <li 
                    key={index}
                    className='poem-line'>{line}</li>
            })}</Card.Text>
        </Card.Body>
        <Card.Footer>{lineCount} lines</Card.Footer>
    </Card>
}