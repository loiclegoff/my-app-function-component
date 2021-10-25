export const Visual = ({ type, source }) => {

    if(type === "img") {

        return (
            <img alt='imgCard' style={{ width: '100%' }} src={source} />
          )
    }
    if(type === "video") {
        return           <object
        width='100%'
        height='100%'
        aria-label='videoCard'
        data={source}></object>
    }
}