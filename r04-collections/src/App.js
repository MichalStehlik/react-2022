import { Route, Routes } from 'react-router-dom'
import FrontLayout from "./pages"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Create from "./pages/Create"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<FrontLayout />}>
            <Route index element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/detail" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
