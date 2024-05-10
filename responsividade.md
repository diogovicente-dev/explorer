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

analisar as interfaces mobile e desktop, avaliar as "caixas"
