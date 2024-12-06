import React, { createContext, useState } from "react";

export const ModalUpdateUserContext = createContext();

export const ModalUpdateUserProvider = ({ children }) => {

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [userForUpdate, setUserForUpdate] = useState({})

    const updateUser = (isTable, user) => {
        if (isTable) {
            setShowModalUpdateUser(true)
            setUserForUpdate(user)
            return
        } 
        console.log()
    }

    const updateUserApi = (e, newUser) => {
        e.preventDefault()
        console.warn('chamada para editar usuario', newUser)
    }

    return (
        <ModalUpdateUserContext.Provider
            value={{ showModalUpdateUser, setShowModalUpdateUser, updateUser, userForUpdate }}>
            {children}
        </ModalUpdateUserContext.Provider>
    );
};