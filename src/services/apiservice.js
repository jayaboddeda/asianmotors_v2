import { serverUrl } from "./constants";
const axios = require("axios");

const ApiService = async (endPoint, method = 'get', body) => {
    try {
        const response = await axios({
            method: method,
            url: serverUrl + endPoint, // Fixed the key from 'URL' to 'url'
            headers: {
                'Authorization': "Bearer " + 'JCBW975NFBEP2fL2fwt0b01ms1blC2R8',
                'Content-Type': 'application/json' // Add content type for JSON payloads
            },
            // data: data, // Include the data payload
            data: body
        });
        return response.data;
    } catch (error) {
        return error.response ? error.response.data : error.message; // Provide detailed error feedback
    }
};

const SaveFile = async (data) => {
  try {
      const response = await axios({
          method: 'post',
          url: serverUrl + 'files', // Fixed the key from 'URL' to 'url'
          headers: {
              'Authorization': "Bearer " + 'JCBW975NFBEP2fL2fwt0b01ms1blC2R8',
              'Content-Type': 'multipart/form-data' // Add content type for JSON payloads
          },
          // data: data, // Include the data payload
          data: data
      });
      return response.data;
  } catch (error) {
      return error.response ? error.response.data : error.message; // Provide detailed error feedback
  }
};

const sendLeadData = async (data, car) => {
    // Define the endpoint and headers
    const endpoint = 'https://0b41c762-4548-4122-be0c-004595e00a0a.neodove.com/integration/custom/5ec4df45-1aa5-4f05-93cd-75acffe6816e/leads';
    const headers = {
      'Content-Type': 'application/json',
    };
  
    // Define the body of the request
    const body = {
      name: data?.name,
      mobile: data.phone_number,
      email: "",
      detail: car,
      detail2: "",
    };
  
    try {
      // Send POST request using axios
      const response = await axios.post(endpoint, body, { headers });
      return(response.data);
    } catch (error) {
      // Handle any errors
      console.error('Error:', error.response?.data || error.message);
    }
  };
  
  // Call the function to send data

export {ApiService, sendLeadData, SaveFile};
