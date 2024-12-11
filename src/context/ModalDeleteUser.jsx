import React, { createContext, useState } from "react";

export const ModalDeleteUserContext = createContext();

export const ModalDeleteUserProvider = ({ children }) => {

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [userForDeleted, setUserForDeleted] = useState({})

    const deleteUser = (isTable = true, user) => {
        if (isTable) {
            setShowModalDeleteUser(true)
            setUserForDeleted(user)
            return
        }
        deleteApiUser()
    }

    const deleteApiUser = () => {
        console.warn('chamada para deletar usuario', { id: userForDeleted.id })

        fetch('http://localhost/api/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: userForDeleted.id }),
        })
            .then(response => {
                console.log(response)
                response.json()
            })
            .then(data => {
                console.warn(data)
            })
    }

    return (
        <ModalDeleteUserContext.Provider
            value={{ showModalDeleteUser, setShowModalDeleteUser, deleteUser, userForDeleted }}>
            {children}
        </ModalDeleteUserContext.Provider>
    );
};