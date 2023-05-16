import './App.css';
import { Route, Routes } from 'react-router-dom'
import List from "./pages/List"
import Detail from "./pages/Detail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
