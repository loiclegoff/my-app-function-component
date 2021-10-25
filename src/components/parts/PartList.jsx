import { useData } from "../../hooks/useData"
import { Part } from "./Part"


export const PartList = (props) => {
    const partList = useData('https://pure-temple-56604.herokuapp.com/parts')
    return partList
        .filter(part => props.selectedPartIds.includes(part.id))
        .map(part => <Part key={part.id} part={part}/>)
}
