import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";
import path from "./utils/path";
import { Contact, DashBoard, Home, Layout } from "./pages/";
import { CreateStaff, DetailStaff, UpdateStaff } from "./components";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} limit={3} />
      <Routes>
        <Route path={path.HOMEPAGE} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={path.DETAIL_STAFF} element={<DetailStaff />} />
          <Route path={path.DASHBOARD} element={<DashBoard />} />
          <Route
            path={`${path.DASHBOARD}/${path.CREATE}`}
            element={<CreateStaff />}
          />
          <Route
            path={`${path.DASHBOARD}/${path.UPDATE}`}
            element={<UpdateStaff />}
          />
          <Route path={path.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
