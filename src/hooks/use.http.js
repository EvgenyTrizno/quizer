import { useCallback } from "react"

const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, headers, body});

            if (!response.ok) {
                throw new Error(`Неудалось выполнить запрос по адресу ${url}, статус: ${response.status}`)
            }

            const data = await response.json();

            return await data;
        } catch (e) {
            console.log(e)
        }
    }, []);

    return { request }
}

export default useHttp;