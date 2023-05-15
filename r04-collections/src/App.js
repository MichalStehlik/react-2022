import { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import FrontLayout from "./pages"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Create from "./pages/Create"
import NotFound from "./pages/NotFound"

function App() {
  const [data, setData] = useState([
    {firstname: "Alois", lastname: "Anděl"},
    {firstname: "Břetislav", lastname: "Blatný"},
    {firstname: "Ctirad", lastname: "Cvrček"},
  ]);
  const addItem = (f, l) => {
    console.log(f, l);
    setData(prev => ([...prev, {firstname: f, lastname: l}]));
  }
  const removeItem = (index) => {
    setData(prev => {
      let newData = [...prev];
      newData.splice(index,1);
      return newData;
    });
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<FrontLayout />}>
            <Route index element={<Home data={data} removeAction={removeItem} />} />
            <Route path="/create" element={<Create createAction={addItem}/>} />
            <Route path="/:id" element={<Detail data={data} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
