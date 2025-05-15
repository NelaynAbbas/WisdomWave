<<<<<<< HEAD
import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://127.0.0.1:5000",  // Ensure this matches your Flask server
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpClient;
=======
import axios from "axios"

export default axios.create({
    withCredentials: true,
});
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
