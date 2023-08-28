function ParentStep({addChild}) {
    return ( 
        <div className="flux-drawer_step">
            <h4>Agregar Flujo</h4>
            <button onClick={(ev)=>
            {
                ev.preventDefault()
                addChild('Hola')
                }}>
                    Push me</button>
        </div>
     );
}

export default ParentStep;