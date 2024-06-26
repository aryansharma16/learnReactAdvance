import React, { useState } from "react";
import Notes from "../../components/projectsComponents/Notes";

const DragDrop = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "The only way to do great work is to love what you do. — Steve Jobs",
    },
    {
      id: 2,
      text: "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
    },
  ]);

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
      <h1>Drag Drop - Message Box</h1>
    </div>
  );
};

export default DragDrop;
