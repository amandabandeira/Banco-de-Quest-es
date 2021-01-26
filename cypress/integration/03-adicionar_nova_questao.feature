Feature: Adicionar questao nova no banco de questões


Scenario: Adiconar uma nova questao

Given que navego para a página de login
And realizo login no site
|nome     |senha      |
|Teste01  |Completo25@| 
And clico no botao submit 
When clico no botao add new questions
And preencho os campos
|categoria|tipo           |dificuldade|questao                       |questaoCorreta     |questaoIncorreta1|questaoIncorreta2|questaoIncorreta3|referencia|
|Sports   |Multiple Choice|Medium     |Neymar é jogador de qual time?|paris saint germain|Santos           |Brazil           |Argentina        |Teste     | 
And clico para salvar uma nova questao
Then a mensagem "Success:  You have successfully submitted a trivia question!" é exibida




