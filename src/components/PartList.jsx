import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Part } from './part/Part'

export function PartList() {
  const [partList, setPartList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://pure-temple-56604.herokuapp.com/parts')
      const partList = await resp.json()
      setPartList(partList)
    }
    fetchData()
  }, [])

  if (partList.length < 1) {
    return <Spinner animation='border' />
  }

  return <div>
    {partList.map(part => <Part key={part.id} part={part} />)}
  </div>
}
