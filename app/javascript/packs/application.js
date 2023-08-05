document.addEventListener('DOMContentLoaded', function() {
  const addAnswerLink = document.getElementById('add-answer');
  const answersContainer = document.getElementById('answers');

  if (addAnswerLink && answersContainer) {
    addAnswerLink.addEventListener('click', function(e) {
      e.preventDefault();
      const time = new Date().getTime();
      const newAnswerHtml = `<div class='nested-fields'>
        <input type='text' name='question[answers_attributes][${time}][description]' id='question_answers_attributes_${time}_description'>
        <input type='hidden' name='question[answers_attributes][${time}][_destroy]' id='question_answers_attributes_${time}__destroy' value='false'>
        <input type='checkbox' name='question[answers_attributes][${time}][correct]' id='question_answers_attributes_${time}_correct'> Correta?
        <a href='#' class='remove-answer'>Remover</a>
      </div>`;

      const newAnswerDiv = document.createElement('div');
      newAnswerDiv.innerHTML = newAnswerHtml;
      answersContainer.appendChild(newAnswerDiv);
    });

    answersContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('remove-answer')) {
        e.preventDefault();
        const answerDiv = e.target.closest('.nested-fields');
        const destroyInput = answerDiv.querySelector('input[type="hidden"]');
        destroyInput.value = 'true';
        answerDiv.style.display = 'none';
      }
    });
  }
});
