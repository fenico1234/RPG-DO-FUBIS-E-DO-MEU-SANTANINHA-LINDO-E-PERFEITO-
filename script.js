/* ================== DECKS ================== */
let decks = [
    {
        nome: "Elementos Básicos",
        cartas: [
            { tipo: "Ácido", codigo: "DUM", funcao: "" },
            { tipo: "Água", codigo: "QUAN", funcao: "" },
            { tipo: "Ar", codigo: "AER", funcao: "" },
            { tipo: "Armas", codigo: "IMPE", funcao: "" }
        ]
    },
    {
        nome: "Corpo / Físico",
        cartas: [
            { tipo: "Cheiro", codigo: "KAR", funcao: "" },
            { tipo: "Corpo", codigo: "PHYS", funcao: "" },
            { tipo: "Dimensional", codigo: "RAT", funcao: "" },
            { tipo: "Elétrico", codigo: "TRIZ", funcao: "" }
        ]
    },
    {
        nome: "Energia / Conceitos",
        cartas: [
            { tipo: "Emoção", codigo: "BHAS", funcao: "" },
            { tipo: "Escuridão", codigo: "TEN", funcao: "" },
            { tipo: "Fogo", codigo: "IG", funcao: "" },
            { tipo: "Força", codigo: "VIB", funcao: "" }
        ]
    },
    {
        nome: "Estados / Abstratos",
        cartas: [
            { tipo: "Gravidade", codigo: "YM", funcao: "" },
            { tipo: "Idioma", codigo: "HIN", funcao: "" },
            { tipo: "Ilusão", codigo: "ALUI", funcao: "" },
            { tipo: "Loucura", codigo: "MOK", funcao: "" }
        ]
    },
    {
        nome: "Luz / Ação",
        cartas: [
            { tipo: "Luz", codigo: "LUM", funcao: "" },
            { tipo: "Magia", codigo: "MAG", funcao: "" },
            { tipo: "Movimento", codigo: "TUM", funcao: "" },
            { tipo: "Munição", codigo: "SAG", funcao: "" }
        ]
    },
    {
        nome: "Matéria / Efeitos",
        cartas: [
            { tipo: "Necrótico", codigo: "NECRO", funcao: "" },
            { tipo: "Nojento-Secreção", codigo: "APU", funcao: "" },
            { tipo: "Paladar", codigo: "GUS", funcao: "" },
            { tipo: "Pedra", codigo: "ROC", funcao: "" }
        ]
    },
    {
        nome: "Fenômenos",
        cartas: [
            { tipo: "Radiação", codigo: "CAND", funcao: "" },
            { tipo: "Reflexo-Espelho", codigo: "KAN", funcao: "" },
            { tipo: "Sangue", codigo: "HEM", funcao: "" },
            { tipo: "Som", codigo: "MUL", funcao: "" }
        ]
    },
    {
        nome: "Mundo Físico",
        cartas: [
            { tipo: "Sono", codigo: "CYSG", funcao: "" },
            { tipo: "Tecido", codigo: "TUNI", funcao: "" },
            { tipo: "Terra", codigo: "MUN", funcao: "" },
            { tipo: "Velocidade", codigo: "AST", funcao: "" }
        ]
    },

    /* ================== NOVOS ================== */

    {
        nome: "Complementos",
        cartas: [
            { tipo: "Veneno", codigo: "TOX", funcao: "" },
            { tipo: "Visão", codigo: "OCUL", funcao: "" },
            { tipo: "Adição", codigo: "AG", funcao: "" },
            { tipo: "Derivação", codigo: "MUT", funcao: "" },
            { tipo: "Círculo", codigo: "SAN", funcao: "" },
            { tipo: "Objeto Genérico", codigo: "SIN", funcao: "" },
            { tipo: "Parede", codigo: "SAR", funcao: "" },
            { tipo: "Inerte", codigo: "ITAM", funcao: "" }
        ]
    },
    {
        nome: "Objetos / Alvos",
        cartas: [
            { tipo: "Aura", codigo: "IRO", funcao: "" },
            { tipo: "Cadáver", codigo: "EVA", funcao: "" },
            { tipo: "Comida", codigo: "IBO", funcao: "" },
            { tipo: "Elemento", codigo: "ELI", funcao: "" },
            { tipo: "Inanimado", codigo: "EXA", funcao: "" },
            { tipo: "Pessoa", codigo: "IVI", funcao: "" },
            { tipo: "Tecnologia", codigo: "INA", funcao: "" },
            { tipo: "Terreno", codigo: "ERA", funcao: "" }
        ]
    },

    {
        nome: "Funções",
        cartas: [
            { tipo: "Alterar", codigo: "AL", funcao: "" },
            { tipo: "Controlar", codigo: "ET", funcao: "" },
            { tipo: "Empoderar", codigo: "EM", funcao: "" },
            { tipo: "Enfraquecer", codigo: "IN", funcao: "" },
            { tipo: "Atacar-Ferir", codigo: "IM", funcao: "" },
            { tipo: "Destruir", codigo: "AS", funcao: "" },
            { tipo: "Banir", codigo: "EN", funcao: "" },
            { tipo: "Atrair-Repelir", codigo: "IR", funcao: "" },
            { tipo: "Juntar-Conectar", codigo: "UN", funcao: "" },
            { tipo: "Transmitir", codigo: "OR", funcao: "" },
            { tipo: "Invocar-Criar", codigo: "EV", funcao: "" },
            { tipo: "Restaurar", codigo: "AN", funcao: "" },
            { tipo: "Proteger", codigo: "AM", funcao: "" },
            { tipo: "Aprisionar", codigo: "AR", funcao: "" },
            { tipo: "Revelar", codigo: "IL", funcao: "" },
            { tipo: "Marcar", codigo: "ES", funcao: "" }
        ]
    }
];
/* ================== CONTROLE ================== */
let deckAtual = 0;
const deckEl = document.getElementById("deck");
const titulo = document.getElementById("titulo");

