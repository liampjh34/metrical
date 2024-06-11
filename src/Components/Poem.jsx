import { Card } from "react-bootstrap";
import { Placeholder } from "react-bootstrap";

export default function Poem({ title, author, lineCount, lines }) {
    
    return <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{author}</Card.Text>
            <Card.Text>{lines.map((line) => {
                return <p>{line}</p>
            })}</Card.Text>
        </Card.Body>
        <Card.Footer>{lineCount} lines</Card.Footer>
    </Card>
}