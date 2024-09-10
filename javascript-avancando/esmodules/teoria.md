## ES - Modules

**Import x Export**

- Sintaxe que entrou no JS no EcmaScript6 (ES6)
- Disponibilizar qualquer tipo de dado entre arquivos
- Separar código em diversos arquivos
- Isolar escopo e código

_Ambiente_

- criar os arquivos:
  -- index.html
  -- main.js
  -- utils.js
- dentro do index.html

```html
<script src="main.js" type="module">
```

`type = module` habilita a utilização de import x export

**Import e Export Simples**

- importar qualquer arquivo e ele serã executado imediatamente, como uma função é executada

**Default Import e Export**

```js
// somente 1 export default por arquivo
export default 'texto qualquer'

const message = "mensagem"
export default message
```

- para exportar mais de uma
  -- named export

Import as

- importar alterando o nome que está no arquivo

Import '\*' (múltiplos)

- importa tudo o que tem no arquivo e organiza tudo em um objeto que é criado na importação
