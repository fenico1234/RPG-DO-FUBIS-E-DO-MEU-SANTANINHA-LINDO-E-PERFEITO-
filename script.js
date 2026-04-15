
let decks = [
    {
        nome: "Sistema Arcano",
        cartas: [


{ tipo: "Ácido", codigo: "DUM", categoria: "Característica" },
{ tipo: "Água", codigo: "QUAN", categoria: "Característica" },
{ tipo: "Ar", codigo: "AER", categoria: "Característica" },
{ tipo: "Armas", codigo: "IMPE", categoria: "Característica" },
{ tipo: "Cheiro", codigo: "KAR", categoria: "Característica" },
{ tipo: "Corpo", codigo: "PHYS", categoria: "Característica" },
{ tipo: "Dimensional", codigo: "RAT", categoria: "Característica" },
{ tipo: "Elétrico", codigo: "TRIZ", categoria: "Característica" },
{ tipo: "Emoção", codigo: "BHAS", categoria: "Característica" },
{ tipo: "Escuridão", codigo: "TEN", categoria: "Característica" },
{ tipo: "Fogo", codigo: "IG", categoria: "Característica" },
{ tipo: "Força", codigo: "VIB", categoria: "Característica" },
{ tipo: "Gravidade", codigo: "YM", categoria: "Característica" },
{ tipo: "Idioma", codigo: "HIN", categoria: "Característica" },
{ tipo: "Ilusão", codigo: "ALUI", categoria: "Característica" },
{ tipo: "Loucura", codigo: "MOK", categoria: "Característica" },
{ tipo: "Luz", codigo: "LUM", categoria: "Característica" },
{ tipo: "Magia", codigo: "MAG", categoria: "Característica" },
{ tipo: "Movimento", codigo: "TUM", categoria: "Característica" },
{ tipo: "Munição", codigo: "SAG", categoria: "Característica" },
{ tipo: "Necrótico", codigo: "NECRO", categoria: "Característica" },
{ tipo: "Nojento-Secreção", codigo: "APU", categoria: "Característica" },
{ tipo: "Paladar", codigo: "GUS", categoria: "Característica" },
{ tipo: "Pedra", codigo: "ROC", categoria: "Característica" },
{ tipo: "Radiação", codigo: "CAND", categoria: "Característica" },
{ tipo: "Reflexo-Espelho", codigo: "KAN", categoria: "Característica" },
{ tipo: "Sangue", codigo: "HEM", categoria: "Característica" },
{ tipo: "Som", codigo: "MUL", categoria: "Característica" },
{ tipo: "Sono", codigo: "CYSG", categoria: "Característica" },
{ tipo: "Tecido", codigo: "TUNI", categoria: "Característica" },
{ tipo: "Terra", codigo: "MUN", categoria: "Característica" },
{ tipo: "Velocidade", codigo: "AST", categoria: "Característica" },
{ tipo: "Tempo", codigo: "ANU", categoria: "Característica" },
{ tipo: "Vegetação-Flora", codigo: "ORA", categoria: "Característica" },


{ tipo: "Alterar", codigo: "AL", categoria: "Função" },
{ tipo: "Aprisionar", codigo: "AR", categoria: "Função" },
{ tipo: "Atacar-Ferir", codigo: "IM", categoria: "Função" },
{ tipo: "Atrair-Repelir", codigo: "IR", categoria: "Função" },
{ tipo: "Banir", codigo: "EN", categoria: "Função" },
{ tipo: "Controlar", codigo: "ET", categoria: "Função" },
{ tipo: "Destruir", codigo: "AS", categoria: "Função" },
{ tipo: "Empoderar", codigo: "EM", categoria: "Função" },
{ tipo: "Enfraquecer", codigo: "IN", categoria: "Função" },
{ tipo: "Invocar-Criar", codigo: "EV", categoria: "Função" },
{ tipo: "Juntar-Conectar", codigo: "UN", categoria: "Função" },
{ tipo: "Marcar", codigo: "ES", categoria: "Função" },
{ tipo: "Proteger", codigo: "AM", categoria: "Função" },
{ tipo: "Restaurar", codigo: "AN", categoria: "Função" },
{ tipo: "Revelar", codigo: "IL", categoria: "Função" },
{ tipo: "Transmitir", codigo: "OR", categoria: "Função" },

{ tipo: "Veneno", codigo: "TOX", categoria: "Complemento" },
{ tipo: "Visão", codigo: "OCUL", categoria: "Complemento" },
{ tipo: "Adição", codigo: "AG", categoria: "Complemento" },
{ tipo: "Derivação", codigo: "MUT", categoria: "Complemento" },
{ tipo: "Círculo", codigo: "SAN", categoria: "Complemento" },
{ tipo: "Objeto Genérico", codigo: "SIN", categoria: "Complemento" },
{ tipo: "Parede", codigo: "SAR", categoria: "Complemento" },
{ tipo: "Inerte", codigo: "ITAM", categoria: "Complemento" },
{ tipo: "Maior", codigo: "MOR", categoria: "Complemento" },
{ tipo: "Menor", codigo: "MIN", categoria: "Complemento" },
{ tipo: "Negação", codigo: "NO", categoria: "Complemento" },
{ tipo: "Variação", codigo: "ADA", categoria: "Complemento" },


{ tipo: "Aura", codigo: "IRO", categoria: "Objeto" },
{ tipo: "Cadáver", codigo: "EVA", categoria: "Objeto" },
{ tipo: "Clima", codigo: "AYU", categoria: "Objeto" },
{ tipo: "Comida", codigo: "IBO", categoria: "Objeto" },
{ tipo: "Construção", codigo: "OMU", categoria: "Objeto" },
{ tipo: "Elemento", codigo: "ELI", categoria: "Objeto" },
{ tipo: "Explosão", codigo: "EPI", categoria: "Objeto" },
{ tipo: "Inanimado", codigo: "EXA", categoria: "Objeto" },
{ tipo: "Informação", codigo: "AZI", categoria: "Objeto" },
{ tipo: "Mente-Pensamento", codigo: "IMU", categoria: "Objeto" },
{ tipo: "Pessoa", codigo: "IVI", categoria: "Objeto" },
{ tipo: "Sentidos", codigo: "UNA", categoria: "Objeto" },
{ tipo: "Tecnologia", codigo: "INA", categoria: "Objeto" },
{ tipo: "Terreno", codigo: "ERA", categoria: "Objeto" }

        ]
    }
];



