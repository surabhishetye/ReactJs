import React, { useState, useEffect } from 'react';

// const SearchFilterWithDebounce = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredItems, setFilteredItems] = useState([]);
//   const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Peach', 'Grapes'];

//   const handleSearch = () => {
//     const filtered = items.filter((item) =>
//       item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(filtered);
//   };

//   // Simple debounce
//   const debounce = () => {
//     let timer;
//     return () => {
//       clearTimeout(timer);
//       timer = setTimeout(handleSearch, 500);
//     };
//   };

//   const debouncedSearch = debounce();

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//     debouncedSearch();  // Call debounce function
//   };

//   useEffect(() => {
//     // Initially show all items
//     setFilteredItems(items);
//   }, []);

//   return (
//     <div>
//       <h2>Search Filter with Debounce</h2>
//       <input
//         type="text"
//         placeholder="Search items"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>No items found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

const SearchWithDebounce = () => {
    const [searchWord, setSearchWord] = useState('')
    const [filteredList, setFilteredList] =useState([])
    const list = ['Apple', 'Grapes', 'Chickoo', 'Kiwi', 'Orange', 'Pomogranate']

    useEffect(() => {
        setFilteredList(list)
    }, [])

    const handleSearch = (e) => {
        const { value } = e.target
        setSearchWord(value)


        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            const filtered = list.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            setFilteredList(filtered)
        }, 500)

       

    }

    return (
        <>
        <label>Type to search...</label>
            <input 
                name='text'
                value={searchWord}
                onChange={handleSearch}
            />
            <div>
                 {filteredList.map((item, index) => (
                <li>{item}</li>
            ))}
            </div>
           
        </>
    )
}

export default SearchWithDebounce;
