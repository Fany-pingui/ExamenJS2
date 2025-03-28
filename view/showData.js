import getData from "../API/getData.js";

async function showData() {
    const apiData = await getData();
    const div = document.getElementById("container");
    
    apiData.forEach (a => {
        const pe = document.createElement("p");
        const img = document.createElement("img")

        pe.innerHTML = a.name;
        img.setAttribute("src",a.imageUrl);
        
        pe.appendChild(img);
        div.appendChild(pe);
    });
}

export default showData;