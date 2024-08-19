import { fetchService } from '@/components/dataFetching/fetchService';

export function todoService() {
    const { getQuery } = fetchService();

    async function getTodoById(id: string) {
        return await getQuery(`/todos/${id}`);
    }

    return { getTodoById };
}
