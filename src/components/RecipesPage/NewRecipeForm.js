import React from "react";

import DroppableAndDragger from "../../components/UIComponents/DroppableAndDraggerWrapper";


function NewRecipeForm( { requeridos, droppableAndDraggerId } ) {
    console.log(requeridos)
    return (
        <form>
            <div className="row">
                <div className="col-md-6 align-items-center">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="seleccionados" className="form-label">Ingredientes</label>
                    <div className="form-control"
                        style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        <DroppableAndDragger id={droppableAndDraggerId} items={requeridos} />
                    </div>

                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
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
        </form>
    );
}

export default NewRecipeForm;