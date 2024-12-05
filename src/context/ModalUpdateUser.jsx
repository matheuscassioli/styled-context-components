import React, { createContext, useState } from "react";

export const ModalUpdateUserContext = createContext();

export const ModalUpdateUserProvider = ({ children }) => {

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

    const [userForUpdate, setUserForUpdate] = useState({})

    const updateUser = (isTable = true, user) => {
        if (isTable) {
            setShowModalUpdateUser(true)
            setUserForUpdate(user.id)
            return
        }
        updateUserApi()
    }

    const updateUserApi = () => {
        console.warn('chamada para editar usuario', { id: userForUpdate })
    }

    return (
        <ModalUpdateUserContext.Provider
            value={{ showModalUpdateUser, setShowModalUpdateUser, updateUser }}>
            {children}
        </ModalUpdateUserContext.Provider>
    );
};