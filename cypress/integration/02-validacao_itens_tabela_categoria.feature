#language: en
Feature: Busca no Banco de Questões

    
Scenario: Busca de questâo pela categoria e validar que a listagems possui 25 itens e que possui paginacao na página

Given que navego para a página de busca
And digito 'Science: Computers' no campo de busca
And seleciono 'Category'
When clico no botão de buscar
Then a listagem de questao deve ter 25 itens 
And o controle de paginacao deve ser exibido
