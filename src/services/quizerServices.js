import useHttp from "../hooks/use.http";

const _basicUrl = 'http://localhost:3000/data';

const QuizerServices = () => {
    const { request } = useHttp();

    const getQuastions = async () => {
        const data = await request(`${_basicUrl}`);

        return await data.questions;
    };

    const getCategories = async () => {
        const data = await request(`${_basicUrl}`);

        return await data.categories;
    }

    return { getQuastions, getCategories }
}

export default QuizerServices;