import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://127.0.0.1:5000",  // Ensure this matches your Flask server
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpClient;
