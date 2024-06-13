### Formas de pensar o desafio
- Pensar mobile first, ou olhar os dois para entender melhor o problema
- Tentar construir conforme os dois layouts

### Dicas de evolução
- Voltar para o desafio e inserir novas "coisas", como javascript, por exemplo, para busca.

### Grid
- olhando o desafio:
  - mobile - não precisa praticamente inserir o grid, porém ao mudar o layout para o desktop, basta apenas ajustar as colunas do grid para versão desktop

### Responsividade
- pensar em responsividade em relação aos assets utilizados. 
  - png é uma extensão mais pesada para a aplicação; usar svg ou jpg quando for possível (imagens sem fundo transparente, usar jpg.)
  - remover os "border-radius" para exportar as imagens, o css cuida da estilização
  - ícones => em svg

### Classes utilitárias
- classes que podem ser reaproveitadas em vários lugares
- tailwind => várias classes com 1 atributo, por exemplo, 
- pensar sempre em não reescrever código

### Imagens
- Usar texto "alt" em imagens que possuam realmente importância na página, que a acessibilidade possam ajudar a pessoa a tomar uma decisão no site
- quando colocar uma "img" como 100%, a imagem respeita o tamanho da caixa que ele está dentro.

### Ideias / Dicas
- Geralmente a Logo do Site, Nome, etc, é um botão para a página inicial do site; por isso no desafio, a logo de pata pode ser entendida como um botão para voltar a HOME do site.
- Verificar regras colocadas para todo o layout (root), pode ser que alguns elementos estejam pegando atributos padronizados e esteja desalinhando (no desafio, lembrar da tag "a" que estava pegando o line height de 160%)

### Container
- usado para limitar o tamanho de largura (como classe)

### Buttons
- all: unset (remove tudo o que deveria estar nos botões)

### Elementos HTML
- article: novo elemento para ser utilizado

### CSS
- margin-inline (apenas lateral); margin-block - apenas em cima e embaixo