import url from "./url.js";

async function getData() {
    try {
        const disneyData = await fetch(url);
        if (!disneyData.ok) {
            throw new Error ("Sorry..", disneyData.status);
        }
        const tranformData = await disneyData.json();
        return tranformData.data

    } catch (error) {
        console.log(error.message)
    }
}

export default getData;