import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [nameDirector, setNameDirector] = useState("Matheus");
    const [showModal, setShowModal] = useState(false)

    return (
        <DataContext.Provider value={{ nameDirector, setNameDirector, setShowModal, showModal }}>
            {children}
        </DataContext.Provider>
    );
};