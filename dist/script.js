
async function add() {
    let nom = document.getElementById("kino").value;

    await fetch("/api/kino", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nomi: nom })
    });

    document.getElementById("kino").value = "";
    getKino();
}

async function getKino() {
    let res = await fetch("/api/kino");
    let data = await res.json();

    document.getElementById("list").innerHTML = "";

    data.forEach(k => {
        document.getElementById("list").innerHTML += `
            <li>
                ${k.nomi}
                <button onclick="del(${k.id})">DELETE</button>
            </li>
        `;
    });
}

async function del(id) {
    await fetch("/api/kino/" + id, {
        method: "DELETE"
    });

    getKino();
}

getKino();
