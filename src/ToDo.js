import React from 'react';

function ToDo({ id, text, completed, removeToDo, ...props }) {
  const styles = {
    // width: `${width}px`,
    // height: `${height}px`,
    // backgroundColor: backgroundColor,
    // add strike through here if completed?
  };

  const handleRemove = () => {
    removeToDo(id);
  };

  return (
    <div {...props}>
        {text}
      {/* <div style={styles}></div> */}
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default ToDo;
