### Estrutura em GRID com Header e Footer

Com o grid tica mais fácil criar estruturas fixas de header e footer (overflow-y)

### Variáveis CSS (Cores para o Projeto)

Por que?
Em um projeto, ideal "escrever" uma vez a cor e depois vamos reaproveitanto; se por acaso a cor mudar, basta alterar apenas na variável, que
todo o projeto será alterado.

em :root {
--(nome da variável): (código da cor)
--color-base: #ffffff;
}

para aplicar uma cor:

color: var(--color-base)

Deixar o link das fontes no html sempre depois, para dar o tempo de carregar o que precisa na página.

Font Family: colocar no root o mais geral.

### Proporção das Imagens

Padrão: 1:1, 16:9, 4:3, 9:16

"aspect-ratio: 16/9"

### Filtros CSS

"filter:"
tem várias propriedades

- hue-rotate () => em graus, pode inserir diversas propriedades

### Transições CSS

As alterações e animações serem mais suaves

"transition-property" = insere quais propriedades queremos transição,
tem que ser colocado no elemento css "original", ou elemento sem ser os pseudo classes;

- property (filter, transform, )
- duration - tempo de duração da transição
- delay - atraso (tempo) para iniciar a duration da transição
- time function

### Animações CSS

- calc(4rem - 2px)
- calc(4rem \* 4)
- Toda animação tem um ponto de partida e um ponto final.

@keyframes + (nome da animação que eu quiser)

´´´css
@keyframes move {
0% / from {

}

100% / to {

}
}
´´´

início e fim pode usar 0% ou "from" normalmente.

animation-name: nome da animação que eu fiz
animation-duration: tempo da animação
animation-fill-mode:

- backwards: volta para o "início" da animação
- forwards: fica como no fim da animação
- both

animation-direction: (reverse, alternate, alternate-reverse)
animation-iteration-count:

animation-delay:
animation-timing-function:

-- cubic-bazier (x1, y1, x2, y2)

animation-play-state:

shorthand animation

--animation: move 1s forwards alternate infinite;
--- move=nome / 1s=duration / alternate=direction / infinite=iteration-count
