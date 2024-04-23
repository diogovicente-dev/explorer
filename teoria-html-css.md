**INTRODUÇÃO A HTML E CSS**

DOCTYPE => versão do html 5 (instrução do tipo do html)

HTML => tag _root_ (raiz) do sistema

- atributo que define a linguagem -> para nós, colocar **pt-br**

**Elementos HTML**
_Pai e Filhos_
Tags = elementos html

HEAD

- contém instruções para a página
- META => configurações da página, com o emmet não remover nada, se tiver algo o IE, remover a linha (internet explorer);
- META => - charset = conjunto de caracteres (geralmente UTF-8 - tem que colocar para não "bagunçar" os caracteres) - viewport = tela do dispositivo (importante para sites para serem exibidos em dispositivos móveis)
  BODY
- é o que é exibido no navegador, corpo, o que é exibido para o cliente (navegador)

**PROJETO**

- analisar os elementos para a construção da página

_imagens_, _texto_, etc...

imagens: quando em vetores, salvar uma imagem em svg torna-se melhor porque tem-se ua qualidade boa e tamanho pequeno, comparado. Se precisar de fundo transparente, exportar em PNG (figma); se não precisar, pode exportar em jpg

elemento <img /> => src = source (origem da imagem); alt (alternative = texto para acessibilidade)
elemento <h1> = títulos
elemento <p> = parágrafos
<span> elemento inline que não altera o texto no html (usar para depois no Css)
<strong> - deixa o elemento bold automaticamente no html

tag a: estrutura para criar um link para enviar direto um e-mail

**ELEMENTOS**

**INLINE**

- Possui apenas o tamanho do próprio elemento, se o próximo elemento for inline, fica ao lado, se block, pula a linha.

  **BLOCK**

- Elementos que ocupam a linha inteira, e quebram para o texto para a próxima linha; se o elemento block vier depois de um inline, quebra a linha

**FONTES**

