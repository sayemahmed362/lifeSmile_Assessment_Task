'use client'

import React, { useState } from 'react';
import User from '../components/User';
import useUsers from '../hooks/useUsers';
import styles from '../styles/userPage.module.css'

const UsersPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const { data: users, isLoading, isError } = useUsers(page, 3, searchTerm);

    const filteredUsers = users?.filter(user =>

        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>An error occurred.</p>;

    return (
        <div className={styles.container}>{}
            <input
                type="text"
                placeholder="Search by name"
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                }}
            />
            {filteredUsers?.map((user) => (
                <div key={user.id} className={styles.user}>{}
                    <User {...user} />
                </div>
            ))}
            <div>
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                >
                    Previous Page
                </button>
                <button
                    onClick={() => {
                        if (users?.length === 3) {
                            setPage((old) => old + 1);
                        }
                    }}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default UsersPage;

