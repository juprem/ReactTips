import {todoService} from "@/components/dataFetching/todoService";
import {queryOptions, useQuery} from "@tanstack/react-query";

export const todoKeys = {
    all: ['todo'] as const,
    lists: () => [...todoKeys.all, 'list'] as const,
    list: (search: string) => [...todoKeys.all, 'list', search] as const,
    detail: (id: string) => [...todoKeys.all, id] as const,
};

const getTodoByIdQueryOptions = (id: string) => {
    const { getTodoById } = todoService();

    return queryOptions({
        queryFn: () => getTodoById(id),
        queryKey: todoKeys.detail(id),
    });
};

export function useGetTodo(todoId: string) {
    return useQuery(getTodoByIdQueryOptions(todoId));
}
