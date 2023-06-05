import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotMatch = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default NotMatch;
