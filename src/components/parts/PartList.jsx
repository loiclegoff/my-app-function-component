import { updateParts } from "../../core/actions"
import { useData } from "../../hooks/useData"
import { Part } from "./Part"
import { useSelector } from "react-redux"


export const PartList = (props) => {
    useData('https://pure-temple-56604.herokuapp.com/parts', updateParts)
    const partList = useSelector(state => state.parts)
    return partList
        // .filter(part => props.selectedPartIds.includes(part.id))
        .map(part => <Part key={part.id} part={part}/>)
}