/* ================== CARTA ================== */
function criarCarta(carta, index = 0, container = deckEl) {

    const el = document.createElement("div");
    el.className = "card";

    /* 🔥 RARIDADE APLICADA */
    el.classList.add(carta.raridade || "comum");

    /* 🔥 FOGO AZUL (ADICIONADO) */
    el.classList.add("fogo");

    el.innerHTML = `
        <div class="inner">
            <div class="face frente">
                <div class="funcao-top">FUNÇÃO ${carta.funcao || ""}</div>
                <div class="codigo">${carta.codigo}</div>
                <div class="tipo">${carta.tipo}</div>
            </div>
            <div class="face verso"></div>
        </div>
    `;

    container.appendChild(el);

    const delay = index * 100;

    /* estado inicial */
    el.style.opacity = "0";
    el.style.transform = "translateY(40px) scale(0.8)";
    el.style.filter = "blur(8px)";

    /* entrada suave */
    setTimeout(() => {
        el.style.transition = "all 0.5s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0) scale(1)";
        el.style.filter = "blur(0)";
    }, delay);

    /* CLICK */
    el.addEventListener("click", (e) => {
        e.stopPropagation();
        abrirZoom(carta);
    });

    /* reveal */
    setTimeout(() => {
        el.classList.add("revelada");
    }, delay + 150);

    /* ================== TILT 3D ================== */
    let rotX = 0;
    let rotY = 0;

    el.addEventListener("mousemove", (e) => {

        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        rotX = y * -10;
        rotY = x * 10;

        el.style.transform = `
            translateY(0)
            scale(1.05)
            perspective(800px)
            rotateX(${rotX}deg)
            rotateY(${rotY}deg)
        `;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = `
            translateY(0)
            scale(1)
            perspective(800px)
            rotateX(0deg)
            rotateY(0deg)
        `;
    });
}

/* ================== ABRIR DECK ================== */
function abrirDeck() {

    if (deckAtual >= decks.length) {
        alert("Todos os decks foram abertos!");
        return;
    }

    deckEl.innerHTML = "";

    const deck = decks[deckAtual];
    titulo.innerText = deck.nome;

    deck.cartas.forEach((carta, i) => {
        criarCarta(carta, i);
    });

    deckAtual++;
}

/* ================== PESQUISA ================== */
function pesquisarCarta(valor) {

    const busca = valor.toLowerCase().trim();

    if (!busca) {
        deckEl.innerHTML = "";
        deckAtual = 0;
        return;
    }

    deckEl.innerHTML = "";
    titulo.innerText = "Resultado da busca";

    if (!isNaN(busca)) {
        const index = parseInt(busca) - 1;

        if (decks[index]) {
            titulo.innerText = `Deck ${busca} - ${decks[index].nome}`;

            decks[index].cartas.forEach((carta, i) => {
                criarCarta(carta, i);
            });
            return;
        }
    }

    let resultados = [];

    decks.forEach(deck => {
        deck.cartas.forEach(carta => {
            if (
                carta.tipo.toLowerCase().includes(busca) ||
                carta.codigo.toLowerCase().includes(busca)
            ) {
                resultados.push(carta);
            }
        });
    });

    if (resultados.length === 0) {
        deckEl.innerHTML = `<p style="opacity:0.5">Nenhuma carta encontrada...</p>`;
        return;
    }

    resultados.forEach((carta, i) => {
        criarCarta(carta, i);
    });
}

/* ================== MODAL ================== */
function abrirZoom(carta) {

    const modal = document.getElementById("modal");

    modal.innerHTML = `
        <div class="zoom-card" onclick="event.stopPropagation()">
            <h2>${carta.codigo}</h2>
            <p>${carta.tipo}</p>
            <p><b>Função:</b> ${carta.funcao || "-"}</p>
        </div>
    `;

    modal.classList.add("ativo");
}

function fecharZoom() {
    document.getElementById("modal").classList.remove("ativo");
}

/* ================== LOOTBOX ================== */
function abrirPack() {

    if (deckAtual >= decks.length) {
        alert("Todos os decks foram abertos!");
        return;
    }

    deckEl.innerHTML = "";
    titulo.innerText = "Abrindo Pack...";

    const deck = decks[deckAtual];
    const cartas = [...deck.cartas].sort(() => Math.random() - 0.5);

    cartas.forEach((carta, i) => {
        setTimeout(() => {
            criarCarta(carta, i);
        }, i * 500);
    });

    deckAtual++;
}

/* ================== ENTER ================== */
const inputBusca = document.getElementById("pesquisa");

if (inputBusca) {
    inputBusca.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const valor = inputBusca.value.trim();

            if (!isNaN(valor) && valor !== "") {
                const index = parseInt(valor) - 1;

                if (decks[index]) {
                    deckAtual = index;
                    deckEl.innerHTML = "";
                    abrirDeck();
                    return;
                }
            }

            pesquisarCarta(valor);
        }
    });
}