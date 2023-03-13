import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Head = () => {
const auth = useContext(AuthContext);
return (
<h1>{auth.email ? 'Login' : 'Wait...'}</h1>
);
};

export default Head;