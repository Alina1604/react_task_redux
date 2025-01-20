import React, { useState, useEffect } from 'react';
import data from '../../data/cinemas.json';


// useCallback нужно использовать для всех методов комопнента

const PaginatedPage: React.FC = () => {
    // семантически все же лучше использовать inputValue, 
    // потому что бывают такие случаи, когда в переменной не значением, а ссылка на HTML-элемент
    const [input, setInput] = useState('');
    const [items, setItems] = useState<string[]>([]);

    // значениям по умолчанию принято выделять в отдельные переменные и записывать их большими бвквами, 
    // например const DEFAULT_PAGE = 1, DEFAULT_ROWS_PER_PAGE = 5.
    // Выносить за рамки функции компонента.
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);


    // лишний useEffect, т.к. здесь происходит только инициализация стейта уже известными значениями
    // в таком случае можно объявить const [items, setItems] = useState<string[]>(data);
    useEffect(() => {

        setItems(data);
    }, []);

    const generateRandomString = () => {

        // константа, вынести за рамки фнукционального компонента
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        // вычисление (10 - 2 + 1) можно упростить, не вижу необходимости +- операции разбивать на слагаемые
        const length = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    };

    const addNewItem = () => {
        // избыточное использование .trim(), можно сразу в setInput это делать

        if (input.trim()) {
            setItems([...items, input.trim()]);
            setInput('');
        }
    };

    const addRandomItem = () => {
        setItems([...items, generateRandomString()]);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    };


    // необходимо вычислимые значения оборачивать в useMemo()
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="paginated-page">
            <h4>Здесь вы можете посмотреть список фильмов, а также добавить строки вручную или сгенерировать
                автоматически</h4>
            <input
                type="text"
                placeholder="Enter new item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />


            <button onClick={addNewItem}>Add Item</button>
            <button onClick={addRandomItem}>Generate Random</button>

            <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                {/* [5, 10, 25, 50, 100] можно вынести в константы */}
                {[5, 10, 25, 50, 100].map((count) => (
                    <option key={count} value={count}>{count} per page</option>
                ))}
            </select>

            <ul>
                {paginatedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div>
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                </button>

                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        // отсутствуют стили для селектора 'active'
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedPage;
