import{_ as c,c as m,o as u,j as e,a as t,t as f,C as h,af as n,G as r,w as l}from"./chunks/framework.BUTjU1rR.js";const v={props:{date:String},computed:{formatDate(){const s=this.date.split("-").reverse(),o=new Date(`${s[0]}-${s[1]}-${s[2]}T00:00:00-03:00`),a=[[0,"Janeiro"],[1,"Fevereiro"],[2,"Março"],[3,"Abril"],[4,"Maio"],[5,"Junho"],[6,"Julho"],[7,"Agosto"],[8,"Setembro"],[9,"Outubro"],[10,"Novembro"],[11,"Dezembro"]];return`${o.getDate()} de ${a.find(i=>i[0]===o.getMonth())[1]} de ${o.getFullYear()}`.toLowerCase()}}},g={class:"flex flex-wrap gap-3 items-center"},q={class:"text-gray-400 m-0 p-0"};function b(s,o,a,i,M,p){return u(),m("div",g,[o[1]||(o[1]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar-day",viewBox:"0 0 16 16"},[e("path",{d:"M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"}),e("path",{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"})],-1)),e("span",q,[o[0]||(o[0]=t("Assistido em ")),e("b",null,f(p.formatDate),1)])])}const d=c(v,[["render",b]]),x={tabindex:"0"},y={style:{"text-align":"center"}},k={href:"./movie-theaters-list.html#cineart-shopping-boulevard"},C={style:{"text-align":"center"}},A={href:"./movie-theaters-list.html#cineart-shopping-boulevard"},z={style:{"text-align":"center"}},P={href:"./movie-theaters-list.html#cineart-shopping-boulevard"},j=JSON.parse('{"title":"Filmes","description":"","frontmatter":{},"headers":[],"relativePath":"movies.md","filePath":"movies.md","lastUpdated":1743815403000}'),O={name:"movies.md"},D=Object.assign(O,{setup(s){return(o,a)=>{const i=h("Badge");return u(),m("div",null,[a[27]||(a[27]=n('<hr><p>layout: doc head:</p><ul><li><ul><li>meta</li><li>name: description content: Description</li></ul></li></ul><hr><h1 id="filmes" tabindex="-1">Filmes <a class="header-anchor" href="#filmes" aria-label="Permalink to &quot;Filmes&quot;">​</a></h1><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p>Nesta seção há breves resumos sobre os filmes que assisti para avaliar os cinemas. <strong>Pode haver spoiler.</strong></p></div><h2 id="➡️-lista-comece-por-aqui" tabindex="-1">➡️ Lista - comece por aqui <a class="header-anchor" href="#➡️-lista-comece-por-aqui" aria-label="Permalink to &quot;➡️ Lista - comece por aqui&quot;">​</a></h2>',7)),e("table",x,[a[26]||(a[26]=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"Filme"),e("th",{style:{"text-align":"center"}},"Gênero"),e("th",{style:{"text-align":"center"}},"Cinema")])],-1)),e("tbody",null,[a[12]||(a[12]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#minha-irma-e-eu"},"Minha irmã e eu")]),e("td",{style:{"text-align":"center"}},"Comédia"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-cidade"},"Cineart Cidade")])],-1)),e("tr",null,[a[2]||(a[2]=e("td",{style:{"text-align":"center"}},[e("a",{href:"#duna-2"},"Duna 2")],-1)),a[3]||(a[3]=e("td",{style:{"text-align":"center"}},"Ficção",-1)),e("td",y,[e("a",k,[a[1]||(a[1]=t("Cineart Boulevard ")),r(i,{type:"tip"},{default:l(()=>a[0]||(a[0]=[t("IMAX")])),_:1})])])]),a[13]||(a[13]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#guerra-civil"},"Guerra Civil")]),e("td",{style:{"text-align":"center"}},"Ação"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-minas-shopping"},"Cineart Minas Shopping")])],-1)),a[14]||(a[14]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#godzilla-e-kong"},"Godzilla e Kong")]),e("td",{style:{"text-align":"center"}},"Ficção"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-boulevard"},"Cineart Boulevard")])],-1)),a[15]||(a[15]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#planeta-dos-macacos-o-reinado"},"Planeta dos Macados: O reinado")]),e("td",{style:{"text-align":"center"}},"Ficção"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-cidade"},"Cineart Cidade")])],-1)),e("tr",null,[a[6]||(a[6]=e("td",{style:{"text-align":"center"}},[e("a",{href:"#deadpoll-e-wolverine"},"Deadpool e Wolverine")],-1)),a[7]||(a[7]=e("td",{style:{"text-align":"center"}},"Ação",-1)),e("td",C,[e("a",A,[a[5]||(a[5]=t("Cineart Boulevard ")),r(i,{type:"tip"},{default:l(()=>a[4]||(a[4]=[t("IMAX")])),_:1})])])]),a[16]||(a[16]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#the-crow-2024"},"The Crow (2024)")]),e("td",{style:{"text-align":"center"}},"Terror"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cinemark-patio-savassi"},"Cinemark Patio Savassi")])],-1)),a[17]||(a[17]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#pisque-duas-vezes"},"Pisque duas vezes")]),e("td",{style:{"text-align":"center"}},"Suspense"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cinemark-patio-savassi"},"Cinemark Patio Savassi")])],-1)),a[18]||(a[18]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#coringa-delirio-a-dois"},"Coringa: Delírio a dois")]),e("td",{style:{"text-align":"center"}},"Musical"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-boulevard"},"Cineart Boulevard")])],-1)),a[19]||(a[19]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#venom-a-ultima-rodada"},"Venom: A Última Rodada")]),e("td",{style:{"text-align":"center"}},"Ação"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-cidade"},"Cineart Cidade")])],-1)),a[20]||(a[20]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#o-segundo-ato"},"O segundo ato")]),e("td",{style:{"text-align":"center"}},"Drama"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-ponteio"},"Cineart Ponteio")])],-1)),a[21]||(a[21]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#ainda-estou-aqui"},"Ainda estou aqui")]),e("td",{style:{"text-align":"center"}},"Drama"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-ponteio"},"Cineart Ponteio")])],-1)),a[22]||(a[22]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#o-auto-da-compadecida-2"},"O Auto da Compadecida 2")]),e("td",{style:{"text-align":"center"}},"Comédia"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-minas-shopping"},"Cineart Minas Shopping")])],-1)),a[23]||(a[23]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#conclave"},"Conclave")]),e("td",{style:{"text-align":"center"}},"Thriller"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-shopping-boulevard"},"Cineart Boulevard")])],-1)),e("tr",null,[a[10]||(a[10]=e("td",{style:{"text-align":"center"}},[e("a",{href:"#o-brutalista"},"O Brutalista")],-1)),a[11]||(a[11]=e("td",{style:{"text-align":"center"}},"Drama",-1)),e("td",z,[e("a",P,[a[9]||(a[9]=t("Cineart Boulevard ")),r(i,{type:"tip"},{default:l(()=>a[8]||(a[8]=[t("IMAX")])),_:1})])])]),a[24]||(a[24]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#better-man"},"Better Man")]),e("td",{style:{"text-align":"center"}},"Musical"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-ponteio"},"Cineart Ponteio")])],-1)),a[25]||(a[25]=e("tr",null,[e("td",{style:{"text-align":"center"}},[e("a",{href:"#vitoria"},"Vitória")]),e("td",{style:{"text-align":"center"}},"Drama"),e("td",{style:{"text-align":"center"}},[e("a",{href:"./movie-theaters-list.html#cineart-ponteio"},"Cineart Ponteio")])],-1))])]),a[28]||(a[28]=n('<h2 id="minha-irma-e-eu" tabindex="-1">Minha irmã e eu <a class="header-anchor" href="#minha-irma-e-eu" aria-label="Permalink to &quot;Minha irmã e eu&quot;">​</a></h2><p>Duas irmãs preparam-se para fazer a festa de aniversário da mãe delas - e vai ser especial, contando com a presença de toda a família. Porém, numa discussão elas chateam a mãe que resolve fugir. Na procura da mãe, as duas irmãs aproximam-se, reconstruindo uma conexão que há muito não tinham.</p><blockquote><p>É uma comédia leve, tem um pouco de apelo sexual, mas nada vulgar. O filme é estrelado pela Tatá Werneck e Ingrid Guimarães, que mesmo numa história fraca, de orçamento limitado, conseguem &quot;salvar&quot; o filme, com o carisma e a &quot;graça natural&quot; que elas têm.</p></blockquote><h2 id="duna-2" tabindex="-1">Duna 2 <a class="header-anchor" href="#duna-2" aria-label="Permalink to &quot;Duna 2&quot;">​</a></h2><p>É a continuação de Duna, de 2021. Neste longa, os personagens unem forças para derrubar e tomar novamente o controle do planeta pela Casa de Especiarias dos Artreides. Paul Artreides passa a ser visto pelo &quot;povo do deserto&quot; como um deus e lidera a empreitada contra o Império.</p><blockquote><p>O filme é ótimo.</p></blockquote><h2 id="guerra-civil" tabindex="-1">Guerra Civil <a class="header-anchor" href="#guerra-civil" aria-label="Permalink to &quot;Guerra Civil&quot;">​</a></h2><p>Num Estados Unidos distópico, alguns estados estão numa guerra civil contra o governo e o exército. Um grupo de jornalistas decide ir até Washington entrevistar o presidente antes que ele seja assassinado. Mas até chegar a capital, eles tem muitas barreiras no caminho.</p><blockquote><p>É bom e fora da casinha.</p></blockquote><h2 id="godzilla-e-kong" tabindex="-1">Godzilla e Kong <a class="header-anchor" href="#godzilla-e-kong" aria-label="Permalink to &quot;Godzilla e Kong&quot;">​</a></h2><p>Na Terra Oca, Kong machuca o dente e precisa da ajuda dos humanos para repará-lo. Enquanto isso, Godzilla segue como um &quot;guardião&quot; da Terra apesar da sua grande habilidade em destruir tudo pelo caminho. Uma insurreição começa a surgir na Terra Oca e os dois precisam se unir para combater o inimigo.</p><blockquote><p>O filme não é bom. A história não cativa; é muito tempo de tela de gritos e os personagens humanos são bem estereotipados.</p></blockquote><h2 id="planeta-dos-macacos-o-reinado" tabindex="-1">Planeta dos Macacos: O reinado <a class="header-anchor" href="#planeta-dos-macacos-o-reinado" aria-label="Permalink to &quot;Planeta dos Macacos: O reinado&quot;">​</a></h2><p>Um tirano tem sob o seu poder grupos e mais grupos de macacos. O objetivo dele é conseguir acesso à alta tecnologia que os humanos deixaram pra trás e para isso ele escraviza macacos em busca de abrir uma porta de um bunker que os humanos se estabeleceram. O nosso personagem principal, junto dos seus amigos e uma &quot;figura falante&quot; desencadeiam grandes peripécias...</p><blockquote><p>O filme é xôxo. Saí da sala com a perceção de que faltava algo. Talvez seja o desenrolar da história que foi bastante presível, ou a duração do filme, que não é o meu gênero mais preferido, ou ainda &quot;figura falante&quot; que não cativa muito e é desmascarada algumas vezes...</p></blockquote><h2 id="deadpoll-e-wolverine" tabindex="-1">Deadpoll e Wolverine <a class="header-anchor" href="#deadpoll-e-wolverine" aria-label="Permalink to &quot;Deadpoll e Wolverine&quot;">​</a></h2><p>Deadpoll retorna nesse filme movido pela força da amizade e o Wolverine pelo amargo arrependimento dos erros cometidos por ele no universo dele no passado. Nesse filme fã-service 🤓 e lotado de piadas e críticas, que já saturaram, envolvendo a Marvel, a Fox e a Disney, Deadpoll visa salvar o mundo em que vive enquanto o Wolverine, por sua vez, ser reconhecido como um herói.</p><p>Apesar de a trama ser concisa e eu não me recordar de nenhum furo de roteiro, a história é fraca - não dá vontade de continuar a ver o filme, e a vilã, irmã do professor Xavier, não é a melhor dos vilões.</p><blockquote><p>O filme é mais um de multiverso. Mais um para conta.</p></blockquote><h2 id="the-crow-2024" tabindex="-1">The Crow (2024) <a class="header-anchor" href="#the-crow-2024" aria-label="Permalink to &quot;The Crow (2024)&quot;">​</a></h2><p>Apesar de um tanto violento, o filme é bom. O amor entre o Eric e a Shelly que rodeia a história é motivadora (se é que esse é um sentimento que possa se ter vendo um relacionamento de fora). Ainda não assisti os outros filmes de corvo rsrs, mas depois de assitir à 1h50 do Eric (interpretado pelo Bill Skarsgard) morrendo 3 vezes, se apaixonando loucamente por uma moça que ele conheceu a pouquíssimo tempo e sendo um jovem traumatizado pelo seu passado, com certeza os outros filmes entrarão na minha listinha para assistir.</p><h2 id="pisque-duas-vezes" tabindex="-1">Pisque duas vezes <a class="header-anchor" href="#pisque-duas-vezes" aria-label="Permalink to &quot;Pisque duas vezes&quot;">​</a></h2><p>Confesso que antes de assistir eu vi a resenha da Isabela Boscov sobre esse filme, e lá ela chamava a atenção para o trabalho feito com as cores neste filme, e sim, é fascinante! Tudo foi pensado nos mínimos detalhes e os tons contrastantes, sempre bem saturados dão um tchan a mais nesse filme.</p><p>A história, apesar de no início parecer só mais um filme como Corra e Midsommar, é bem construída. Em certo ponto do filme, o drama que a protagonista passa chega a ser palpável. Isso sem falar no plot twist, também que é maravilho para espectadores como eu, que esperam um final minimamente justo.</p><h2 id="coringa-delirio-a-dois" tabindex="-1">Coringa: Delírio a dois <a class="header-anchor" href="#coringa-delirio-a-dois" aria-label="Permalink to &quot;Coringa: Delírio a dois&quot;">​</a></h2><p>É ruim. É péssimo. É terrível. É um musical...</p><blockquote><p>Esse filme vai ficar sem resumo mesmo.</p></blockquote><h2 id="venom-a-ultima-rodada" tabindex="-1">Venom: A Última Rodada <a class="header-anchor" href="#venom-a-ultima-rodada" aria-label="Permalink to &quot;Venom: A Última Rodada&quot;">​</a></h2><p>“A Última Rodada&quot; foi o título escolhido para o último filme da saga de Eddie Brock e o simbionte Venom. O filme é mais um filme de “super-herói” genérico que segue a já cansada jornada do herói.</p><p>No filme, Venom e Eddie estão a ser cassados por possuir o codex (nome ótimo e original, diga-se de passagem) - que é basicamente, uma espécie de fórmula para criar outros simbiontes.</p><p>Na tentativa de fuga, Eddie acaba <strong>acidentalmente</strong> encontrando uma família meio conspiracionista meio &#39;hippie&#39; em busca de ver a área 51 antes que ela fosse desativada e a partir daí, praticamente, que o filme começa.</p><p>No filme tem tudo do mais clichê:</p><ul><li>O general ignorante que acha que as coisas devem ser feitas do jeito dele</li><li>Os cientistas, muito humanos, querendo fazer tudo direitinho</li><li>e um indivíduo que sabe de tudo o que vai acontecer e é a Wikipédia do filme</li></ul><blockquote><p>Não é bom. Também não é engraçado e não se salva por esse aspecto como o filme anterior do Venom.</p></blockquote><h2 id="o-segundo-ato" tabindex="-1">O segundo ato <a class="header-anchor" href="#o-segundo-ato" aria-label="Permalink to &quot;O segundo ato&quot;">​</a></h2><p>É um filme francês sobre um filme que está a ser gravado, escrito e dirigido por uma AI. O filme é uma comédia leve e bem humorada, com cenas e diálogos longuíssimos que quebram a quarta parede dentro da quarta parede (a primeira pelo filme que está a ser gravado, a segunda pelo filme que estamos a assistir).</p><p>O filme é bom, é uma crítica bem humorada ao cinema e a indústria cinematográfica.</p><h2 id="ainda-estou-aqui" tabindex="-1">Ainda estou aqui <a class="header-anchor" href="#ainda-estou-aqui" aria-label="Permalink to &quot;Ainda estou aqui&quot;">​</a></h2><p>Até agora, da lista, este é o filme mais emocionante. Por ser um filme baseado em &#39;fatos reais&#39; e o desaparecimento ser o fato que desencadeia a história, o filme é muito emocionante.</p><p>A atuação da Fernanda Torres enquanto mãe de cinco filhos e uma esposa atrás do seu marido é um dos destaques do filme. No final, a participação da mãe dela, a Fernanda Montenegro é a estaca que faltava para o espectador se debruçar em lágrimas.</p><p>Nesse filme, as pequenas coisas são as que mais importam. No final, já nos créditos, as fotografias reais da família que inspirou o filme são mostradas e aí, se sobrou alguma ficha, ela cai.</p><h2 id="o-auto-da-compadecida-2" tabindex="-1">O Auto da Compadecida 2 <a class="header-anchor" href="#o-auto-da-compadecida-2" aria-label="Permalink to &quot;O Auto da Compadecida 2&quot;">​</a></h2><p>O filme é uma comédia leve e bem humorada. Não espere muito desse filme, por quê é uma continuação de filme que estreou há 20 anos. Vários personagens aqui foram substituídos, e não houve cuidado algum com a similaridade entre os atores. O filme é bom, mas não é o melhor filme de comédia que você vai assistir.</p><h2 id="conclave" tabindex="-1">Conclave <a class="header-anchor" href="#conclave" aria-label="Permalink to &quot;Conclave&quot;">​</a></h2><p>É bárbaro!! No filme, o papa morreu e a cerimônia de escolha do novo papa precisa ser feita. O cardeal Lawrence, protagonista do filme está em dúvidas quanto a sua fé na Igreja e, ao mesmo tempo, é o responsável por organizar o conclave.</p><p>Antes mesmo de começar, fica claro que há uma disputa entre várias facções (termo que o próprio filme usa) dentro da cúpula da Igreja, cada qual com sua agenda e interesses específicos. O aparecimento de um sarcedote do Afeganistão intriga os membros da cerimônia. Com o início do conclave, as disputas ficam ainda mais intensas, um suposto caso de corrupção e a existência de filho de um membro da Igreja contribuem para deixar o clima ainda mais hostil.</p><p>Do lado de fora do Vaticano, atentados estão a ocorrer. Muitos ficam feridos e o cardeal tem que lidar com tudo isso.</p><blockquote><p>É um filme tenso do início ao fim. O ator que faz o cardeal Lawrence é impecável. Um excelente filme.</p></blockquote><h2 id="o-brutalista" tabindex="-1">O Brutalista <a class="header-anchor" href="#o-brutalista" aria-label="Permalink to &quot;O Brutalista&quot;">​</a></h2><p>Eu já falei muito mal desse filme, mas &quot;volto atrás&quot; em tudo que disse.</p><p>Laslo Tóth é um arquiteto judeu que acabou de ser liberto de um campo de concentração. Ele foi separado da sua filha e da esposa, e agora está a caminho dos Estados Unidos. Com esperanças de construir a sua vida de novo, ele chega a NY e a primeira coisa que vê é a estátua da Liberdade. Mas, na visão dele, ela não está como a conhecemos. Normalmente esperaríamos ver a estátua de baixo para cima, mas Laslo vê uma estátua distorcida, que se movimenta e chega a fica de ponta a cabeça...</p><p>Em NY ele recebe a ajuda do seu primo, que construiu uma pequena empresa de móveis. A ideia é que junto de Laslo ele possa ter mais clientes. A esposa de do arquiteto mandava cartas para o primo e contou que estava na Europa junto da filha. Mas a parceria não dura muito. A esposa do seu primo, descontente com ter Laslo na sua casa, cria uma intriga e o arquiteto acaba morando em albergue, vivendo de bicos e de caridade. Ele faz uso frequente de drogas, heroína, eu acho.</p><p>Laslo, então, é convidado por um empresário para construir um espaço para a comunidade, na sua propriedade. O projeto é grande e Laslo o projeta em dimensões colossais: com amplas salas e corredores e uma capela, onde se forma uma cruz no altar através da luz do sol - dependendo da perspectiva a cruz fica invertida. Para o arquiteto, o objetivo do projeto é ser um bem social, mas com o tempo ficam claros os reais interesses do empresário. A sua esposa e filha finalmente deixam à Europa e passam a morar com o arquiteto. A mulher é jornalista e tem uma doença que a faz ter fortes dores e que dificultam a locomoção. Mas ela vive bem, com a ajuda da filha - uma menina recatada e retraída.</p><p>Conforme as obras vão a avançar e os problemas de orçamento e imprevistos acontecem, Laslo fecha o seu mundo cada vez mais para dentro das paredes que ele projetou. Ele não aceita opiniões de outros profissionais, briga com os trabalhadores e negligencia a própria família. O uso de heroína agora se tornou um vício.</p><p>[Disclaimer: a partir daqui o filme começa a correr e as coisas acontecem de forma muito rápida, fica um pouco confuso.] Ele vai até a Itália com o empresário, para escolherem o mármore, nessa viagem um &quot;episódio de demonstração de poder&quot;. Novamente nos Estados Unidos, a esposa dele têm uma overdose. Quando se recupera, ela confronta o empresário, que desaparece.</p><p>E aí o filme acaba. O que vêm depois é o mesmo que acontece em <a href="#ainda-estou-aqui">&quot;Ainda Estou Aqui&quot;</a>: uma retrospetiva contando o que aconteceu nos anos seguintes.</p><blockquote><p>Apesar de o final ficar em aberto e o filme ser muito longo - mas não é cansativo - é um bom filme. Claro que muitos não vão gostar, talvez pelo tamanho, ou pelo fato de apenas contar uma história ou ainda pelo fato de ser totalmente ficcional.</p></blockquote><h2 id="better-man" tabindex="-1">Better Man <a class="header-anchor" href="#better-man" aria-label="Permalink to &quot;Better Man&quot;">​</a></h2>',58)),r(d,{date:"23-03-2025"}),a[29]||(a[29]=n('<div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p><strong>⚠️ Gatilho: suicídio, abuso de drogas e dependência</strong></p><p>Este filme aborda o tema de forma explícita e visual. Se você é sensível ao tema ou está num momento difícil, não assista.</p></div><blockquote><p>Comecei com o filme rolando há uns 30 minutos. Me atrasei por quê confundi os pontos de ônibus do 3050...</p></blockquote><p>&quot;Better Man&quot;, ou &quot;Melhor Homem&quot;, em português é um filme fantástico. Este foi o primeiro musical que vi nos últimos anos genuinamente bom e que não me causou uma crise de ansiedade, esperando pelo final.</p><p>É a história de Robbie Willians, um músico que eu sequer sabia da existência. No filme, ele é um chimpanzé - provavelmente porquê para as pessoas ele era muito descolado e divertido, sei lá.</p><p>Fato é que o filme é bom. Em vários momentos tem mudanças bruscas no cenário em que a história se passa. Por sinal, é também muito bem produzido. Desse filme não tenho muito o que dizer, é a biografia dele, a história dele e da carreira que ele construiu. É a história do relacionamento complicado com o pai - que nunca foi presente na vida do menino, da avó paterna - e essa parte me pegou - que fez parte do crescimento dele e ele não esteve presente nos últimos momentos de vida dela...</p><h2 id="vitoria" tabindex="-1">Vitória <a class="header-anchor" href="#vitoria" aria-label="Permalink to &quot;Vitória&quot;">​</a></h2>',6)),r(d,{date:"23-03-2025"}),a[30]||(a[30]=e("p",null,"No início eu fiquei confuso, meio incomodado com a atuação da Fernanda Montenegro, ela falava baixo e meio embolado, ficava difícil de entender e também em vários momentos era lenta - mas isso é coisa da idade. Chegar aos 90 anos não é pra qualquer um, passar dos 90 então...",-1)),a[31]||(a[31]=e("p",null,"Com alguns minutos de tela já dá pra acostumar. Se você viu o trailer sabe do que se trata. Se não, eu vou contar: é a história de uma moradora de um bairro na periferia do Rio. Atordoada pelo crescimento do tráfico e da violência da região ela resolve tomar alguma atitude.",-1)),a[32]||(a[32]=e("p",null,"Ela mora sozinha e ganha a vida fazendo massagens - ela aprendeu vendo a massagista de uma antiga patroa trabalhando. Mora em um prédio pequeno e de frente pra ele têm um aglomerado de casas - é lá que ficam os traficantes e é de lá também que saem as imagens que ela captura.",-1)),a[33]||(a[33]=e("p",null,"A Fernanda com certeza foi a atriz perfeita para o papel - não somente pelo fato de ela, apenas fisicamente, já impactar quem vê com as atitudes que ela toma, mas também por conseguir emocionar quem assiste, ao ver o quão disposta a idosa estava para que alguém - ela queria a polícia - tomasse alguma atitude com aquilo que ela via pela janela.",-1)),a[34]||(a[34]=e("p",null,"Vitória não é um filme policial, não é de investigação, não é um filme de suspense. É baseado em uma história real, não só da idosa que inspirou o filme, mas também de milhões de outros brasileiros que dia sim, dia também, vê - talvez não de uma janela - a inação do poder público, a canalice comendo solta e o crime, na frente de casa.",-1)),a[35]||(a[35]=e("blockquote",null,[e("p",null,'Se filmes genuinamente merecedores ganhassem o Oscar, "Vitória" mereceria um.')],-1))])}}});export{j as __pageData,D as default};
