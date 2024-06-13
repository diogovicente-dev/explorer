**RESPONSIVIDADE**

Formatar o layout para que funcione em diferentes telas (web, mobile)

**1ª REGRA**
Mobile-First

- Fazer sempre para o mobile primeiro

**2ª REGRA**
Mudar para unidades de medida relativas, não usar unidades de medidas fixas (pixel)

REM = Root EM

:root {
font-size: 62.5%;
}

este ajuste no root faz com que o padrão dos navegadores (16px) possa ser usado como 10px no código; no caso, eu preciso definir depois a font-size para 1.6rem no body da aplicação.

48px / 16px = 3.0rem (sem alterar o font-size para 62.5%)
48px / 10px = 4.8rem (alterando root para font-size 62.5%)

quando o ajuste for menor do que 4 px, pode-se pensar em manter fixo (bordas, espaçamento entre letras, )

**VERSÃO DESKTOP**

Linha META name"viewport"

@media

/_media queries_/

geralmente, para versão desktop, usar, no CSS:

´´´css
@media (mi-width: 40em) {
inserir regras
}
´´´

analisar as interfaces mobile e desktop, avaliar as "caixas" que poderão ser "readequadas"

**MOBILE FIRST**
mesmo sendo mobile first, devemos observar o padrão de desktop para entender como será feito, entender para facilitar as alterações (adaptações) no
código pensando em responsividade.

**MELHORIA DESENHO DAS FONTES**
aplicar parâmetros no atributo universal do CSS

´´´css

- (\*){
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  ´´´
  **PROJETO CHEESECAKE**

Ao inserir o atributo box-sizing: border box, colocanco um max-width, tudo o que for inserido na "caixa" (padding, margin) o conteúdo irá se adaptar para atender o atributo do "pai" que colocamos.

Espaços (entre itens) unificados, para manter padrão.

**CLAMP**
CLAMP usado para muitos pontos de quebra e precisa de maior flexibilidade para as fontes.

clamp () é uma função e funciona da seguinte forma:

clamp (mínimo, ideal, alto) - valores das fontes (font-size, etc)

colocado no "código" do css fora do @media;
verificar como se comporta na ferramenta de desenvolvedor para adaptar as telas

**uso do mayke**

mínimo: menor valor entre das versões mobile e desktop (geralmente do mobile) (1.4rem por exemplo)

máximo: maior valor entre das versões mobile e desktop (geralmente do desktop) (3.6rem por exemplo)

ideal: valor entre os dois que pode ser flexível (geralmente mayke coloca 2vw + 1rem (viewport + rem) para ser flexível equanto
vai aumentando ou reduzindo)
