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
let p = document.querySelector(".p");
let frases = [
	"O Senhor é o meu pastor, nada me faltará.<br><br> -Salmos 23:1",
	"Tudo posso naquele que me fortalece.<br><br> -Filipenses 4:13",
	"Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo.<br><br> -Salmos 23:4",
	"O meu mandamento é este: amem uns aos outros como eu amo vocês.<br><br> -João 15:12",
	"Nem olhos viram, nem ouvidos ouviram, nem jamais penetrou o coração humano, o que Deus tem preparado para aqueles que O amam.<br><br> -1 Coríntios 2.9",
	"Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.    <br><br> -João 14:6",
	"O choro pode durar uma noite, mas a alegria vem pela manhã.<br><br> -Salmos 30:5.",
	"Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te esforço, e te ajudo, e te sustento com a destra da minha justiça.<br><br> -Isaías 41:10.",
	"Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.<br><br> -Josué 1:9",
	"[O amor] Tudo sofre, tudo crê, tudo espera, tudo suporta. O amor nunca falha; mas havendo profecias, serão aniquiladas; havendo línguas, cessarão; havendo ciência, desaparecerá.<br><br> -1 Coríntios 13:7,8",
	"⁠Deus é o nosso refúgio e a nossa fortaleza, auxílio sempre presente na adversidade.<br><br> -Salmos 46:1",
	"Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.<br><br> -Mateus 18:20",
	"Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.<br><br> -Mateus 11:28",
	"Não amem o mundo nem o que nele há. Se alguém ama o mundo, o amor do Pai não está nele. Pois tudo o que há no mundo — o desejo da carne, o desejo dos olhos e a arrogância da vida — não provém do Pai, mas do mundo. O mundo e os seus maus desejos passam, mas aquele que faz a vontade de Deus permanece para sempre.<br><br> -1 João 2:15-17",
	"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei. Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas. Porque o meu jugo é suave e o meu fardo é leve.<br><br> -Mateus 11:28-30",
];
let button = document.querySelector("button");

function text() {
	const i = Math.floor(Math.random() * frases.length);
	var text = document.querySelector(".frases");

	button.addEventListener("mousedown", () => {
		button.style.transform = "scale(1.03)";
	});
	button.addEventListener("mouseup", () => {
		button.style.transform = "";
		p.innerHTML = frases[i];
	});
}

text();
