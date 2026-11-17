// Repertório inicial (tirado das playlists). Formato: "Música | Artista".
// Na primeira vez que o app abre, estas músicas entram na lista (sem letra)
// e cada playlist vira um setlist na mesma ordem.
window.SEED = {
  instrumentais: [],
  setlists: [
    { name: 'Repertório 1', songs: `
Livin' On A Prayer | Bon Jovi
I Love Rock 'N Roll | Joan Jett & the Blackhearts
Clube Dos Canalhas | Matanza
Song 2 | Blur
Take on Me | a-ha
Come Together | The Beatles
I Was Made For Lovin' You | KISS
House of the Rising Sun | The Animals
Reptilia | The Strokes
Happier Than Ever | Billie Eilish
Paranoid | Black Sabbath
Perfect Strangers | Deep Purple
Breathe (In the Air) | Pink Floyd
Cocaine | Eric Clapton
Still Loving You | Scorpions
Are You Gonna Be My Girl | Jet
Whole Lotta Love | Led Zeppelin
T.N.T. | AC/DC
Seven Nation Army | The White Stripes
Hold the Line | TOTO
Comfortably Numb | Pink Floyd
La Grange | ZZ Top
Simple Man | Lynyrd Skynyrd
Hit the Road Jack | Ray Charles
Crazy Little Thing Called Love | Queen
Jailhouse Rock | Elvis Presley
Johnny B. Goode | Chuck Berry
Hound Dog | Elvis Presley
One After 909 | The Beatles
I Want To Break Free | Queen
Roadhouse Blues | The Doors
Wish You Were Here | Pink Floyd
Maniac | Michael Sembello
Carry on Wayward Son | Kansas
Smoke on the Water | Deep Purple
Born To Be Wild | Steppenwolf
Highway to Hell | AC/DC
Será | Legião Urbana
Tempo Perdido | Legião Urbana
Metamorfose Ambulante | Raul Seixas
Sweet Home Alabama | Lynyrd Skynyrd
Losing My Religion | R.E.M.
Have You Ever Seen The Rain | Creedence Clearwater Revival
I Want To Hold Your Hand | The Beatles
I've Just Seen A Face | The Beatles
Pride and Joy | Stevie Ray Vaughan
In My Life | The Beatles
More Than Words | Extreme
Love Of My Life | Queen
It's a Heartache | Bonnie Tyler
Malandragem | Cássia Eller
(I Can't Get No) Satisfaction | The Rolling Stones
Wicked Game | Chris Isaak
Don't Let Me Down | The Beatles
Help! | The Beatles
I Don't Want to Talk About It | Rod Stewart
Hotel California | Eagles
People Are Strange | The Doors
This Charming Man | The Smiths
Time | Pink Floyd
Creep | Radiohead
Primeiros Erros (Chove) | Capital Inicial
Holy Diver | Dio
Walk This Way | Aerosmith
Another Brick in the Wall, Pt. 1 | Pink Floyd
The Happiest Days of Our Lives | Pink Floyd
Another Brick in the Wall, Pt. 2 | Pink Floyd
Everybody Wants To Rule The World | Tears For Fears
Stayin' Alive | Bee Gees
Malandragem | Cássia Eller
Tédio | Biquini Cavadão
You Give Love A Bad Name | Bon Jovi
Rehab | Amy Winehouse
Get Lucky | Daft Punk
Blue Suede Shoes | Elvis Presley
Oh, Pretty Woman | Roy Orbison
Twist And Shout | The Beatles
Heartbreak Hotel | Elvis Presley
Stand By Me | Ben E. King
Dancing Queen | ABBA
I'm A Believer | Smash Mouth
Don't You (Forget About Me) | Simple Minds
Stayin' Alive | Bee Gees
Night Fever | Bee Gees
Girls Just Want to Have Fun | Cyndi Lauper
Gimme! Gimme! Gimme! (A Man After Midnight) | ABBA
Suedehead | Morrissey
Beat It | Michael Jackson
Pump It | Black Eyed Peas
Footloose | Kenny Loggins
La Bamba | Los Lobos
Your Love | The Outfield
What Is Love | Haddaway
Sweet Dreams (Are Made of This) | Eurythmics
I Will Survive | Gloria Gaynor
Sweet Child O' Mine | Guns N' Roses
Mulher de Fases | Raimundos
Whisky a Go-Go | Roupa Nova
Que País É Este | Legião Urbana
Rock You Like A Hurricane | Scorpions
Wind Of Change | Scorpions
Send Me An Angel | Scorpions
When The Smoke Is Going Down | Scorpions
No One Like You | Scorpions
Always Somewhere | Scorpions
Big City Nights | Scorpions
This Time | Scorpions
The Zoo | Scorpions
The Sails of Charon | Scorpions
Holiday | Scorpions
Humanity | Scorpions
Blackout | Scorpions
Restless Nights | Scorpions
Hit Between The Eyes | Scorpions
We Built This House | Scorpions
Dream On | Aerosmith
I Don't Want To Miss A Thing | Aerosmith
Crazy | Aerosmith
Sweet Emotion | Aerosmith
Jaded | Aerosmith
Rag Doll | Aerosmith
Hole In My Soul | Aerosmith
Cryin' | Aerosmith
Pink | Aerosmith
Angel | Aerosmith
Same Old Song and Dance | Aerosmith
Eyesight To The Blind | Aerosmith
It's a Long Way to the Top (If You Wanna Rock 'n' Roll) | AC/DC
Piece of My Heart | Janis Joplin (Big Brother & The Holding Company)
Rock and Roll | Led Zeppelin
Hit Me With Your Best Shot | Pat Benatar
Slow Ride | Foghat
Even Flow | Pearl Jam
Sunshine Of Your Love | Cream
School's Out | Alice Cooper
Black Dog | Led Zeppelin
Mississippi Queen | Mountain
Take Me Out | Franz Ferdinand
Use Somebody | Kings of Leon
Ruby | Kaiser Chiefs
Sex on Fire | Kings of Leon
La Grange | ZZ Top
Welcome To The Jungle | Guns N' Roses
Iron Man | Black Sabbath
War Pigs | Black Sabbath
The Trooper | Iron Maiden
The Metal | Tenacious D
Killing In The Name | Rage Against The Machine
Ace of Spades | Motörhead
Rock And Roll All Nite | KISS
Beautiful Girls | Sean Kingston
Anna Júlia | Los Hermanos
À Sua Maneira | Capital Inicial
Don't Look Back in Anger | Oasis
Zombie | The Cranberries
Um Minuto Para O Fim Do Mundo | CPM 22
Ainda É Cedo | Legião Urbana
Admirável Chip Novo | Pitty
Vira-Vira | Mamonas Assassinas
Uma Arlinda Mulher | Mamonas Assassinas
Chopis Centis | Mamonas Assassinas
She Loves You | The Beatles
Feeling Good | Michael Bublé
All My Loving | The Beatles
Crazy | Gnarls Barkley
Exagerado | Cazuza
Cowboy Fora Da Lei | Raul Seixas
Maluco Beleza | Raul Seixas
Oh! Darling | The Beatles
Love Me Do | The Beatles
Every Breath You Take | The Police
Maneater | Daryl Hall & John Oates
Black | Pearl Jam
Billie Jean | Michael Jackson
Estúpido Cupido | Celly Campello
Banho De Lua (Tintarella Di Luna) | Celly Campello` },
    { name: 'Repertório 2', songs: `
Livin' la Vida Loca | Ricky Martin
Footloose | Kenny Loggins
Dancing Queen | ABBA
Gonna Make You Sweat (Everybody Dance Now) | C & C Music Factory
Play That Funky Music | Wild Cherry
Man! I Feel Like A Woman! | Shania Twain
Kiss | Prince
Superstition | Stevie Wonder
Stayin' Alive | Bee Gees
Celebration | Kool & The Gang
Don't Stop 'Til You Get Enough | Michael Jackson
Let's Groove | Earth, Wind & Fire
Got to Be Real | Cheryl Lynn
Le Freak | CHIC
That's the Way (I Like It) | KC & The Sunshine Band
Suspicious Minds | Elvis Presley
Será | Legião Urbana
Menina Veneno | Ritchie
I Want To Break Free | Queen
Sweet Dreams (Are Made of This) | Eurythmics
Get Lucky | Daft Punk
Night Fever | Bee Gees
YMCA | Village People
I Will Survive | Gloria Gaynor
It's Raining Men | The Weather Girls
I Want to Know What Love Is | Foreigner
Maniac | Michael Sembello
O Descobridor Dos Sete Mares | Tim Maia
Olhar 43 | RPM
Mulher de Fases | Raimundos
Erva Venenosa | Rita Lee
Puro Êxtase | Barão Vermelho
Camila, Camila | Nenhum de Nós
Meu Erro | Os Paralamas do Sucesso
Bichos Escrotos | Titãs
Pro Dia Nascer Feliz | Barão Vermelho
Radio Ga Ga | Queen
The Best | Tina Turner
Don't Stop Believin' | Journey
Hold the Line | TOTO
Money For Nothing | Dire Straits
Another Brick in the Wall, Pt. 2 | Pink Floyd
Comfortably Numb | Pink Floyd
Livin' On A Prayer | Bon Jovi
Piece of My Heart | Janis Joplin (Big Brother & The Holding Company)
Dream On | Aerosmith
Zombie | The Cranberries
Holy Diver | Dio
Highway to Hell | AC/DC
The Trooper | Iron Maiden
Sweet Child O' Mine | Guns N' Roses
Rock And Roll All Nite | KISS` },
    { name: 'Repertório 3', songs: `
Honky Tonk Women | The Rolling Stones
Bad Moon Rising | Creedence Clearwater Revival
Losing My Religion | R.E.M.
Don't You (Forget About Me) | Simple Minds
Maneater | Daryl Hall & John Oates
Everybody Wants To Rule The World | Tears For Fears
Kiss and Say Goodbye | The Manhattans
I'm Still Standing | Elton John
I Want To Break Free | Queen
Sweet Home Alabama | Lynyrd Skynyrd
Roadhouse Blues | The Doors
Sweet Home Chicago | Eric Clapton
Johnny B. Goode | Chuck Berry
Still Got The Blues | Gary Moore
Money For Nothing | Dire Straits
La Grange | ZZ Top
Suspicious Minds | Elvis Presley
Have You Ever Seen The Rain | Creedence Clearwater Revival
Sultans Of Swing | Dire Straits
Mustang Sally | Buddy Guy
Baba O'Riley | The Who
Wind Of Change | Scorpions
House of the Rising Sun | The Animals
Crazy | Aerosmith
Whole Lotta Love | Led Zeppelin
The Best | Tina Turner
Rock And Roll All Nite | KISS` },
    { name: 'Repertório 4', songs: `
The Thrill Is Gone | B.B. King
La Grange | ZZ Top
Johnny B. Goode | Chuck Berry
Honky Tonk Women | The Rolling Stones
Layla | Derek & The Dominos (Eric Clapton)
Blue Suede Shoes | Elvis Presley
Hound Dog | Elvis Presley
Crazy Little Thing Called Love | Queen
Jailhouse Rock | Elvis Presley
Hit the Road Jack | Ray Charles
Roadhouse Blues | The Doors
Mustang Sally | Buddy Guy
I'm A Man | Bo Diddley
Be Careful With a Fool | Johnny Winter
People Are Strange | The Doors
Rehab | Amy Winehouse
Kiss and Say Goodbye | The Manhattans
Seven Nation Army | The White Stripes
Feeling Good | Michael Bublé
Pride and Joy | Stevie Ray Vaughan
Eyesight To The Blind | Aerosmith
Come Together | The Beatles
Twist And Shout | The Beatles
Cocaine | Eric Clapton
Sweet Home Chicago | Eric Clapton
Have You Ever Loved A Woman? | Derek & The Dominos (Eric Clapton)
Love Me Do | The Beatles
Oh! Darling | The Beatles
It's A Man's, Man's, Man's World | James Brown
Suspicious Minds | Elvis Presley
Heartbreak Hotel | Elvis Presley
Route 66 | Chuck Berry
Still Got The Blues | Gary Moore
Sunshine Of Your Love | Cream
Oh, Pretty Woman | Roy Orbison
Piece of My Heart | Janis Joplin (Big Brother & The Holding Company)
Money For Nothing | Dire Straits` },
    { name: 'Repertório 5', songs: `
In the Flesh? | Pink Floyd
Layla | Derek & The Dominos (Eric Clapton)
Baba O'Riley | The Who
Sweet Home Alabama | Lynyrd Skynyrd
Honky Tonk Women | The Rolling Stones
Eyesight To The Blind | Aerosmith
Suspicious Minds | Elvis Presley
Roadhouse Blues | The Doors
I Want You (She's So Heavy) | The Beatles
Sultans Of Swing | Dire Straits
Still Loving You | Scorpions
Still Got The Blues | Gary Moore
Another Brick in the Wall, Pt. 2 | Pink Floyd
Crazy | Aerosmith
Whole Lotta Love | Led Zeppelin
Comfortably Numb | Pink Floyd
Money For Nothing | Dire Straits
Dream On | Aerosmith
Mr. Crowley | Ozzy Osbourne
It's a Long Way to the Top (If You Wanna Rock 'n' Roll) | AC/DC
The Trooper | Iron Maiden
Highway to Hell | AC/DC
The Final Countdown | Europe
Rock And Roll All Nite | KISS
Wasted Years | Iron Maiden` },
    { name: 'Repertório 6', songs: `
Sweet Home Alabama | Lynyrd Skynyrd
Please Please Me | The Beatles
Honky Tonk Women | The Rolling Stones
Come Together | The Beatles
Hound Dog | Elvis Presley
Crazy Little Thing Called Love | Queen
Twist And Shout | The Beatles
Eyesight To The Blind | Aerosmith
Sweet Home Chicago | Eric Clapton
Hotel California | Eagles
Pride and Joy | Stevie Ray Vaughan
Simple Man | Lynyrd Skynyrd
Losing My Religion | R.E.M.
House of the Rising Sun | The Animals
Oh! Darling | The Beatles
Roadhouse Blues | The Doors
Wish You Were Here | Pink Floyd
Seven Nation Army | The White Stripes
Black | Pearl Jam
Creep | Radiohead
Zombie | The Cranberries
What's Up? | 4 Non Blondes
Time | Pink Floyd
I Shot The Sheriff | Eric Clapton
Don't You (Forget About Me) | Simple Minds
I Want To Break Free | Queen
Footloose | Kenny Loggins
Mais Uma Vez | Renato Russo
Quase Sem Querer | Legião Urbana
Será | Legião Urbana
Suspicious Minds | Elvis Presley
It's a Heartache | Bonnie Tyler
I Don't Want to Talk About It | Rod Stewart
Love Me Do | The Beatles
Help! | The Beatles
Piece of My Heart | Janis Joplin (Big Brother & The Holding Company)
Highway to Hell | AC/DC` },
    { name: 'Repertório 7', songs: `
Don't Stop Believin' | Journey
Kiss | Prince
Radio Ga Ga | Queen
Start Me Up | The Rolling Stones
It Must Have Been Love | Roxette
Enjoy the Silence | Depeche Mode
...Baby One More Time | Britney Spears
Beat It | Michael Jackson` },
    { name: 'Repertório 8', songs: `
It's Raining Men | The Weather Girls
Celebration | Kool & The Gang
Dancing Queen | ABBA
Rasputin | Boney M.
Sweet Dreams (Are Made of This) | Eurythmics
Get Lucky | Daft Punk
Girls Just Want to Have Fun | Cyndi Lauper
Gonna Make You Sweat (Everybody Dance Now) | C & C Music Factory
Play That Funky Music | Wild Cherry
Man! I Feel Like A Woman! | Shania Twain
I Want to Know What Love Is | Foreigner
Don't Stop 'Til You Get Enough | Michael Jackson
Thriller | Michael Jackson
Let's Groove | Earth, Wind & Fire
Got to Be Real | Cheryl Lynn
Le Freak | CHIC
That's the Way (I Like It) | KC & The Sunshine Band
Maniac | Michael Sembello
What A Feeling | Irene Cara
Smooth Operator | Sade
Night Fever | Bee Gees
YMCA | Village People
Stayin' Alive | Bee Gees
I Will Survive | Gloria Gaynor
Hold the Line | TOTO
The Best | Tina Turner
Hot Stuff | Donna Summer
Suspicious Minds | Elvis Presley
O Descobridor Dos Sete Mares | Tim Maia
Erva Venenosa | Rita Lee
Super Freak | Rick James
Menina Veneno | Ritchie
Rehab | Amy Winehouse
Maneater | Daryl Hall & John Oates
Everybody Wants To Rule The World | Tears For Fears
Careless Whisper | George Michael
Don't You (Forget About Me) | Simple Minds
Kiss and Say Goodbye | The Manhattans
(I've Had) The Time Of My Life | Bill Medley & Jennifer Warnes
Crazy Little Thing Called Love | Queen
I'm Still Standing | Elton John
What Is Love | Haddaway
The Rhythm of the Night | Corona
I Want To Break Free | Queen
Whisky a Go-Go | Roupa Nova
What's Up? | 4 Non Blondes` }
  ]
};
