import superagent from 'superagent';

export function fetchService() {
    async function getQuery<T>(path: string): Promise<T> {
        return await superagent
            .get(`http://localhost:8080/api${path}`)
            .then((res) => res.body)
    }

    return { getQuery };
}
