# Desafio Avançado Colabcode aula 011

- Descrição
   - Descubra porquê o layout se comporta de forma normal ao redimensionar, tanto no Firefox quanto no Chrome,
 mas ao utilizar o Chrome Dev Tools e diminuir até o viewport mobile o layout se mantém igual a versão Desktop.

 - Resposta:

    - Este comportamento é solucionado utilizando a seguinte meta tag dentro da tag head do HTML:
    
      ```html 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
      ```