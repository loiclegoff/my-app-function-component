import { Table } from 'react-bootstrap'
import { Price } from '../components/Price'

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
          <Price value={props.part.price} />
        </td>
      </tr>
    </Table>
  )
}