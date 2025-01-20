import React, {useCallback, useMemo, useState} from 'react';
import data from '../../../data/cinemas.json';

import './paginated_page.css';

const DEFAULT_PAGE = 1, DEFAULT_ROWS_PER_PAGE = 5,
    ITEMS_PER_PAGES = [5, 10, 25, 50, 100], CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const PaginatedPage: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<string[]>(data);
    const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
    const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

    const generateRandomString =  useCallback(() => {
        const length = Math.floor(Math.random() * 9) + 2;
        return Array.from({ length }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join('');
    }, []);

    const addNewItem =  useCallback(() => {
        if (inputValue) {
            setItems((prevItems) => [...prevItems, inputValue.trim()]);
            setInputValue('');
        }
    }, [inputValue]);

    const addRandomItem = useCallback(() => {
        setItems((prevItems) => [...prevItems, generateRandomString()]);
    }, [generateRandomString]);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, []);

    const handleItemsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
    }, []);

    const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items.length, itemsPerPage]);
    const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
    const paginatedItems = useMemo(() => items.slice(startIndex, startIndex + itemsPerPage), [items, startIndex, itemsPerPage]);

    return (
        <div className="paginated-page">
            <h4>Здесь вы можете посмотреть список фильмов, а также добавить строки вручную или сгенерировать
                автоматически</h4>
            <input
                type="text"
                placeholder="Enter new item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={addNewItem}>Add Item</button>
            <button onClick={addRandomItem}>Generate Random</button>

            <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
                {ITEMS_PER_PAGES.map((count) => (
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
