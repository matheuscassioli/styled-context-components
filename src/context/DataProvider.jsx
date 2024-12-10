import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [dataUser, setDateUser] = useState([]);
    const [nameDirector, setNameDirector] = useState("Matheus");
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [resfreshTable, setResfreshTable] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost/api/index.php')
            .then(response => response.json())
            .then(json => {
                setDateUser(json)
            })
            .catch(err => {
                console.error('Erro:', err)
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
            })
    }, [resfreshTable]);

    const statesList = [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará",
        "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão",
        "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará",
        "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
        "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
        "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
    ];


    return (
        <DataContext.Provider value={{ statesList, nameDirector, setResfreshTable, resfreshTable, setNameDirector, setShowModal, showModal, dataUser, setDateUser, loading, setLoading }}>
            {children}
        </DataContext.Provider>
    );
};