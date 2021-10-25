import { updateParts } from "../../core/actions"
import { useData } from "../../hooks/useData"
import { Part } from "./Part"
import { useSelector } from "react-redux"
import { selectSelectedParts } from "../../core/selectors"

export const PartList = () => {
    useData('https://pure-temple-56604.herokuapp.com/parts', updateParts)
    const partList = useSelector(selectSelectedParts)
    return partList
        // .filter(part => props.selectedPartIds.includes(part.id))
        .map(part => <Part key={part.id} part={part}/>)
}
