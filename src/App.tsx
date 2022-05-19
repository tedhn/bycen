import { Route, Routes } from "react-router-dom";
import EditPage from "./Pages/Edit/Edit";
import Home from "./Pages/Home/Home";
import ProcessRegistration from "./Pages/ProcessRegistration/ProcessRegistration";
import ProductList from "./Pages/ProductList/ProductList";

function App() {
  const data = [
    {
      Process: "a",
      Subprocess: [
        { name: "a1", version: [1, 2] },
        { name: "a2", version: [1] },
        { name: "a3", version: [1, 2] },
      ],
    },
    {
      Process: "b",
      Subprocess: [{ name: "b1", version: [1, 2] }],
    },
  ];

  const data2 = [
    { Process: "a", Subprocess: "a1", version: 1, checked: false },
    { Process: "a", Subprocess: "a1", version: 2, checked: false },
    { Process: "a", Subprocess: "a2", version: 1, checked: false },
    { Process: "a", Subprocess: "a3", version: 1, checked: false },
    { Process: "a", Subprocess: "a3", version: 2, checked: false },
    { Process: "a", Subprocess: "a3", version: 3, checked: false },
    { Process: "b", Subprocess: "b1", version: 1, checked: false },
    { Process: "b", Subprocess: "b1", version: 2, checked: false },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ProcessRegistration data={data} />} />
        <Route path="/productlist" element={<ProductList data={data2} />} />
        <Route path="/edit" element={<EditPage data={data2} />} />
      </Routes>
    </div>
  );
}

export default App;
