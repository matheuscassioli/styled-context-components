import { useContext } from "react";
import { MainContainer } from "./App"
import ModalContainer from "./components/ModalContainer/ModalContainer.jsx"
import TableContainer from "./components/TableContainer/TableContainer.jsx"
import { DataContextProvider } from "./context/DataProvider.jsx"
import ModalDeleteUser from "./components/ModalDeleteUser/ModalDeleteUser.jsx"
import { ModalDeleteUserProvider } from "./context/ModalDeleteUser.jsx";
import { ModalUpdateUserProvider } from "./context/ModalUpdateUser.jsx";
import ModalUpdateUser from "./components/ModalUpdateUser/ModalUpdateUser.jsx";

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

          </ModalUpdateUserProvider>
        </ModalDeleteUserProvider>
      </DataContextProvider>
    </MainContainer>
  )
}

export default App
