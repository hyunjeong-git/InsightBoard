import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CardList from "./CardList";

function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "12px",
    // border: "1px solid gray",
    borderRadius: "6px",
    marginBottom: "8px",
    background: "white",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardList title="Today"/>
    </div>
  );
}

function Board() {
  const params = useParams();
  const title = params.id || "Default Board Title";

  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full h-screen mt-4 border rounded-lg">
      <div className="header h-[56px] p-4 border-b-2">{title}</div>

      <div className="content">
        <div className="m-4 w-[300px]">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default Board;
