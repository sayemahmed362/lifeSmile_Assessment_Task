import React from 'react';

type UserProps = {
    id: number;
    name: string;
    email: string;
};

const User: React.FC<UserProps> = ({ id, name, email }) => {
    return (
        <div>

            <h3>{name}</h3>
            <p>{email}</p>

        </div>
    );
};

export default User;
