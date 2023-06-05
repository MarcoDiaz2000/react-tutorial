import { Redirect } from 'react-router-dom';

const NotMatch = () => {
  return <Redirect to="/" />
};

export default NotMatch;

/* const NotMatch = () => {
  return (
    <div>
      <p>Not found!</p>
    </div>
  );
};
export default NotMatch; */