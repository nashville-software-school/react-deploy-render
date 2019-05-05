const baseUrl = process.env.NODE_ENV === 'production'
    ? '/api/'
    : "http://localhost:5002/api/";

const data = {
    getPosts: () => {
        return fetch(`${baseUrl}posts`).then(resp => resp.json());
    }
};

export default data;