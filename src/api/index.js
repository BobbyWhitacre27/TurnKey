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

export async function addPhoto(
	postId, photo
) {
    try {
        const res = await fetch(`${APIURL}/photos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
				postId: postId, 
				photo: photo
            }),
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function getAllPhotos() {

    try {
        const res = await fetch(`${APIURL}/photos`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function getPostingsById(id) {

    try {
        const res = await fetch(`${APIURL}/posting/${id}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function getPhotosByPostId(postId) {

    try {
        const res = await fetch(`${APIURL}/photos/${postId}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function deletePost(id) {

    try {
        const res = await fetch(`${APIURL}/posting/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function deletePhoto(id) {

    try {
        const res = await fetch(`${APIURL}/photos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function updateTitle(
    id,
    title
) {
    try {

        const res = await fetch(`${APIURL}/posting/${id}/updatetitle`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function updatePrice(
    id,
    price
) {
    try {

        const res = await fetch(`${APIURL}/posting/${id}/updateprice`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                price: price,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function updateDescription(
    id,
    description
) {
    try {

        const res = await fetch(`${APIURL}/posting/${id}/updatedescription`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
            }),
        });

        const json = res.json();

        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function addComment(
	userId, postId, comment
) {
    try {
        const res = await fetch(`${APIURL}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
				userId: userId,
				postId: postId, 
				comment: comment
            }),
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function deleteComment(id) {

    try {
        const res = await fetch(`${APIURL}/comments/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}

export async function getCommentsByPostId(postId) {

    try {
        const res = await fetch(`${APIURL}/comments/${postId}`);
        const json = await res.json();
        return json;
    } catch (err) {
        console.error(err);
    }
}