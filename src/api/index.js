export const APIURL = `http://localhost:4000/api`;

export const register = async (username, password) => {

    const res = await fetch(`${APIURL}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
			isAdmin: false
        }),
    });
    const json = await res.json();

    return json;
};

export const login = async (username, password) => {
    const res = await fetch(`${APIURL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
        }),
    });
    const json = await res.json();
    return json;
};

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

export async function createPosting(
	userId, title, price, type, date, description
) {
    try {
        const res = await fetch(`${APIURL}/posting`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
				userId: userId, 
				title: title,
				price: price,
				type: type,
				date: date,
				description: description
            }),
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}