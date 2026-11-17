// Código do favorito "📋 Copiar letra" (usado na página da música no letras.mus.br).
// O app transforma esta função em um link "javascript:" para arrastar à barra de favoritos.
window.COPIAR_LETRA = function () {
  var u = location.href;
  function aviso(msg, cor) {
    var d = document.createElement('div');
    d.textContent = msg;
    d.style.cssText = 'position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:2147483647;' +
      'background:' + cor + ';color:#fff;font:600 18px system-ui,sans-serif;padding:14px 22px;border-radius:12px;' +
      'box-shadow:0 6px 24px rgba(0,0,0,.35)';
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 2600);
  }
  if (!/letras\.mus\.br/.test(location.hostname)) { alert('Abra a página da música no letras.mus.br e clique de novo.'); return; }
  if (/traducao\.html/.test(u)) {
    aviso('Esta é a tradução. Abrindo a letra original… clique no favorito de novo.', '#b7791f');
    setTimeout(function () { location.href = u.replace(/traducao\.html.*$/, ''); }, 900);
    return;
  }
  var box = document.querySelector('.lyric-original');
  if (!box) { aviso('Não achei a letra nesta página.', '#c0392b'); return; }
  var estrofes = [].map.call(box.querySelectorAll('p'), function (p) {
    var c = p.cloneNode(true);
    [].forEach.call(c.querySelectorAll('br'), function (b) { b.replaceWith('\n'); });
    return c.textContent.trim();
  }).filter(Boolean);
  var titulo = ((document.querySelector('h1') || {}).innerText || '').trim();
  var txt = '[letras.mus.br] ' + titulo + '\n' + estrofes.join('\n\n');
  function ok() { aviso('✔ Letra copiada! Volte ao app e toque em Colar.', '#1e8e3e'); }
  function plano_b() {
    var t = document.createElement('textarea'); t.value = txt; document.body.appendChild(t);
    t.select(); document.execCommand('copy'); t.remove(); ok();
  }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, plano_b);
  else plano_b();
};
