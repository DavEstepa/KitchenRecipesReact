import React, {useState} from "react";

import StepItem from "../elements/StepItem";
import "./FluxDrawer.css"
import ParentStep from "../elements/ParentStep";

function FluxDrawer() {
    const [steps, setSteps] = useState([])
    const [positionOcupied, setPostionOcupied] = useState({top: 5, left: 5})

    const createNewChildStep = (nameStep, prevTop, prevLeft) => {
        const stepInfo = {
            name: nameStep,
            coords: {
                top: prevTop,
                left: prevLeft + 10
            }
        }
        setSteps((prevSteps => [...prevSteps, stepInfo]))

    }

    const createNewParentStep = (nameStep) => {
        const newGeneralPosition = {...positionOcupied, top: positionOcupied.top + 10}
        const stepInfo = {
            name: nameStep,
            coords: {
                top: positionOcupied.top + 10,
                left: positionOcupied.left
            }
        }
        setSteps((prevSteps => [...prevSteps, stepInfo]))
        setPostionOcupied(newGeneralPosition)

    }

    return ( 
        <div className="flux-drawer_container">
            {steps.map((step, index) => <StepItem key={index} {...step} addChild={createNewChildStep} />)}
            <ParentStep style={
                {
                    top: positionOcupied.top.toString() + '%',
                    left: positionOcupied.left.toString() + '%'
                }}
                addChild={createNewParentStep}
            />
        </div>
     );
}

export default FluxDrawer;