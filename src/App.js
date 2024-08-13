import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Jobseeker from './pages/Jobseeker';
import Employer from './pages/Employer';

import { useRecoilState } from 'recoil';
import userInfo from './recoil/userInfo';
import infoUser from './recoil/infoUser';

function App() {
  const [usernameInfo, setUsernameInfo] = useRecoilState(userInfo);
  const [infoUsername, setInfoUsername] = useRecoilState(infoUser);


  let renderComponent;

  if (!usernameInfo && !infoUsername) {
    renderComponent = <Home />;
  } else if (usernameInfo && !infoUsername) {
    renderComponent = <Jobseeker />;
  } else if (infoUsername && !usernameInfo) {
    renderComponent = <Employer />;
  } else {
    renderComponent = <Navigate to="/" />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={renderComponent} />
        <Route path="/jobseeker" element={renderComponent} />
        <Route path="/employer" element={renderComponent} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
export default App
