# Desafio Básico Collabcode aula 003

- Descrição  
  * Adicionar espaçamento entre os links contidos na tag **`nav`** conforme as medidas especificadas no layout loja-fone.

 - Solução:  
    ```css
    a:nth-child(-n+2) {
     margin-right:60px;
    }
    ```