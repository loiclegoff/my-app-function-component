import { Table, Button, Badge } from 'react-bootstrap'

export function Description(props) {
  // render function use to update the virtual dom
  return (
    <Table>
      <tr>
        <td> ID </td>
        <td>{props.part.id}</td>
      </tr>
      <tr>
        <td> NAME </td>
        <td>{props.part.title}</td>
      </tr>
      <tr>
        <td> PRICE</td>
        <td>
          <Button variant='primary'>
            Price <Badge>{props.value}</Badge>
          </Button>
        </td>
      </tr>
    </Table>
  )
}