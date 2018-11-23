# Desafio Avançado Collabcode aula 002
 - Descrição  
 Posicionar os elementos (logo e links) dentro da tag `header` de acordo com as posições no layout loja-phone.

 - Solução:  
 ```css
 header{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  background-color: #e24647;
}
nav{
  width:30%;
  display:inline;
}

h1, a {
  color:#fff;
  padding:0 5%;
}

h1{
  font-size:40px;
  font-family: 'ArialMT';
  margin-right:auto;
}

a{
  text-decoration: none;
  font-size:21px;
  font-family: 'SegoeUI';
  margin-left:auto;
}
```