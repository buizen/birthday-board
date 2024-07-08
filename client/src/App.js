import { 
  createBrowserRouter, 
  Route,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

// pages
import Home from './pages/Home';
import Upload from './pages/Upload';
import NotFound from './pages/NotFound';


// layouts
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="birthday-board" element={<Home />} />
    
      <Route path="*" element={<NotFound />} />
      <Route path="upload" element={<Upload />}/>
    </Route>
  )
)

function App() {
  return (
    

  <RouterProvider router={router} />

  );
}

export default App
