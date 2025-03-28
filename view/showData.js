import getData from "../API/getData.js";

async function showData() {
    const apiData = await getData();
    const div = document.getElementById("container");
    
    apiData.forEach (a => {
        const pe = document.createElement("p");

        pe.innerHTML = a.name;

        div.appendChild(pe);
    });
}

export default showData;