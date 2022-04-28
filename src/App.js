import AdminContainer from "./AdminContainer";
import AdminProvider, { AdminContext } from "./context/adminContext";

function App() {
  return (
    <AdminProvider>
      <AdminContainer />
    </AdminProvider>
  );
}

export default App;
