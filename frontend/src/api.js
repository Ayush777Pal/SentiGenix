import axios from 'axios';

const BASE_URL = "http://127.0.0.1:8000";

export const analyzeSentiment = async (text) => {
    const response = await axios.post(`${BASE_URL}/analyze/`, { text });
    console.log("Analyze API Response:", response); 
    return response.data;
};

export const CreateSentiment = async (anser, selected) => {
    const response = await axios.post(`${BASE_URL}/improve/`, { anser, selected });
    console.log("Improve API Response:", response); 
    return response.data;
};




// import axios from 'axios';

// const API_URL = "http://127.0.0.1:8000/analyze/";

// export const analyzeSentiment = async (text) => {
//     const response = await axios.post(API_URL, { text });
//     console.log("API Response:", response); 
//     return response.data;
// };
// export const CreateSentiment = async (anser ,selected) => {
//     const response = await axios.post(API_URL, { anser, selected });
//     console.log("API Response:", response); 
//     return response.data;
// };
 