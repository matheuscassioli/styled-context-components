import React, { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';
import { DataContext } from "./DataProvider";

export const ModalUpdateUserContext = createContext();

export const ModalUpdateUserProvider = ({ children }) => {

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [userForUpdate, setUserForUpdate] = useState({})
    const { setResfreshTable } = useContext(DataContext)

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
                toast.success(data.message, {
                    duration: 3000,
                })
                setTimeout(() => {
                    setShowModalUpdateUser(false)
                    setResfreshTable(Math.random())
                }, 1000)
            })
    }

    return (
        <ModalUpdateUserContext.Provider
            value={{ showModalUpdateUser, setShowModalUpdateUser, updateUser, userForUpdate }}>
            {children}
        </ModalUpdateUserContext.Provider>
    );
};