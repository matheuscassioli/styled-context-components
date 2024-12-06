import { EditContainerUser, HugTableContainer, TableContainerStyle, TableDivContainer, TrashContainer } from "./TableContainer"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import SubTable from "../SubTable/SubTable";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { ModalDeleteUserContext } from "../../context/ModalDeleteUser";
import { ModalUpdateUserContext } from "../../context/ModalUpdateUser";

const TableContainer = () => {
    const { nameDirector, setNameDirector, dataUser, loading } = useContext(DataContext);
    const { deleteUser } = useContext(ModalDeleteUserContext)
    const { updateUser } = useContext(ModalUpdateUserContext)

    const names = ["Ana", "Carlos", "João", "Maria", "Pedro", "Luiza", "Paula", "Ricardo", "Gabriela", "Felipe"];

    function changeRandomName() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setNameDirector(randomName);
    }

    const returnHeaders = () => {
        return <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado</th>
            <th>País</th>
            <th>Ações</th>
        </tr>
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const renderTrashIcon = user => {
        return <TrashContainer
            onClick={() => deleteUser(true, user)}>
            <FaRegTrashAlt />
        </TrashContainer>
    }

    const renderEditIcon = user => {
        return <EditContainerUser
            onClick={(e) => updateUser(true, user)}>
            <FaUserEdit />
        </EditContainerUser>
    }

    const renderInputCountryDisabled = e => {
        return <input style={{ width: '100px' }} type="text" value="Brasil" disabled />
    }

    return (
        <TableDivContainer>

            <div>Nome salvo estado do contexto: {nameDirector} </div>

            <button onClick={changeRandomName}>Trocar o nome através do contexto</button>


            <SubTable />

            <hr />

            <p>CRUD BÁSICO + CONTEXTOS ENTRE COMPONENTES</p>

            <HugTableContainer loading={loading}>

                {loading && <LoadingSpinner />}

                {!loading && <TableContainerStyle>
                    <thead>
                        {returnHeaders()}
                    </thead>
                    <tbody>
                        {dataUser.map(line => {
                            return <tr key={line.id}>
                                <td>{line.id}</td>
                                <td>{capitalizeFirstLetter(line.name)}</td>
                                <td>{line.age}</td>
                                <td>{capitalizeFirstLetter(line.state)}</td>
                                <td>{renderInputCountryDisabled()}</td>
                                <td>{renderTrashIcon(line)}</td>
                                <td>{renderEditIcon(line)}</td>
                            </tr>
                        })}
                    </tbody>
                </TableContainerStyle>}
            </HugTableContainer>
        </TableDivContainer>
    )
}

export default TableContainer