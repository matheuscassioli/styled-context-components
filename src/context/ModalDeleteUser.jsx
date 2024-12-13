import React, { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast';
import { DataContext } from "./DataProvider";

export const ModalDeleteUserContext = createContext();

export const ModalDeleteUserProvider = ({ children }) => {

    const { setResfreshTable } = useContext(DataContext)
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
        fetch('http://localhost/api/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: userForDeleted.id }),
        })
            .then(response => response.json())
            .then(data => {
                toast.success(data.message, {
                    duration: 2000,
                })
                setTimeout(() => {
                    setShowModalDeleteUser(false)
                    setResfreshTable(Math.random())
                }, 1000)
            })
    }

    return (
        <ModalDeleteUserContext.Provider
            value={{ showModalDeleteUser, setShowModalDeleteUser, deleteUser, userForDeleted }}>
            {children}
        </ModalDeleteUserContext.Provider>
    );
};