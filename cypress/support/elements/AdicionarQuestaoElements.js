class AdicionarQuestaoElements{

    

    cbkCategoria = 'select#trivia_category'
    cbkTipo = 'select#trivia_type'
    cbkDificuldade = 'select#trivia_difficulty'

    inputQuestion = '#trivia_question'
    inputQuestaoCerta = '#correct_answer'
    inputQuestaoIncorreta1 = "#incorrect_answer_1"
    inputQuestaoIncorreta2 = '#incorrect_answer_2'
    inputQuestaoIncorreta3 = '#incorrect_answer_3'
    inputReferencia = '#trivia_reference'

    btnSubmit = 'form#new_question > div > button'
    msgSucesso = 'div.container:eq(0)'
}
   
export default AdicionarQuestaoElements;

