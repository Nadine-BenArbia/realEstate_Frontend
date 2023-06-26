// import React, { useState } from 'react';
// import '../style/Search.css';

// const Search = ({ data }) => {
//   const [search, setSearch] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [matchingResults, setMatchingResults] = useState([]);

//   const handleSearch = () => {
//     const results = data.filter((item) => item.name === search);
//     setMatchingResults(results);
//     setShowDropdown(true);
//   };

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setSearch(inputValue);
//     if (inputValue === '') {
//       setShowDropdown(false);
//       setMatchingResults([]);
//     }
//   };

//   return (
//     <div className="Search">
//       <input
//         type="search"
//         className="Search__input"
//         value={search}
//         onChange={handleInputChange}
//       />
//       <button className="__button" onClick={handleSearch}>
//         Search
//       </button>
//       {showDropdown && (
//         <ul className="Search__dropdown">
//           {matchingResults.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Search;
