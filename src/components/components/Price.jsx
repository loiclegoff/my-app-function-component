import { Badge, Button } from "react-bootstrap";

export const Price = (props) => <Button variant='primary'>
    Price <Badge>{props.value}</Badge>
</Button>