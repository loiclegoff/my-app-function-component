import { useEffect, useState } from "react"

export const useData = (url) => {
    const [list, setList] = useState([])

    useEffect(async () => {
        const result = await fetch(url)
        const data = await result.json()
        setList(data)
      }, [])

    return list
}