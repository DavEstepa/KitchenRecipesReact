import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';


function DroppableAndDragger(props) {
    return (
        <Droppable droppableId={`${props.id}`}>
            {(dropableProvided) => (
                <ul {...dropableProvided.droppableProps}
                    ref={dropableProvided.innerRef}>
                    {props.items.map((item, index) => {
                        return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(draggableProvided) => (
                                    <li
                                        {...draggableProvided.draggableProps}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                    >
                                        {item.nombre}
                                    </li>
                                )}
                            </Draggable>
                        );
                    })}
                    {dropableProvided.placeholder}
                </ul>
            )}
        </Droppable>
    );
}

export default DroppableAndDragger;