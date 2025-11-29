import axios from "axios";

const API = axios.create({
    baseURL:"https://emkc.org/api/v2/piston",
});

export const executeCode = async (sourceCode, language,input) => {
    const response = await API.post("/execute", {
        language,
        version: "*",
        files: [
            { content: sourceCode }
        ],
        stdin: input,
    });
    return response.data;
};
