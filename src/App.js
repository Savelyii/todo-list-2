import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ToDoPage from "./pages/ToDoPages";


function App() {
return (
  <BrowserRouter>
  <header>
  <Link to={"/"}>
    Главная
    </Link>
    <Link to={"/about"}>
    Обо мне
    </Link>
  </header>
  <Routes>
    <Route path="/" element={<ToDoPage/>}/>
    <Route path="/about" element={<h1>About</h1>}/>
    <Route path="*" element={
      <>
      <h1>Не найдено</h1>
      <Link to={'/'}>
      На главную
      </Link>
      </>
    }/>
  </Routes>
  </BrowserRouter>
)
};

export default App;
