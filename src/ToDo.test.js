import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDo from './ToDo';

const dummyToDo = {
  id: '1',
  text: 'Test ToDo',
  completed: false,
};

const removeToDo = jest.fn();
const update = jest.fn();

it('renders ToDo without crashing', () => {
  render(<ToDo {...dummyToDo} removeToDo={removeToDo} update={update} />);
});

it('matches ToDo snapshot', () => {
  const { asFragment } = render(<ToDo {...dummyToDo} removeToDo={removeToDo} update={update} />);
  expect(asFragment()).toMatchSnapshot();
});

// Test the 'X' button to ensure it calls the removeToDo function with the correct ID.
test('deletes a todo', () => {
  const { getByText } = render(<ToDo {...dummyToDo} removeToDo={removeToDo} update={update} />);
  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
    //  test if removeToDo function called within dummyToDo as intended
  expect(removeToDo).toHaveBeenCalledWith(dummyToDo.id);
});

// Test the 'Edit' button which should change the component to the editing view.
// Test the input field and 'Update!' button to ensure they update the todo item correctly.
test('edits a todo', () => {
  const { getByText, getByTestId } = render(<ToDo {...dummyToDo} removeToDo={removeToDo} update={update} />);
  const editButton = getByText('Edit');
  fireEvent.click(editButton);

  const updateInput = getByTestId('update-input');
  const updateButton = getByTestId('update-button');

  fireEvent.change(updateInput, { target: { value: 'Updated ToDo' } });
  fireEvent.click(updateButton);
    // test if update function called with correct arguments 
  expect(update).toHaveBeenCalledWith(dummyToDo.id, 'Updated ToDo');
});
