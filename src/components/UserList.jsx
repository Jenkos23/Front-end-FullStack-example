import React, { useEffect, useState } from "react";
import apiService from "../Service/apiService";
import UserForm from "./UserForm";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch users
    const fetchUsers = async () => {
        try {
            const data = await apiService.getUsers();
            setUsers(data);
        } catch (error) {
            setError('Failed to fetch users');
        } finally {
            setLoading(false);
        }
    };

    // Fetch users when component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle user addition
    const handleUserAdded = () => {
        setLoading(true); // Set loading state
        fetchUsers(); // Refresh user list after adding
    };

    // Handle user update
    const handleUserUpdated = () => {
        setLoading(true); // Set loading state
        fetchUsers(); // Refresh user list after update
        setCurrentUser(null); // Clear the editing state
    };

    // Handle user deletion
    const handleDeleteUser = async (userId) => {
        try {
            await apiService.deleteUser(userId);
            setLoading(true); // Set loading state
            fetchUsers(); // Refresh user list after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Start editing a user
    const startEditingUser = (user) => {
        setCurrentUser(user); // Set the user to edit
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <UserForm
                onUserAdded={handleUserAdded}
                onUserUpdated={handleUserUpdated}
                userToEdit={currentUser}
            />
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.name} ({user.email})
                        <button onClick={() => startEditingUser(user)}>Edit</button>
                        <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

