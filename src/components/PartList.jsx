import { useEffect, useState } from 'react'
import { Part } from './part/Part'

export function PartList(props) {
  const [partList, setPartList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/parts')
      const partList = await resp.json()
      setPartList(partList)
    }
    fetchData()
  }, [])

  return <div>
    {partList.filter(part => props.selectedPartIds.includes(part.id)).map(part => <Part key={part.id} part={part} />)}
  </div>
}
