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
            <div className="container" style={{ position: 'fixed', left: '0%', top: '20%', maxWidth: '10%' }}>
                <div className="row">
                    <DroppableAndDragger id="ingredientes" items={lists.ingredientes} style={{ textDecorator: 'none' }} />
                </div>
            </div>
            <div className="container">
                <NewRecipeForm droppableAndDraggerId='seleccionados' requeridos={lists.requeridos} />
                {/* <form>
                    <div className="row">
                        <div class="col-md-6 align-items-center">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label htmlFor="seleccionados" className="form-label">Ingredientes</label>
                            <div className="form-control"
                            style={{maxHeight: '200px', overflowY: 'auto'}}>
                                <DroppableAndDragger id="seleccionados" items={lists.requeridos} />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form> */}
            </div>
        </DragDropContext>
    );
}

export default RegisterRecipePage;