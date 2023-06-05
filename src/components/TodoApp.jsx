import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from './Modal';
import Form from './Form';
import '@/styles/App.css';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
{/*       <Navbar />
        <Modal />
        <Form /> */}
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;