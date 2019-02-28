const baseUrl = process.env.NODE_ENV === 'production'
    ? "/"
    : "http://localhost:5002/";

const data = {
    getPosts: () => {
        return fetch(`${baseUrl}posts`).then(resp => resp.json());
    }
};

export default data;