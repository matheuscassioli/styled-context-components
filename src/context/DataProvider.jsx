import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const data =
        [
            { "id": 1, "name": "João", "age": 25, "city": "São Paulo" },
            { "id": 2, "name": "Maria", "age": 30, "city": "Rio de Janeiro" },
            { "id": 3, "name": "Carlos", "age": 22, "city": "Belo Horizonte" },
            { "id": 4, "name": "Ana", "age": 28, "city": "Curitiba" }
        ]


    const [dataUser, setDateUser] = useState(data);
    const [nameDirector, setNameDirector] = useState("Matheus");
    const [showModal, setShowModal] = useState(false)


    return (
        <DataContext.Provider value={{ nameDirector, setNameDirector, setShowModal, showModal, dataUser, setDateUser }}>
            {children}
        </DataContext.Provider>
    );
};