- procurar fontes no google fonts (https://fonts.google.com/)
- copiar o link do google fonts e colar abaixo (href)
- preconnect colocar logo abaixo do <head>, acima das tags do viewport e charset

**CORES**

- rgb (255, 255, 255)
- hex (FF, FF, FF) OU #FFFFFF até #000000

**SELETOR 'CONTINUADO"**

```css
h1 span {
aqui estou pegando todos os span dentro do h1
}
```

**ALINHAMENTOS E ESPAÇAMENTOS**

TEXTOS => text-align: center

- ao delimitar, alinhamento central perde-se (relacionado à página)

**CSS**
shorthand
muitos atributos funcionam de maneira igual ou parecida

margin: 0 auto 72px
1 valor: top
2 valor: left e right
3 valor: bootom

margin: auto (para todos)

margin: auto 72px 
auto: top e bottom
72px right e left

margin: 0 16px 22px 32px
0: top
16px: right
22px: bottom
32px: left


**POSICIONAMENTO**

Cada position, são camadas que ficam sobrepostas (acima dos demais elementos)

padrão do position: static

- mais usados: fixed, absolute, relative

id: recomendado para usar em tags únicas
class: pode ser usado em várias tags (geralmente do mesmo contexto)

se quiser tudo centralizado, colocar, por exemplo, alinhamento do body direto




**MÓDULO 2 - AVANÇANDO EM HTML E CSS**

HTML => elementos semânticos (com significado)

```html
<header>elemento que indica um cabeçalho</header>
<main>elemento que indica o conteúdo principal</main>
<footer>elemento que indica o rodapé</footer>
<nav>elemento semantico para navegação, indicando navegação da página</nav>
<ul>
  ideia de lista (ul é lista não ordenada)
</ul>
<ol>
  lista ordenada
</ol>
<li>elemento dentro da lista</li>
<section>
  elemento para criação de seções, separações, por boa prática são usados h2
  dentro, usados para agrupamento de textos
</section>
<button>elemento para botão</button>
```

pensar na estrutura do projeto primeiro (em HTML) e ir criando as tags

pode ser alterado depois, pensar de forma organizada

organizar listas e navegação

criando os elementos de forma coerente, com as tags que fazem sentido

importante ter a leitura do html e estar entendo o que está aparecendo em tela (preview)

tags semanticas ajudam na acessibilidade, ajudam os motores de busca do google!!
html semantico é mais prioritário para o motor de busca do google

**Box Model**
Para o CSS, todos os elementos são CAIXAS (BOX)

- ## Caixas tem espaço ao redor, bordas, altura, largura, conteúdo, preenchimento
  padding => preenchimento interno, entre o conteúdo e a borda
  margem => espaço entre os demais elementos e a borda (pelo exterior da caixa)

**DISPLAY FLEX**

- deve ser aplicado à caixa principal;

```css
display: flex;
```

dica: aplicar o display flex e abrir na DevTools do navegador as propriedades e entender o que cada uma faz
main axis: alinhamento sempre em uma direção (horizontal ou vertical)

align-items: alinha os elementos no centro, considerando "row" ou "column", dependendo da necessidade

ao aplicar o display: flex na tag "pai", libera atributos diferentes para os "filhos" da tag

**ACESSIBILIDADE**

- órgãos que ajudam

A11y / W3C => respeito sobre acessibilidade
exemplo: não é legal colocar NAV dentro do Header

Refatorar = mudar o código sem mexer no resultado final

**MELHORANDO TEXTOS E APARENCIA**
Quando no protótipo estiver elementos iguais, um com espécie de diferença visual (negrito, selecionado, etc), significa "hover"

**LINEAR GRADIENT**
inicialmente - 3 valores

(1, 2, 3)
1 - graus (0, 90, 180, 270, 360)
2 - primeira cor (mais importante)
3 - segunda cor (fica por baixo da primeira cor)

**FORMULÁRIOS**

camposformulario

campos input => select, text-area,

input:text

- type="text" - mais importante name="titulo" id="titulo"

```html
<input type="text" name="titulo" id="titulo />
```

```html
<label for="titulo">Título do Evento</label>
```

na label, serve para acessibilidade, o "for" deve indicar o "name" do input

```html
<select name="" id="">
  <option value="music">Música</option>
</select>
```

<textarea name="" id="">

</textarea>

```html
<form action="" method="">
  <!--no formulário deve ser inserido o input-->
</form>
```

action => para onde o formulario será enviado
clicar em "enviar" - vai ser enviado para um lugar
se não atualizar, fica na mesma página

method => método que será enviado a informação do formulário
GET => usado para receber e enviar recursos (dados) pela URL
POST => somente para ENVIAR recursos - POSTO - envia os recursos pelo corpo da requisição
se não enviar o method, fica padrão o GET

query strngs parameters -> ver pela DevTools - está na URL

essa comunicação de GET e POST é básico para comunicação com BACK, comunicar com o usuário

**FORM**

```html
<form>
  <fieldset></fieldset>
</form>
```

_tags_ padrão html para construção de formulários

fieldset -> agrupamento de campos, conjunto de campos

**organização**

LABEL + SPAN
INPUT

para formularios, agrupar para todos os elementos e reutilizar

LABEL => elemento inline

INPUT => elemento inline-block

os elementos inline, algumas propriedades não funcionam (exemplo: width)

**box-sizing: border box;**
sem essa propriedade, se voce tiver uma caixa de 200px de width e colocar mais 100px de padding, por exemplo, a caixa possuirá 300px de tamanho

- padrão: box-sizing: content-box (a partir do conteúdo)

quando aplicar um flex dentro do form, com a tag legend, o legend para alguns navegadores ficam "fora" da ideia do flex.
criar uma cclasse fieldset-wrapper e colocar todos os elementos dentro, para "quebrar" diretamente a ligação da tag fieldset com a legend

**acessibilidade**
questão de contraste no código: utilizar o devtools sobre o texto, no atributo de contraste não pdoe ter o alerta.
ou mudar a cor, ou criar um hover quando passar o mouse

estratégias para aplicar no css com critérios para acessibilidade

**select**
no html, select é uma tag específica para seleção

**vendor-prefixes**
forma de avaliar como deverá ser usuado um atributo para um determinado navegador.
ver em: https://caniuse.com/

**css**

o comando significa:

.time = classe

> = indica o nível do elemento para que o css aplique

.time > div = significa que o css vai buscar apenas o primeiro nível do elemento div depois da classe .time

:nth-child() = indica o filho número "n" a ser considerado

() = inserir o número do filho a ser considerado

```css
.time > div:nth-child(1) {
  width: 100%;
}
```

**BEFORE**

para inclusão de um checkbox mais coerente com o protótipo, é necessário criar estratégias diferentes para criação.

remover o checkbox padrão do sistema e criar um "do zero"

problema de acessibilidade: ao dar um display: none, a navegação pelo teclado (tabs) fica comprometida.

solução: posicionar o cehckbox exatamente em cima do "checkbox criado", e deixar a opacidade 0 (invisível)
input original => relative
label => receber absolute

outline => como criar no cehckbox?

**POSITION**
RELATIVE => geralmente inserido no "Pai" para ter a referencia para os elementos filgos
ABSOLUTE => aplicados aos filhos, absolutos em relação ao pai relative.
