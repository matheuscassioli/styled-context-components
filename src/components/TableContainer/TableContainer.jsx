import { EditContainerUser, HugTableContainer, TableContainerStyle, TableDivContainer, TrashContainer } from "./TableContainer"
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import SubTable from "../SubTable/SubTable";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbUserEdit } from "react-icons/tb";

const TableContainer = () => {
    const { nameDirector, setNameDirector, dataUser, loading } = useContext(DataContext);

    const names = ["Ana", "Carlos", "João", "Maria", "Pedro", "Luiza", "Paula", "Ricardo", "Gabriela", "Felipe"];

    function changeRandomName() {
        const randomName = names[Math.floor(Math.random() * names.length)];
        setNameDirector(randomName);
    }

    const returnHeaders = () => {
        return <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const renderTrashIcon = user => {
        return <TrashContainer
            onClick={(e) => window.alert(`Tem certeza que deseja deletar o usuário ${user.name}?`)}>
            <FaRegTrashAlt />
        </TrashContainer>
    }

    const renderEditIcon = user => {
        return <EditContainerUser
            onClick={(e) => window.alert(`Tem certeza que editar deletar o usuário ${user.name}?`)}>
            <TbUserEdit />
        </EditContainerUser>
    }



    return (
        <TableDivContainer>

            <div>Nome salvo estado do contexto: {nameDirector} </div>

            <button onClick={changeRandomName}>Trocar o nome através do contexto</button>

            <hr />

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
                                <td>{capitalizeFirstLetter(line.city)}</td>
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