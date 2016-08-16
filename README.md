# MinJq

Esse código é um estudo das funcionalidades básicas do jQuery.
As funcionalidades foram selecionas a partir da documentação do [AngularJs](https://docs.angularjs.org/api/ng/function/angular.element).

MinJq é uma função (como o jQuery) colocada no objeto "window", com os nomes "$" e "$$", caso já não estejam definidos por outra biblioteca.

Esse código adiciona e substitui funções nos protótipos de "Element" e "EventTarget" (ou "Node", no caso do IE), ampliando as funcionalidades dos nós do próprio DOM.

Também cria as funções "isArray" no protótipo de "Array", e "bind" no protótipo de "Function", caso não existam.

O protótipo de MinJq é adicionado a propriedade ".fn", como no jQuery, criando a possibilidade do mesmo sistema de plugins que existe com o jQuery.


### Lista de funções (linha 500 no código)

Função         | Protótipo de "Element"    | $ (MinJq)           | Descrição 
-------------- | ------------------------- | ------------------- | ------------------------------------------
addClass       | :white_check_mark:        | :white_check_mark:  | Adiciona uma classe ao elemento
after          | :white_check_mark:        | :white_check_mark:  | Adiciona o elemento após o elemento de parâmetro
append         | :white_check_mark:        | :white_check_mark:  | Adiciona o elemento de parâmetro após este elemento
attr           | :white_check_mark:        | :white_check_mark:  | Configura ou busca o valor de um atributo
before         | :white_check_mark:        | :white_check_mark:  | Adiciona o elemento antes do elemento de parâmetro
bind           | :white_check_mark:        | :white_check_mark:  | O mesmo que ".on"
children       | :x:                       | :white_check_mark:  | Retorna os filhos dos nós na seleção
clone          | :white_check_mark:        | :white_check_mark:  | Cria um clone do nó selecionado (deep)
contents       | :x:                       | :white_check_mark:  | Retorna o conteúdo do nó selecionado (sem texto)
css            | :white_check_mark:        | :white_check_mark:  | Configura o atributo "style" dos nós selecionados
data           | :white_check_mark:        | :white_check_mark:  | Configura ou retorna informações adicionais do nó selecionado
detach         | :white_check_mark:        | :white_check_mark:  | Remove os nós do DOM
empty          | :white_check_mark:        | :white_check_mark:  | Remove todos os elementos de dentro do nó
eq             | :x:                       | :white_check_mark:  | Retorna o nó do índice informado (de dentro do obj/lista $)
find           | :white_check_mark:        | :white_check_mark:  | Encontra os nós de acordo com a busca (.querySelectorAll)
hasClass       | :white_check_mark:        | :white_check_mark:  | Verifica se o nó tem a classe informada
html           | :white_check_mark:        | :white_check_mark:  | Retorna ou configura o conteúdo HTML do nó (.innerHTML)
is             | :white_check_mark:        | :white_check_mark:  | Verifica se o nó esta de acordo com o critério informado (CSS ou nó)
is$            | :x:                       | :white_check_mark:  | Verifica se é o objeto MinJq ($ ou $$)
isArray        | :x:                       | :white_check_mark:  | Verifica se é um vetor
isDate         | :x:                       | :white_check_mark:  | Verifica se é um objeto de data
isDef          | :x:                       | :white_check_mark:  | Verifica se é diferente do tipo indefinido ("undefined")
isFunc         | :x:                       | :white_check_mark:  | Verifica se é uma função
isNumber       | :x:                       | :white_check_mark:  | Verifica se pe um número
isString       | :x:                       | :white_check_mark:  | Verifica se é uma String
isUndef        | :x:                       | :white_check_mark:  | Verifica se é do tipo indefinido ("undefined")
next           | :white_check_mark:        | :white_check_mark:  | 
off            | :white_check_mark:        | :white_check_mark:  | Remove um ouvinte de um evento (.removeEventListener)
offset         | :white_check_mark:        | :white_check_mark:  | Retorna a posição do nó em relação a Tela do navegador
on             | :white_check_mark:        | :white_check_mark:  | Adiciona um ouvinte para um evento (.addEventListener)
one            | :white_check_mark:        | :white_check_mark:  | O mesmo que ".on", mas só executa o ouvinte uma certa quantidade de vezes
parent         | :white_check_mark:        | :white_check_mark:  | Retorna o nó pai dos nós selecionados (1 nível)
parents        | :white_check_mark:        | :white_check_mark:  | Retorna os nós pais dos nós selecionados (hierarquia toda)
position       | :white_check_mark:        | :white_check_mark:  | Retorna a posição do nó em relação ao nó pai
prepend        | :white_check_mark:        | :white_check_mark:  | 
prop           | :white_check_mark:        | :white_check_mark:  | Configura ou retorna o valor de uma propriedade lógica (checked...)
ready          | :x:                       | :white_check_mark:  | Adiciona um ouvinte para ser executado assim que a página for carregada ("DOMContentLoaded")
remove         | :white_check_mark:        | :white_check_mark:  | Remove o elemento do DOM
removeAttr     | :white_check_mark:        | :white_check_mark:  | Remove um atributo do nó
removeClass    | :white_check_mark:        | :white_check_mark:  | Remove uma classse do nó
removeData     | :white_check_mark:        | :white_check_mark:  | Remove uma informação adicional do nó
replaceWith    | :white_check_mark:        | :white_check_mark:  | Troca o nó atual pelo nó parâmetro
text           | :white_check_mark:        | :white_check_mark:  | Configura ou retorna o texto do nó
toggleClass    | :white_check_mark:        | :white_check_mark:  | Configura ou remove uma classe ao nó
triggerHandle  | :bangbang:                | :bangbang:          | :bangbang: Pendente!
unbind         | :white_check_mark:        | :white_check_mark:  | O mesmo que ".off"
val            | :white_check_mark:        | :white_check_mark:  | Configura ou retorna o valor do nó
wrap           | :white_check_mark:        | :white_check_mark:  | Envolve o nó atual em um nó informado como parâmetro


## Pendentes
- [ ] Implementação de ".triggerHandle".
- [ ] Documentação de como usar este código.
- [ ] Correção da impl. de ".is$", atualmente pode apresentar problema com "iframe"s.
- [ ] Documentação da substituição de ".addEventListener" e ".removeEventListener" em "EventTarget".
- [ ] Rever testes com Jasmine, nem todas as funcionalidades estão testadas até então.
- [ ] Criar exemplos onde este código é usado junto ao AngularJs.
- [ ] Criar exemplos de sites usando apenas este código (sem jQuery ou AngularJs).



