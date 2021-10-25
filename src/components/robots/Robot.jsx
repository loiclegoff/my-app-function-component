import { Card } from "react-bootstrap";
import { Label } from "./Label";
import { Visual } from "./Visual";

export const Robot = props => {
    

    const handleOnClick = () => {
        props.handleOnClick(props.robot.id)
    }
    return <Card 
        onClick={handleOnClick} 
        bg={props.robot.id === props.selectedRobotId ? "primary" : "default"}
    >
    <Card.Header>
        <Card.Title>Robot {props.robot.id} description</Card.Title>
    </Card.Header>
    <Card.Body>
        <Label title={props.robot.title} id={props.robot.id} />
        <Visual type={props.robot.visual_type} source={props.robot.visual_src}/>
    </Card.Body>
    </Card>
}

