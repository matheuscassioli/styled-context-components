
import { MainContainer } from "./App"
import ModalContainer from "./components/ModalContainer/ModalContainer.jsx"
import TableContainer from "./components/TableContainer/TableContainer.jsx"
import { DataContextProvider } from "./context/DataProvider.jsx"
import ModalDeleteUser from "./components/ModalDeleteUser/ModalDeleteUser.jsx"
import { ModalDeleteUserProvider } from "./context/ModalDeleteUser.jsx";
import { ModalUpdateUserProvider } from "./context/ModalUpdateUser.jsx";
import ModalUpdateUser from "./components/ModalUpdateUser/ModalUpdateUser.jsx";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <MainContainer>
      <DataContextProvider>
        <ModalDeleteUserProvider>
          <ModalUpdateUserProvider>

            <ModalContainer />
            <TableContainer />
            <ModalDeleteUser />
            <ModalUpdateUser />

            <Toaster
              position="top-center"
              reverseOrder={false}
            />

          </ModalUpdateUserProvider>
        </ModalDeleteUserProvider>
      </DataContextProvider>
    </MainContainer>
  )
}

export default App
