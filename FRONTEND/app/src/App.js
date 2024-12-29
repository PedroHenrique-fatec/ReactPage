import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./Components/Form/formMain";
import Main from './Components/Main/Main';
import RenderAdmin from './Components/Admin/RenderAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/main" element={<Main />} />
        <Route path="/admin" element={<RenderAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
