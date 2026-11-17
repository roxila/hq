// Setlists prontos. O app acrescenta cada um uma única vez (pelo "chave").
// Se você apagar um no app, ele não volta.
//
// Cada linha dentro de um bloco é uma música:  Música | Artista
// Músicas que ainda não existem no app são criadas sem letra.
window.SETLISTS_PRONTOS = [
  {
    chave: 'eight-kill-vikings-1',
    nome: 'Eight Kill',
    sub: 'Vikings',
    data: '2026-11-18',
    cor: '#7c3aed',
    blocos: [
      { nome: 'Bloco 1', itens: `
Livin' la Vida Loca | Ricky Martin
Footloose | Kenny Loggins
Dancing Queen | ABBA` },
      { nome: 'Bloco 2', itens: `
Gonna Make You Sweat (Everybody Dance Now) | C & C Music Factory
Play That Funky Music | Wild Cherry
Man! I Feel Like A Woman! | Shania Twain
Kiss | Prince
Superstition | Stevie Wonder
Stayin' Alive | Bee Gees
Celebration | Kool & The Gang` },
      { nome: 'Bloco 3', itens: `
Don't Stop 'Til You Get Enough | Michael Jackson
Let's Groove | Earth, Wind & Fire
Got to Be Real | Cheryl Lynn
Le Freak | CHIC
That's the Way (I Like It) | KC & The Sunshine Band` },
      { nome: 'Bloco 4 · Não juntar nenhuma', itens: `
Suspicious Minds | Elvis Presley
Menina Veneno | Ritchie
Será | Legião Urbana
Radio Ga Ga | Queen
I Want To Break Free | Queen` },
      { nome: 'Bloco 5', itens: `
Sweet Dreams (Are Made of This) | Eurythmics
Get Lucky | Daft Punk
Night Fever | Bee Gees
YMCA | Village People
I Want to Know What Love Is | Foreigner
Maniac | Michael Sembello` },
      { nome: 'Bloco Violino', itens: `
I Will Survive | Gloria Gaynor
Sweet Child O' Mine | Guns N' Roses
Back in Black | AC/DC` },
      { nome: 'Bloco 6', itens: `
Olhar 43 | RPM
Erva Venenosa | Rita Lee
Puro Êxtase | Barão Vermelho
O Descobridor Dos Sete Mares | Tim Maia` },
      { nome: 'Final', itens: `
Don't Stop Believin' | Journey
The Best | Tina Turner` },
      { nome: 'Bis · só se precisar', itens: `
Livin' On A Prayer | Bon Jovi` }
    ]
  }
];
