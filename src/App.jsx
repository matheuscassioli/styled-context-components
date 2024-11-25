import { useContext } from "react";
import { MainContainer } from "./App"
import ModalContainer from "./components/ModalContainer/ModalContainer.jsx"
import TableContainer from "./components/TableContainer/TableContainer.jsx"
import { DataContextProvider } from "./context/DataProvider.jsx"

function App() {

  return (
    <MainContainer>

      <DataContextProvider>

        <ModalContainer />

        <TableContainer />

      </DataContextProvider>


    </MainContainer>
  )
}

export default App
