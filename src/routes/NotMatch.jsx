import { useNavigate } from 'react-router-dom';

const NotMatch = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};
export default NotMatch;

/*  const NotMatch = () => {
  return (
    <div>
      <p>Not found!</p>
    </div>
  );
};
export default NotMatch; */