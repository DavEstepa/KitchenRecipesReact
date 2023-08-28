import React from "react";

import DroppableAndDragger from "../../components/UIComponents/DroppableAndDraggerWrapper";
import FluxDrawer from "../UIComponents/FluxDrawer/container/FluxDrawer";

function NewRecipeForm( { requeridos, droppableAndDraggerId } ) {
    console.log(requeridos)
    return (
        <form>
            <div className="row">
                <div className="col-md-6 align-items-center">
                    <label htmlFor="nombre_receta" className="form-label">Nombre de la receta</label>
                    <input type="text" className="form-control" id="nombre_receta" />
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="seleccionados" className="form-label">Ingredientes</label>
                    <div className="form-control"
                        style={{ maxHeight: '200px', overflowY: 'auto', height: '200px' }}>
                        <DroppableAndDragger id={droppableAndDraggerId} items={requeridos} />
                    </div>

                </div>
            </div>
            <div className="col-12 mt-5">
                <FluxDrawer />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    );
}

export default NewRecipeForm;