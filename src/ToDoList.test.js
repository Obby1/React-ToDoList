import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from './ToDoList';

it('renders ToDoList without crashing', () => {
    render(<ToDoList />);
  });
  
  it('matches ToDoList snapshot', () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('adds and removes a todo', () => {
    const { getByLabelText, getByText, getByTestId } = render(<ToDoList />);
    const textInput = getByLabelText('Text:');
    const addButton = getByText('Add To Do');
  
    fireEvent.change(textInput, { target: { value: 'Test ToDo' } });
    fireEvent.click(addButton);
  
    const todoElement = getByTestId('todo');
    expect(todoElement).toBeInTheDocument();
  
    const removeButton = getByText('X');
    fireEvent.click(removeButton);
    expect(todoElement).not.toBeInTheDocument();
  });
  
  test('edits a todo', async () => {
    const { getByLabelText, getByText, getByTestId } = render(<ToDoList />);
    const textInput = getByLabelText('Text:');
    const addButton = getByText('Add To Do');
  
    fireEvent.change(textInput, { target: { value: 'Test ToDo' } });
    fireEvent.click(addButton);
    const toDoText = getByText('Test ToDo')
    expect(toDoText).toBeInTheDocument();
  
    const editButton = getByText('Edit');
    fireEvent.click(editButton);
  
    // const updateButton = getByText('Update!');
    const updateButton = getByTestId('update-button');
    const updateInput = getByTestId('update-input');
    expect(updateInput).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();


    fireEvent.change(updateInput, { target: { value: 'Updated ToDo' } });
    fireEvent.click(updateButton);
    const updatedToDo = getByText('Updated ToDo');
    expect(updatedToDo).toBeInTheDocument();


  });


  