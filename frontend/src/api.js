import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/analyze/";

export const analyzeSentiment = async (text) => {
    const response = await axios.post(API_URL, { text });
    console.log("API Response:", response); 
    return response.data;
};
 