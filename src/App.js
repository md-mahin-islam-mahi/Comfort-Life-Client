import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Common/Routes';

function App() {
  return (
    <div className="App max-w-[1440px] lg:max-w-[1800px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
