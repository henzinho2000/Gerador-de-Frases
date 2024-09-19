function Hours() {
	let span = document.querySelector("span");
	const date = new Date();
	const dateHours = date.getHours();

	if (dateHours < 18 && dateHours > 12) {
		span.innerHTML = "TARDE";
	} else if (dateHours >= 18 && dateHours < 24) {
		span.innerHTML = "NOITE";
	} else {
		span.innerHTML = "MANHÃ";
	}

	
}
Hours();
let frases = [
	"O Senhor é o meu pastor, nada me faltará. -Salmos 23:1",
	"Tudo posso naquele que me fortalece.-Filipenses 4:13",
	"Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo. -Salmos 23:4",
	"O meu mandamento é este: amem uns aos outros como eu amo vocês. -João 15:12",
	"Nem olhos viram, nem ouvidos ouviram, nem jamais penetrou o coração humano, o que Deus tem preparado para aqueles que O amam. -1 Coríntios 2.9",
	"Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim. -João 14:6",
	"O choro pode durar uma noite, mas a alegria vem pela manhã. -Salmos 30:5.",
	"Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te esforço, e te ajudo, e te sustento com a destra da minha justiça. -Isaías 41:10.",
	"Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. -Josué 1:9",
	"[O amor] Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca falha; mas havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá. -1 Coríntios 13:7,8",
	"⁠Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade. -Salmos 46:1",
	"Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles. -Mateus 18:20",
	"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês. -Mateus 11:28",
	"Não amem o mundo nem o que nele há. Se alguém ama o mundo, o amor do Pai não está nele. Pois tudo o que há no mundo — o desejo da carne, o desejo dos olhos e a arrogância da vida — não provém do Pai, mas do mundo. O mundo e os seus maus desejos passam, mas aquele que faz a vontade de Deus permanece para sempre. -1 João 2:15-17",
	"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei. Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas. Porque o meu jugo é suave e o meu fardo é leve. -Mateus 11:28-30",
];
text()
function text() {
	let p = document.querySelector(".p");
	const i = Math.floor(Math.random() * frases.length);
	const button = document.querySelector("button");
	let pa = document.querySelector(".frases");
	let copia = document.querySelector(".copiado");

	button.addEventListener("mousedown", () => {
		button.style.transform = "scale(1.03)";
		button.style.boxShadow = ".5vw .5vw 0vw 0vw rgb(8, 2, 19)";
	});
	button.addEventListener("mouseup", () => {
		button.style.transform = "";
		p.innerHTML = frases[i];
		button.style.boxShadow = "";
	});

	pa.addEventListener("mousedown", () => {
		pa.style.transform = "scale(1.03)";
		pa.style.background = "rgb(33, 164, 248)";
		pa.style.boxShadow = ".5vw .5vw 0vw 0vw rgb(8, 2, 19)";
		navigator.clipboard.writeText(p.innerHTML);
		copia.style.display = "flex";
		copia.style.animation = "1s desaparecer 1s";
		setTimeout(()=>{
			copia.style.display = "none";
		},2000)
	});
	pa.addEventListener("mouseup", () => {
		pa.style.transform = "scale(1)";
		pa.style.background = "";
		pa.style.boxShadow = "";
	});
}
