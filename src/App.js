import Login from "./Pages/Auth/Login";
import { Route, Routes } from 'react-router-dom';
import {
  Dashbord,
  Hader,
  Footer,
  TaskIndex,
  TaskList,
  TaskCreate,
  TaskUpdate,
  MemberIndex,
  MemberList,
  PriveRoutstHandaler,
  MemberCreate,
  MemberUpdate
} from './constant/pageContainer'
import urlString from "./constant/urlString";




function App() {
  return (
    <>
      <Hader />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
