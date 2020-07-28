const axios = require("axios");

const getRequest = async () => {
    try {
        const resPost = await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            const post = response.data;
            return post;
        })
        const resUser = await axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            const user = response.data;
            return user;
        })
        
        return {
            user: resUser,
            post: resPost,
        }
    } catch {
        console.error(err);
    }
}

(async ()=> {
    const res = await getRequest();
    const post = res.post;
    const user = res.user;
    for (x in user) {
        for (y in post) {
            if (post[y].userId == user[x].id) {
                post[y].user = user[x]
            }
        }
    }
    console.log(post)
})();