import React, { useState } from 'react';
import Login from './login';
import Logout from './logout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? <Logout /> : <Login />}
    </div>
  );
};

export default App;
