import { Card } from "react-bootstrap"
import { Label } from "../robots/Label"
import { Visual } from "../robots/Visual"

export const Part = ({part}) => {
    return <Card>
        <Card.Header>
            <Card.Title>Part {part.id} description</Card.Title>
        </Card.Header>
        <Card.Body>
            <Label title={part.title} id={part.id} />
            <Visual type={part.visual_type} source={part.visual_src}/>
        </Card.Body>
    </Card>
}