import {useState, useEffect} from 'react';

const useProducts = (method, parameter) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProducts = () => {
            method(parameter).then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return {response, error, loading};
};

export default useProducts;
