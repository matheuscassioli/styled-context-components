import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [dataUser, setDateUser] = useState([]);
    const [nameDirector, setNameDirector] = useState("Matheus");
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
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
                }, 3000)
            })
    }, []);



    return (
        <DataContext.Provider value={{ nameDirector, setNameDirector, setShowModal, showModal, dataUser, setDateUser, loading }}>
            {children}
        </DataContext.Provider>
    );
};