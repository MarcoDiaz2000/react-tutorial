import { Routes, Route } from 'react-router-dom';

import Home from '@/routes/Home';
import About from '@/routes/About';
import Login from '@/routes/Login';
import Profile from '@/routes/Profile';
import NotMatch from '@/routes/NotMatch';
import Layout from '@/components/Layout';
import SinglePage from '@/routes/SinglePage';
import ProtectedRoute from '@/components/ProtectedRoute';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route 
        path="profile" 
        element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
        } 
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;

/* import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import Modal from './Modal';
import Form from './Form';
import '@/styles/App.css';

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Navbar />
        <Modal />
        <Form />
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp; */