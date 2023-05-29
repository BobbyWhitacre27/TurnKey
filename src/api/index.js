export const APIURL = `http://localhost:4000/api`;

export async function getAllPostings() {

    try {
        const res = await fetch(`${APIURL}/posting`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function getPostingsByType(type) {

    try {
        const res = await fetch(`${APIURL}/posting/${type}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}