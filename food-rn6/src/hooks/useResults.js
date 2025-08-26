import React, { useEffect, useState } from 'react';
import yelp from '../../API/yelp';


export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchAPI = async(searchTerm) => {
     try {
         const params = {
             limit: 50,
             term: searchTerm,
             location: "new york",
         };

        // 🔍 Construct the URL for logging
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = `${yelp.defaults.baseURL}/search?${queryString}`;
        console.log("🌐 Requesting URL:", fullUrl);

        const response = await  yelp.get('/search', { params });
        setResults(response.data.businesses)
     } catch {
        console.error("❌ API Error:", err.message);
        setErrorMessage(err.message)
     }
    };

    useEffect(() => {
       searchAPI('pasta');
    },[]) 
   
    return [searchAPI, results, errorMessage];
}