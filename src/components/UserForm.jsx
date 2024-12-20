import React, { useState, useEffect } from "react";
import apiService from "../Service/apiService";

export default function UserForm({ onUserAdded, userToEdit, onUserUpdated }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (userToEdit) {
            setName(userToEdit.name);
            setEmail(userToEdit.email);
        }
    }, [userToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = { name, email, password };

        try {
            if (userToEdit) {
                if (!userToEdit._id){
                    console.error('User ID is missing!')
                }
                await apiService.updateUser(userToEdit._id, newUser);
                onUserUpdated(); // Notify parent component of user update
            
            } else {
                await apiService.createUser(newUser);
                onUserAdded(); // Notify parent component of user addition
            }

            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error saving user:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">{userToEdit ? 'Update User' : 'Add User'}</button>
        </form>
    );
}
