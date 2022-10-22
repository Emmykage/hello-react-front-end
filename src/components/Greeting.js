import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getGreeting } from '../redux/greetingReducer';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  return (
    <>
      <div>Greeting</div>
      <p>{greeting}</p>
    </>

  );
};

export default Greeting;