const deckEl = document.getElementById("deck");
const titulo = document.getElementById("titulo");
const inputBusca = document.getElementById("pesquisa");

const montagemEl = document.createElement("div");
montagemEl.id = "montagem";

const resultadosEl = document.createElement("div");
resultadosEl.id = "resultados";

deckEl.appendChild(montagemEl);
deckEl.appendChild(resultadosEl);


let montagemAtual = [];
let cartasSelecionadas = new Set();

titulo.innerText = "Digite para buscar";

function criarCarta(carta) {

    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `
        <div class="inner">
            <div class="frente">
                <div class="categoria">${carta.categoria}</div>
                <div class="codigo">${carta.codigo}</div>
                <div class="tipo">${carta.tipo}</div>
            </div>
        </div>
    `;

    el.onclick = () => adicionarNaMontagem(carta);

    resultadosEl.appendChild(el);
}


function pesquisarCarta(valor) {

    const busca = valor.toLowerCase().trim();
    if (!busca) return;

    resultadosEl.innerHTML = "";
    titulo.innerText = "Resultado da busca";

    const base = decks[0].cartas;

    const resultados = base.filter(c =>
        c.tipo.toLowerCase().includes(busca) ||
        c.codigo.toLowerCase().includes(busca) ||
        c.categoria.toLowerCase().includes(busca)
    );

    if (resultados.length === 0) {
        resultadosEl.innerHTML = `<p style="opacity:0.5">Nenhuma carta encontrada...</p>`;
        return;
    }

    resultados.forEach(criarCarta);
}

inputBusca.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        pesquisarCarta(inputBusca.value);
    }
});

function adicionarNaMontagem(carta) {

    if (cartasSelecionadas.has(carta.codigo)) return;

    montagemAtual.push(carta);
    cartasSelecionadas.add(carta.codigo);

    // 🔥 animação visual na carta clicada
    const cards = document.querySelectorAll(".card");
    cards.forEach(c => {
        if (c.innerText.includes(carta.codigo)) {
            c.classList.add("selecting");

            setTimeout(() => {
                c.classList.remove("selecting");
            }, 450);
        }
    });

    renderMontagem();
}

function removerCarta(codigo) {

    cartasSelecionadas.delete(codigo);
    montagemAtual = montagemAtual.filter(c => c.codigo !== codigo);

    renderMontagem();
}



function renderMontagem() {

    montagemEl.innerHTML = "";

    titulo.innerText =
        montagemAtual.length === 0
            ? "Monte sua carta (0)"
            : `Montagem: ${montagemAtual.length} → ` +
              montagemAtual.map(c => c.codigo).join(" → ");

    montagemAtual.forEach((item) => {

        const el = document.createElement("div");
        el.className = "card selected";

        el.innerHTML = `
            <div class="inner">
                <div class="frente">
                    <div class="categoria">${item.categoria}</div>
                    <div class="codigo">${item.codigo}</div>
                    <div class="tipo">${item.tipo}</div>
                </div>
            </div>
        `;

        el.onclick = () => removerCarta(item.codigo);

        montagemEl.appendChild(el);
    });
}

renderMontagem();