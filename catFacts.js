const catfactText = document.getElementById("catfactText");
const getFactBtn = document.getElementById("getFactBtn")


getFactBtn.addEventListener("click", getCatFact);

async function getCatFact() {
    let url = 'https://catfact.ninja/fact'
    await fetch(url)
        .then(response => response.json())
        .then(data => catfactText.innerText = data.fact
        )
        .catch(error => console.error(error));
}