// Mantém o bloco "Mais recente do blog" da home sempre igual ao primeiro
// card de blog.html, sem precisar editar o index.html a cada post novo.
// Se a busca falhar (JS desligado, erro de rede), o card estático que já
// está no HTML continua visível, então a seção nunca fica vazia.
(function () {
  var bloco = document.getElementById('post-destaque');
  if (!bloco) return;

  fetch('blog.html')
    .then(function (resposta) { return resposta.text(); })
    .then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var card = doc.querySelector('.grade .card');
      if (!card) return;

      var titulo = card.querySelector('h3');
      var texto = card.querySelector('p');
      var link = card.querySelector('a.leia');
      if (!titulo || !texto || !link) return;

      var href = link.getAttribute('href');
      if (!href) return;

      var tituloLink = bloco.querySelector('h3 a');
      var paragrafo = bloco.querySelector('p');
      var botaoLeia = bloco.querySelector('a.leia');

      if (tituloLink) {
        tituloLink.textContent = titulo.textContent;
        tituloLink.setAttribute('href', href);
      }
      if (paragrafo) paragrafo.textContent = texto.textContent;
      if (botaoLeia) botaoLeia.setAttribute('href', href);
    })
    .catch(function () {
      // Falha silenciosa: mantém o post em destaque estático já presente no HTML.
    });
})();
