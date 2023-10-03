import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    email: string;
};

const fetchUsers = async (page: number, limit: number, searchTerm: string): Promise<User[]> => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}&q=${searchTerm}`
    );
    return data;
};

const useUsers = (page: number, limit: number, searchTerm: string) => {
    return useQuery(['users', page, searchTerm], () => fetchUsers(page, limit, searchTerm), {
        keepPreviousData: true,

    });
};

export default useUsers;
