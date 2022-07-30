import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
  Dashbord, Footer, Hader, MemberCreate, MemberIndex,
  MemberList, MemberUpdate, PriveRoutstHandaler, TaskCreate, TaskIndex,
  TaskList, TaskUpdate
} from './constant/pageContainer';
import urlString from "./constant/urlString";
import Login from "./Pages/Auth/Login";
import ErrorPage from './Pages/ErrorPage';



function App() {

  let { loginStaus } = useSelector(state => state.authData.userInfo)

  return (
    <>
      {loginStaus && <Hader />}
      <Routes>
        <Route path={urlString.LOGIN} element={<Login />} />

        {/* privet route start */}
        <Route path="/" element={<PriveRoutstHandaler />}>
          <Route path={urlString.DASHBORD} element={<Dashbord />} />

          <Route path={urlString.TASK} element={<TaskIndex />}>
            <Route path={urlString.TASK} element={<TaskList />} />
            <Route path={urlString.TASKCREATE} element={<TaskCreate />} />
            <Route path={urlString.TASKUPDATE} element={<TaskUpdate />} />
          </Route>

          <Route path={urlString.MEMEBER} element={<MemberIndex />}>
            <Route path={urlString.MEMEBER} element={<MemberList />} />
            <Route path={urlString.MEMEBERCREATE} element={<MemberCreate />} />
            <Route path={urlString.MEMEBERUPDATE} element={<MemberUpdate />} />
          </Route>
        </Route>
        {/* privet route end */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {loginStaus && <Footer />}
    </>
  );
}

export default App;
