import axios from "axios"

export default function getPoem(searchTerm) {
    console.log('fetching')
    const path = `https://poetrydb.org/author,random/${searchTerm};1`
    return axios.get(path)
    .then(({ data }) => {
        return new Promise((resolve) => {
            resolve(data[0])
        })
    })
}