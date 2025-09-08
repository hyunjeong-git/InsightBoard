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
import Inbox from "./Inbox";

function SortableItem({ id, index }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "272px",
    height: "100vh",
    borderRadius: "6px",
    marginBottom: "8px",
    cursor: "grab",
    marginRight: "18px",
    backgroundColor: "#f1f2f4",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardList title={id} userId={index}/>
    </div>
  );
}

function Board() {
  const params = useParams();
  const title = params.id || "Default Board Title";

  const [items, setItems] = useState(["Today", "This week", "Later"]);

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
    <div className="flex mt-4">
      <div className="w-[272px] border rounded-lg mr-4">
        <Inbox />
      </div>
      <div className="w-full h-screen border rounded-lg">
        <div className="header h-[56px] p-4 border-b-2">{title}</div>

        <div className="content">
          <div className="m-4 flex">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={items}>
                {items.map((id, index) => (
                  <SortableItem key={id} id={id} index={index + 1}/>
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
