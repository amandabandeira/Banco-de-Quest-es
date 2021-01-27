# Processo seletivo Ci&T: Teste de Automação para QA - CI&T

### Tecnologia utilizada
* Cypress - Utilizando JavaScript
* Cucumber - BDD(Gherkin)
* Padrão de Projeto -  Page Object
* Relatórios do Mochawesome e Cucumber HTML

#### libs utilizadas para relatório com mocha
* mocha > lib para execução de teste</br>
* mochawesome > formato de relatorio nativo do cypress</br>
* mochawesome-merge > unificao resultado de varios json em um unico arquivo</br>
* mochawesome-report-generator > gera um relatorio baseado em .json</br>
* cypress-multi-reporters > permite o uso de multiplos relatorios ao final da execução</br>

### Observação:
* Para este projeto adicionei dois tipos diferente de gerar relatório, a primeira é usando o mocha e a segunda utilizando o cucumber html.

 * Acessar o relatório utilizando o mocha => Banco-de-Quest-es/mochawesome-report/full_report.html</br> 
 * Acessar o relatório utilizando o cucumber html =>Banco-de-Quest-es/cypress/reports/cucumber_report.html


### Como executar o projeto
Existe duas maneiras para executar o projeto que são:

* Vê o resultado dos teste via terminal => npx cypress run</br>
* Vê os teste via Tela => npx cypress open 

### Instruções gerais
Iremos utilizar o site https://opentdb.com/ para realizar nosso teste, onde faremos alguns cenários utilizando a linguagem Gherkin.

À princípio, daremos um modelo para que você apenas crie os passos da automação. Depois, será necessário criar um teste baseado numa descrição de cenário. Por fim, você terá que criar um cenário que ache adequado para a situação. As descrições detalhadas dos passos estarão mais abaixo.

O teste pode ser feito em qualquer linguagem de programação e com qualquer framework de teste de interface. Fica a seu critério escolher o que se adequa mais ao seu perfil e/ou ao seu conhecimento.

A entrega desse teste pode ser feita através de um arquivo .zip ou .rar com os arquivos ou pode ser através de um link de seu Git pessoal (por exemplo).

Critérios para avaliação </br>
- [x] Organização de código, arquitetura e boas práticas de programação </br>
- [x] Criação de casos de testes utilizando Gherkin</br>
- [x] Utilização de algum padrão de desenvolvimento de automação</br>
- [x] Como foi a utilização do framework de automação e da linguagem de programação</br>
- [x] Estruturação de relatórios (diferencial)</br>
- [ ] Facilidade na execução dos testes (por exemplo, utilização do Docker)(diferencial)</br>

### Primeira parte
Temos o seguinte cenário, escrito em Gherkin, que devemos automatizar:

* Funcionalidade: Busca no Banco de Questões</br> 
* Cenário: Busca por questão inexistente</br> 
* Dado que navego para a página de busca do banco de questões</br> 
* E digito 'Science: Computers' no campo de busca</br> 
* Quando clico no botão de buscar</br> 
* Então visualizo uma mensagem de erro com o texto 'No questions found.'<br>

Você irá agora pegar esse cenário e realizar a automação dele no site passado anteriormente.

### Segunda parte
Agora, estamos com a seguinte informação de um novo cenário que temos que testar para o usuário final:

* Precisamos fazer uma busca na categoria por Science: Computers e verificar se a listagem de questões está com 25 itens e se o controle de paginação irá aparecer.
Com essa informação em mãos, vamos para a codificação desse cenário de teste. Leve em consideração o que foi feito previamente e tente escrever o cenário em Gherkin antes de começar qualquer código.

### Terceira parte
* Por fim, você terá que criar um cenário novo que não foi descrito anteriormente. A ideia aqui é realmente ver como você faria um cenário do zero, criando o Gherkin e depois fazendo a automação dele. Abuse e use do que foi feito anteriormente para te ajudar!

