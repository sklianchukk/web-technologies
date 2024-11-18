import axios from 'axios';

const baseUrl = 'http://localhost:5005';

export const fetchItems = async (searchTerm = '', sortOrder = 'desc', color = '', price = '') => {
    // ми створюємо const response і присвоюємо асинхронну функцію, та чекаємо, коли ми отримаємо дані
    const response = await axios.get(baseUrl + '/api/products', {
        // юзаємо params config option, щоб задати параметри рядлка запиту
        // аналогічно до axios.get('/products?color=black and so on');
        params: {
            search: searchTerm,
            sort: sortOrder === 'asc' ? 'asc' : 'desc',
            color: color,
            price: price,
        },
    });
    return response;
};

export const fetchItemById = async (id) => {
    const response = await axios.get(baseUrl + `/api/products/${id}`);
    return response;
};