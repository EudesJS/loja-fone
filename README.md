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