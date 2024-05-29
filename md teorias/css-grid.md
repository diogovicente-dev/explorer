**GRID**

Flexibilidade de moldar os elementos na página
Caixa = Conteiner
GRID - Coluna e Linhas

Consigo manipular os elementos e colocá-los em "quadrantes" específicos que eu queira.
GRID - "TABELA NO EXCEL" - exemplo

Entender como o GRID vai estar configurado e flexibilizar o layout

**PROPRIEDADES FUNDAMENTAIS**

Todo grid é composto de 2 principais grupos:

'container: o pai'
'itens: os filhos"

### CONTAINER (pai)

'container pai' => precisa ter display = grid

´´´css
main {
display:grid;
}
´´´

Ao colocar 'grid' no pai, os elementos filhos passam a "obedecer" o grid; elementos inline passam a se comportar de maneira diferente.
Propriedades diferentes são adicionadas aos filhos.

Grid cria automaticamente "linhas" para os elementos filhos.

Existe 'inline-grid'; mas o mais usado é apenas o 'grid'.

- grid-template (shorthand) -> aplicado nos elementos "pai"
  -- grid-template-columns; pode colocar qualquer tipo de valor (fr, px, %, rem, vw, vh, etc...)
  -- grid-template-rows;
  -- grid-template-areas;
- gap (shorthand)
  -- row-gap
  -- column gap

### ITENS (filhos)

- grid-column (shorthand)
  -- grid-column-start
  -- grid-column-end
- grid-row (shorthand)
  -- grid-row-start
  -- grid-row-end
- grid-area

conceito de "linhas virtuais"

se eu quero que um elemento ocupe 2 espaços, o start deve começar em "1" e terminar em "3".

Exemplo: se eu tiver 3 colunas, existem "4" linhas virtuais
´´´css
grid-template-columns: repeat(3, 1fr);
´´´

o shorthand é assim:

grid-column: 1/3

**TOMAR CUIDADO**

o GRID vai fazendo automaticamente, podemos "ultrapassar" a quantidade que eu setei;
às vezes o grid não precisa configurar, ele mesmo se encaixa onde está faltando

### grid area

grid-template-areas:
"A B B"
"A B B"
"A C D";

colocar "nome nas áreas" => elemento PAi

nos FILHOS (itens)
indicar qual grid-area se refere; ao colocar **grid-area: A;** o elemento já ocupa o espacço conforme "desenho" do grid-template-area

### GAP

Espaços entre os elementos (não aplica para os espaços ocupados por um único elemento)

**SHORTHAND GRID-TEMPLATE**

grid-template:
"A B B" 80px (row)
"A B B" 80px (row)
"A C D" 80px (row) / (depois da barra é column) 80px 1fr 2fr;

### PROPRIEDADES DE ALINHAMENTO

9 fundamentais

**6 no container**
'align-content'
'justify-content'
place-content'

'align-items'
'justify-items'
'place-items'

**3 nos itens**
'align-self'
'justify-self'
'place-self'

### 3 grandes grupos ### =>

**align**, **justify** e **place**

cada um vai olhar para:

- conteúdo do elemento - 'content' (pai)
- itens do elemento - 'items' (pai)
- o próprio elemento - 'self' (filho)

### ALINHAMENTO PAI

### align-content

- olha para o eixo vertical

### justify-content

- olha para o eixo horizontal

- space around -
- space between -
- space evenly -

### place-content

- unição do align e justify ao mesmo tempo

### ALINHAMENTO ITENS

-align-items: center, start, end, strech (estica o item denrtro do espaço) - eixvo vertical
-justify-items: mesmas opções, ajusta eixo horizontal

**OBSERVAÇÃO**
Geralmente os GRID's são construídos para serem flexíveis, sem tamanho fixo de cada "item" dentro do grid "pai";
desse modo, algumas propriedades de alinhamentos em geral podem não fazer sentido, ou não alterar no layout.

### SELF

apenas o item individualmente;

### PROPRIEDADES AUTO

- grid-auto-flow: row; (padrão dele é row sempre)

- grid-auto-rows:
- grid-auto-columns:

### GRID OU FLEX

- usar o que dominamos mais e o que irá resolver o problema.
- observar o layout e a complexidade para implementar
- com experiência ficará claro o que usar