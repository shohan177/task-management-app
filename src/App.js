import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
  Dashbord, Footer, Header, MemberCreate, MemberIndex,
  MemberList, MemberUpdate, PrivateRoutetHandler, TaskCreate, TaskIndex,
  TaskList, TaskUpdate
} from './constant/pageContainer';
import urlString from "./constant/urlString";
import Login from "./Pages/Auth/Login";
import ErrorPage from './Pages/ErrorPage';
import TaskDetails from './Pages/User/Task/TaskDetails';



function App() {

  let { loginStaus } = useSelector(state => state.authData.userInfo)

  return (
    <>
      {loginStaus && <Header />}
      <Routes>
        <Route path={urlString.LOGIN} element={<Login />} />

        {/* private route start */}
        <Route path="/" element={<PrivateRoutetHandler />}>
          <Route path={urlString.DASHBORD} element={<Dashbord />} />

          <Route path={urlString.TASK} element={<TaskIndex />}>
            <Route path={urlString.TASK} element={<TaskList />} />
            <Route path={urlString.TASKCREATE} element={<TaskCreate />} />
            <Route path={urlString.TASKUPDATE} element={<TaskUpdate />} />
            <Route path={urlString.TASKDETAILS} element={<TaskDetails />} />
          </Route>

          <Route path={urlString.MEMEBER} element={<MemberIndex />}>
            <Route path={urlString.MEMEBER} element={<MemberList />} />
            <Route path={urlString.MEMEBERCREATE} element={<MemberCreate />} />
            <Route path={urlString.MEMEBERUPDATE} element={<MemberUpdate />} />
          </Route>
        </Route>
        {/* private route end */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {loginStaus && <Footer />}
    </>
  );
}

export default App;
