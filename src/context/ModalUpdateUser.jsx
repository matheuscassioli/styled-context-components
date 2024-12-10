import React, { createContext, useState } from "react"; 

export const ModalUpdateUserContext = createContext();

export const ModalUpdateUserProvider = ({ children }) => {

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [userForUpdate, setUserForUpdate] = useState({})

    const updateUser = (e, isTable, user) => {
        if (isTable) {
            setShowModalUpdateUser(true)
            setUserForUpdate(user)
            return
        }
        updateUserApi(e, user)
    }

    const updateUserApi = (e, newUser) => {
        fetch('http://localhost/api/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data, 'data')
        
            })
    }

    return (
        <ModalUpdateUserContext.Provider
            value={{ showModalUpdateUser, setShowModalUpdateUser, updateUser, userForUpdate }}>
            {children}
        </ModalUpdateUserContext.Provider>
    );
};