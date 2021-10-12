import axios from "axios"
export const getGender = async (name) => {
    try {
        const resp = await axios.get(`https://gender-api.com/get?name=${name}&key=PoFZUCygLlZW8DUphJ3M2SFjfLQ8d526J7CN`);
        console.log(resp.data);
        return resp?.data?.gender;;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

