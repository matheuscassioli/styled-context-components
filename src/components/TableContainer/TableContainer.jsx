import { TableDivContainer } from "./TableContainer"


const TableContainer = ({ dataJSON }) => {

    console.log(dataJSON, '<---')

    return (
        <TableDivContainer>
            <p>CRUD BÁSICO + CONTEXTOS ENTRE COMPONENTES</p>
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {dataJSON && dataJSON.map(line =>
                        <tr>
                            <td>1</td>
                            <td>João</td>
                            <td>
                                <button /*onClick={handleButtonClick}*/>Clique aqui</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </TableDivContainer>
    )
}

export default TableContainer