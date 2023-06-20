import React, { useRef, useState } from 'react';
import linkedln from '../assets/linkedln.png';
import medium from '../assets/medium.svg';
import twitter from '../assets/twitter.svg';
import dropFile from '../assets/drop_f.jpg';
import '../styles/DnD.css';

const DragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const droppableAreaRef = useRef(null);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const target = event.target;
    target.appendChild(draggedItem);
    setDraggedItem(null);
  };

  return (
    <div className="mainWrapper">
      <div className="topContainer">
        <h2>REACT DRAG AND DROP</h2>
      </div>
      <div className="midContainer">
        <div
          id="droppable2"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="draggbleContainers">
          <div id="draggable1"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, event.target)}
            className="draggableContainer">
            Drag Me 1
          </div>
          <div id="draggable2"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, event.target)}
            className="draggableContainer">
            Drag Me 2
          </div>
          <div id="draggable3"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, event.target)}
            className="draggableContainer">
            Drag Me 3
          </div>
          <div id="draggable4"
            draggable="true"
            onDragStart={(event) => handleDragStart(event, event.target)}
            className="draggableContainer">
            Drag Me 4
          </div>
        </div>
        <div className="droppableContainer">
          <div
            ref={droppableAreaRef}
            id="droppable"
            onDragOver={handleDragOver}
            onDrop={handleDrop} className="innerDroppableCont">
          { (!draggedItem && droppableAreaRef?.current?.children[0]?.className != "draggableContainer") && <img src={dropFile} alt="drop file" className="drophere" />}
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div className="socialContainers">
          <a href="https://www.linkedin.com/in/muftau/" target="_blank" className="socialBtn">
            <img src={linkedln} alt="linkedln" className="socialIcon" />
            <p>Linkedln</p>
          </a>
          <a href="https://medium.com/@muftaudeenjimoh" target="_blank" className="socialBtn">
            <img src={medium} alt="medium" className="socialIcon medium" />
          </a>
          <a href="https://twitter.com/muftaujimoh01" target="_blank" className="socialBtn">
            <img src={twitter} alt="twitter" className="socialIcon" />
            <p>Twitter</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
