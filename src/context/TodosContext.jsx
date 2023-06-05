import { createContext, useContext } from 'react';

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosContext = () => useContext(TodosContext);