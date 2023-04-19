import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoForm from './ToDoForm';



it('renders ToDoForm without crashing', () => {
    render(<ToDoForm addToDo={() => {}} />);
  });
  
it('matches ToDoForm snapshot', () => {
    const { asFragment } = render(<ToDoForm addToDo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
  
// core functinality tests for updating, removing, editing tests located in ToDoList.test.js
test('calls addToDo prop when form is submitted', () => {
    const addToDo = jest.fn();
    const { getByLabelText, getByText } = render(<ToDoForm addToDo={addToDo} />);
    const textInput = getByLabelText('Text:');
    const addButton = getByText('Add To Do');
  
    fireEvent.change(textInput, { target: { value: 'Test ToDo' } });
    fireEvent.click(addButton);
  
    expect(addToDo).toHaveBeenCalled();
  });
  

