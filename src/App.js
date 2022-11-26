import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Common/Routes';

function App() {
  return (
    <div className="App max-w-full lg:max-w-[1600px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
