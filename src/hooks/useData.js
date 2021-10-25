import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useData = (url, actionCreator) => {
    const dispatch = useDispatch()
    useEffect(async () => {
        const result = await fetch(url)
        const data = await result.json()
        dispatch(actionCreator(data))
      }, [])
}