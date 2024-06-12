import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the Todooly heading', () => {
  const app = render(<App />);
  const heading = app.getByRole("heading")
  expect(heading).toHaveTextContent("Todooly");
});

test('able to add todo items', () => {
  const app = render(<App />);
  let todoItem = null;
  const addButton = app.getByText("Add New");
  const input = app.getByPlaceholderText("Enter a task here");

  fireEvent.change(input, {target: {value: "New todo item"}});
  fireEvent.click(addButton);
  todoItem = app.getByText("New todo item");

  expect(todoItem).toBeInTheDocument()
});

test('able to delete a todo item', () => {
  const app = render(<App />);
  let todoItem = null;
  let deleteButton = null;
  const input = app.getByPlaceholderText("Enter a task here");
  const addButton = app.getByText("Add New");
  
  fireEvent.change(input, {target: {value: "Todo item to delete"}});
  fireEvent.click(addButton);
  todoItem = app.getByText("Todo item to delete");
  deleteButton = app.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(todoItem).not.toBeInTheDocument();
})