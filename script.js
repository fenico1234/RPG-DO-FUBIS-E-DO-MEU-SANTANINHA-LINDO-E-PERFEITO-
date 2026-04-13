// ================== JSON COMPLETO ==================
let decks = [
    {
        nome: "Elementos Básicos",
        cartas: [
            { tipo: "Ácido", codigo: "DUM" },
            { tipo: "Água", codigo: "QUAN" },
            { tipo: "Ar", codigo: "AER" },
            { tipo: "Armas", codigo: "IMPE" }
        ]
    },
    {
        nome: "Corpo / Físico",
        cartas: [
            { tipo: "Cheiro", codigo: "KAR" },
            { tipo: "Corpo", codigo: "PHYS" },
            { tipo: "Dimensional", codigo: "RAT" },
            { tipo: "Elétrico", codigo: "TRIZ" }
        ]
    },
    {
        nome: "Energia / Conceitos",
        cartas: [
            { tipo: "Emoção", codigo: "BHAS" },
            { tipo: "Escuridão", codigo: "TEN" },
            { tipo: "Fogo", codigo: "IG" },
            { tipo: "Força", codigo: "VIB" }
        ]
    },
    {
        nome: "Estados / Abstratos",
        cartas: [
            { tipo: "Gravidade", codigo: "YM" },
            { tipo: "Idioma", codigo: "HIN" },
            { tipo: "Ilusão", codigo: "ALUI" },
            { tipo: "Loucura", codigo: "MOK" }
        ]
    },
    {
        nome: "Luz / Ação",
        cartas: [
            { tipo: "Luz", codigo: "LUM" },
            { tipo: "Magia", codigo: "MAG" },
            { tipo: "Movimento", codigo: "TUM" },
            { tipo: "Munição", codigo: "SAG" }
        ]
    },
    {
        nome: "Matéria / Efeitos",
        cartas: [
            { tipo: "Necrótico", codigo: "NECRO" },
            { tipo: "Nojento-Secreção", codigo: "APU" },
            { tipo: "Paladar", codigo: "GUS" },
            { tipo: "Pedra", codigo: "ROC" }
        ]
    },
    {
        nome: "Fenômenos",
        cartas: [
            { tipo: "Radiação", codigo: "CAND" },
            { tipo: "Reflexo-Espelho", codigo: "KAN" },
            { tipo: "Sangue", codigo: "HEM" },
            { tipo: "Som", codigo: "MUL" }
        ]
    },
    {
        nome: "Mundo Físico",
        cartas: [
            { tipo: "Sono", codigo: "CYSG" },
            { tipo: "Tecido", codigo: "TUNI" },
            { tipo: "Terra", codigo: "MUN" },
            { tipo: "Velocidade", codigo: "AST" }
        ]
    }
];

// ================== CONTROLE ==================
let deckAtual = 0;

const deckEl = document.getElementById("deck");
const titulo = document.getElementById("titulo");

// ================== ABRIR DECK ==================
function abrirDeck() {

    if (deckAtual >= decks.length) {
        alert("Todos os decks foram abertos!");
        return;
    }

    deckEl.innerHTML = "";

    const deck = decks[deckAtual];
    titulo.innerText = deck.nome;

    deck.cartas.forEach((carta, i) => {
        setTimeout(() => {
            criarCarta(carta);
        }, i * 400);
    });

    deckAtual++;
}

// ================== CRIAR CARTA ==================
function criarCarta(carta) {

    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `
        <div class="inner">
            <div class="face frente">
                <div class="codigo">${carta.codigo}</div>
                <div class="tipo">${carta.tipo}</div>
            </div>
            <div class="face verso"></div>
        </div>
    `;

    el.onclick = () => abrirZoom(carta);

    deckEl.appendChild(el);

    setTimeout(() => {
        el.classList.add("revelada");
    }, 100);
}

// ================== ZOOM ==================
function abrirZoom(carta) {
    const modal = document.getElementById("modal");

    modal.innerHTML = `
        <div style="
            width:300px;
            height:420px;
            background:#111;
            border:3px solid gold;
            border-radius:16px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            color:white;
        ">
            <h2>${carta.codigo}</h2>
            <p>${carta.tipo}</p>
        </div>
    `;

    modal.classList.add("ativo");
}

function fecharZoom() {
    document.getElementById("modal").classList.remove("ativo");
}

// ================== INICIAR ==================
window.onload = () => {
    abrirDeck(); // 🔥 já abre o primeiro deck
};