function StepItem({name, coords, addChild}) {
    const customStyle = {
        top: coords.top.toString() + '%',
        left: coords.left.toString() + '%'
    }
    return ( 
        <div className="flux-drawer_step" style={customStyle}>
            <h4>{name}</h4>
            <button onClick={(ev) => {
                ev.preventDefault()
                addChild('Hijo', coords.top, coords.left)
                }}>
                    Push me</button>
        </div>
     );
}

export default StepItem;