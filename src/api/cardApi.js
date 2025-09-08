import axios from "axios";

export const getAllTodos = async () => {
    const res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
        {
            params: {
            },
        }
    )
 
    return res.data;
}