import React, { useRef, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

import DroppableAndDragger from "../../components/UIComponents/DroppableAndDraggerWrapper";
import NewRecipeForm from "../../components/RecipesPage/NewRecipeForm";

const initialState = {
    ingredientes: [{ id: '1', nombre: 'leche' }, { id: '2', nombre: 'arroz' }, { id: '3', nombre: 'azucar' }],
    requeridos: []
}
function RegisterRecipePage() {
    const [lists, setLists] = useState(initialState)

    const handleOnDrag = (result) => {
        console.log(result)
        setLists((prevState) => {
            return (
                {
                    ...prevState,
                    requeridos: [...prevState.requeridos,
                    {
                        ...prevState.ingredientes.filter(ingrediente => ingrediente.id === result.draggableId)[0],
                        id: uuidv4()
                    }]
                }
            )
        })
    }
    return (
        <DragDropContext onDragEnd={handleOnDrag}>
            <div className="container" style={{ position: 'fixed', right: '0%', top: '20%', maxWidth: '10%' }}>
                <div className="row">
                    <DroppableAndDragger id="ingredientes" items={lists.ingredientes} style={{ textDecorator: 'none' }} />
                </div>
            </div>
            <div className="container mt-3">
                <h1 className="text-center">Nueva receta</h1>
                <NewRecipeForm className="mt-5" droppableAndDraggerId='seleccionados' requeridos={lists.requeridos} />
            </div>
        </DragDropContext>
    );
}

export default RegisterRecipePage;