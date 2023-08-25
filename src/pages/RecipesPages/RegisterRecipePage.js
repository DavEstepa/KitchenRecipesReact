import React, { useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DroppableAndDragger from "../../components/UIComponents/DroppableAndDraggerWrapper";

const initialState = {
    ingredientes : [{ id: '1', nombre: 'leche' }, { id: '2', nombre: 'arroz' }, { id: '3', nombre: 'azucar' }],
    requeridos : []
}
function RegisterRecipePage() {
    const [lists, setLists] = useState(initialState)

    const handleOnDrag = (result) => {
        console.log(result)
        setLists((prevState)=>{
            const newItem = {...prevState.ingredientes.filter(ingrediente=>ingrediente.id===result.draggableId)[0]}
            newItem.id = newItem.id + 100
            console.log(newItem)
            return(
                {
                    ...prevState,
                    requeridos: [...prevState.requeridos, newItem]
                }
            )
        })
    }
    return (
        <DragDropContext onDragEnd={ handleOnDrag }>
            <div className="container" style={{position: 'fixed', left: '0%', top: '20%'}}>
                <div className="row">
                    <DroppableAndDragger id="ingredientes" items={lists.ingredientes} style={{textDecorator: 'none'}}/>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <h3>Suelte los ingredientes</h3>
                    <div style={{backgroundColor: 'green'}}>
                    <DroppableAndDragger id="seleccionados" items={lists.requeridos} />
                    </div>
                </div>
            </div>
        </DragDropContext>
    );
}

export default RegisterRecipePage;