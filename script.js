// ==========================
// ELAINE CAKE'S
// Script Principal
// ==========================

// Mensagem de carregamento

window.addEventListener("load", () => {

    console.log("🍰 Elaine Cake's carregado com sucesso!");

});

// ==========================
// ANIMAÇÃO DE APARECIMENTO
// ==========================

const elementos = document.querySelectorAll(
    ".produto, .evento-card, .review, .outros-grid div"
);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

elementos.forEach(el => observer.observe(el));

// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";

btnTopo.classList.add("btn-topo");

document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTopo.classList.add("ativo");

    }else{

        btnTopo.classList.remove("ativo");

    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// ==========================
// MENU ATIVO
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("menu-ativo");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("menu-ativo");

        }

    });

});

// ==========================
// CONTADOR DE CLIENTES
// ==========================

const contador = document.createElement("section");

contador.classList.add("contador-clientes");

contador.innerHTML = `

<h2>💕 Mais de</h2>

<h1 id="numeroClientes">0</h1>

<p>Clientes satisfeitos</p>

`;

const avaliacoes = document.querySelector(".avaliacoes");

if(avaliacoes){

    avaliacoes.before(contador);

}

let iniciado = false;

function animarContador(){

    const numero = document.getElementById("numeroClientes");

    let valor = 0;

    const alvo = 500;

    const intervalo = setInterval(() => {

        valor += 5;

        numero.textContent = valor + "+";

        if(valor >= alvo){

            clearInterval(intervalo);

        }

    },10);

}

window.addEventListener("scroll", () => {

    const secao = document.querySelector(".contador-clientes");

    if(!secao) return;

    const posicao = secao.getBoundingClientRect().top;

    if(posicao < window.innerHeight && !iniciado){

        iniciado = true;

        animarContador();

    }

});

// ==========================
// EFEITO PARALLAX HERO
// ==========================

window.addEventListener("scroll", () => {

    const heroImg = document.querySelector(".hero-img img");

    if(heroImg){

        let scroll = window.pageYOffset;

        heroImg.style.transform =
        `translateY(${scroll * 0.08}px)`;

    }

});

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

document.querySelectorAll(".produto").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

// ==========================
// DATA AUTOMÁTICA NO FOOTER
// ==========================

const footer = document.querySelector("footer");

if(footer){

    const ano = document.createElement("p");

    ano.innerHTML =
    `© ${new Date().getFullYear()} Elaine Cake's`;

    ano.style.marginTop = "15px";

    footer.appendChild(ano);

}

// ==========================
// ESTILOS CRIADOS PELO JS
// ==========================

const style = document.createElement("style");

style.innerHTML = `

.produto,
.evento-card,
.review,
.outros-grid div{

opacity:0;
transform:translateY(40px);

transition:.8s;

}

.show{

opacity:1 !important;
transform:translateY(0) !important;

}

.btn-topo{

position:fixed;

left:25px;
bottom:25px;

width:55px;
height:55px;

border:none;

border-radius:50%;

background:#6B4554;

color:white;

font-size:25px;

cursor:pointer;

opacity:0;
pointer-events:none;

transition:.3s;

z-index:999;

}

.btn-topo.ativo{

opacity:1;
pointer-events:auto;

}

.menu-ativo{

background:#6B4554 !important;
color:white !important;

}

.contador-clientes{

padding:100px 20px;

text-align:center;

background:white;

}

.contador-clientes h2{

font-size:2rem;
color:#6B4554;

}

.contador-clientes h1{

font-size:5rem;

margin:15px 0;

color:#B88498;

}

.contador-clientes p{

font-size:1.2rem;

color:#666;

}

`;

document.head.appendChild(style);

// ==========================
// FIM
// ==========================

console.log("🧁 Animações iniciadas!");
const form = document.getElementById("formAvaliacao");

const lista =
document.getElementById("listaAvaliacoes");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const mensagem =
    document.getElementById("mensagem").value;

    const avaliacao =
    document.createElement("div");

    avaliacao.classList.add("avaliacao-item");

    avaliacao.innerHTML = `
        <h3>${nome}</h3>
        <p>${mensagem}</p>
    `;

    lista.prepend(avaliacao);

    form.reset();

});