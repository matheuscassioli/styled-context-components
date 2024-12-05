import React, { createContext, useState } from "react";

export const ModalDeleteUserContext = createContext();

export const ModalDeleteUserProvider = ({ children }) => {

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [userForDeleted, setUserForDeleted] = useState({})

    const deleteUser = (isTable = true, user) => {
        if (isTable) {
            setShowModalDeleteUser(true)
            setUserForDeleted(user.id)
            return
        }
        deleteApiUser()
    }

    const deleteApiUser = () => {
        console.warn('chamada para deletar usuario', { id: userForDeleted })
    }

    return (
        <ModalDeleteUserContext.Provider
            value={{ showModalDeleteUser, setShowModalDeleteUser, deleteUser }}>
            {children}
        </ModalDeleteUserContext.Provider>
    );
};