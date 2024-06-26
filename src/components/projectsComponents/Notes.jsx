import React, { useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  useEffect(() => {
    // localstorage logic
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);
  const noteRefs = useRef([]);
  const determineNewPosition = () => {
    // max position for the notes to use when positioning notes
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
      x: Math.floor(Math.random() * maxX), // random value for the x position
      y: Math.floor(Math.random() * maxY), // random value for the y position
    };
  };
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            ref={noteRefs.current[note.id]}
            initialPos={note.position}
            key={note.id}
            content={note.text}
          />
        );
      })}
    </div>
  );
};

export default Notes;