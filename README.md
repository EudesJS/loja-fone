# HTML

É uma linguagem de marcação que tem as seguintes responsabilidades:

- Conteúdo;
- Semântica(utilização das tags de forma correta);
- Estrutura

- `<h1>`- Heading 1-6  

Usamos quando queremos definir um título

- `<a>` - Link (a - anchor)  

    Usamos para definir a navegação do usuário. Se você tem um texto que você quer que o usuário seja redirecionado para outro lugar você pode usar esta tag combinada com o atributo `href`. Exemplo de um `a` que o usuário é redirecionado para o site da collabcode.training:

    ```html
    <a href="https://www.collabcode.training">Collabcode.Training</a>
    ```
- Seletores: `Tag, ID e Class`

    O seletor de tag é utilizado através do nome da tag, ficando restrito ao escopo daquela tag.

    Exemplo de utilização de um seletor de tag em um elemento _`parágrafo`_:

    ```html
    <p>Este é um texto dentro da tag parágrafo</p>
    ```
    Para selecionar uma tag no CSS basta colocar apenas o nome da tag, conforme exemplo:
    ```css
    p {

    } 
    ```


    O seletor com o atributo ID é utilizado nos elementos para atribuir uma identificação(ID).  
    O nome do ID é de livre escolha e deve ser único na página.

    Exemplo de utilização do atributo ID em um elemento _`div`_:
    ```html
    <div id="nome-escolhido"></div>
    ```
    Para selecionar um ID no CSS basta colocar uma `#`(hashtag) seguido do nome escolhido para o ID, conforme exemplo:
    ```css
    #nome-escolhido{

    }
    ```
        

    O seletor com o atributo Class é utilizado nos elementos para atribuir uma determinada classe.  
    O nome da classe é de livre escolha e podem ser utilizados N elementos com a mesma classe.

    Exemplo de utilização do atributo classe em um elemento _`div`_:
    ```html
    <div class="nome-escolhido"></div>
    ```
    Para selecionar uma classe no CSS basta colocar um `.`(ponto) seguido do nome escolhido para a classe, conforme exemplo:
    ```css
    .nome-escolhido{

    }
    ```

# CSS

É uma linguagem de estilo, isto significa que ela tem as seguintes responsabilidades:

- Estilização visual;

- `Reset CSS`  
Utilizado para predenifir um comportamento padrão das regras CSS em todos os browsers, reseta as configurações, facilitando a aplicação de novos estilos.   

- `Propriedade float`  
Ao utilizar a propriedade float o browser assume um novo contexto.  
O elemento afetado "flutua" e passa a ocupar o tamanho do conteúdo em si, enquanto os demais elementos assumem a posição a qual o elemento flutuante ocupava.  

    * Exemplo de utilização da propriedade float:  
      ```css
      float: left;  
      ```      
      * O comportamento acima **não afeta o conteúdo** dos elementos próximos, os quais sempre estarão visíveis, não ocupando o lugar do elemento com a propriedade "float".  
O que define a **largura(width)** e a **altura(height)** de um elemento com a propriedade float é o **conteúdo**, caso não sejam definidos valores para a largura e a altura.  
É importante frisar que, na utilização da propriedade float o elemento "pai" ignora o elemento "filho" no novo contexto.  

  * _Para que haja um recálculo deste novo contexto, e o elemento "pai" passe a considerar os elementos "filhos" que estão com a propriedade "float", podemos utilizar a propriedade overflow com o atributo hidden no elemento "pai" conforme exemplo:_ 

    ```css
    elemento-pai{
    overflow: hidden;
    }
    ```  
- `Propriedade Position`

    A propriedade position especifica como um elemento se posiciona em uma página.  
    As propriedades **Top**, **Right**, **Bottom** e **Left** determinam a localização final de um elemento posicionado.

    - _`Position absolute`_  
        A **position absolute**(posição absoluta), assim como a propriedade float, cria um "novo contexto" no comportamento da página, não afetando mais os elementos próximos em relação a seus posicionamentos.
        A largura e a altura de um elemnto com a propriedade **position absolute** também passam a ser definidas pelo conteúdo do elemento.
        Top, Right, Bottom e Left movimentam o elemento em relação à página.
