`use strict`;

// チェックボタン押下の処理
document.querySelector('#checkButton').addEventListener('click', () => {
  const inputText = document.querySelector('#input').value;
  const shogoText = document.querySelector('#shogo').value;
  const outputText = document.querySelector('#output');
  outputText.textContent = "";

  for (let i = 0; i < shogoText.length; i++) {
    let c = shogoText.substring(i, i + 1);
    let kazu = 0;

    for (let j = 0; j < inputText.length; j++) {
      let d = inputText.substring(j, j + 1);

      if (d === c) {
        kazu = kazu + 1;
      }

    }

    c = c + "…" + kazu;

    let spanElement = document.createElement("span");
    spanElement.textContent = c ;
    outputText.appendChild(spanElement);
    outputText.insertAdjacentHTML('beforeend','<br>');

  }

});

// クリアボタン押下の処理
document.querySelector('#clearButton').addEventListener('click', () => {
  const outputText = document.querySelector('#output');
  const shogoText = document.querySelector('#shogo');
  document.querySelector('textarea').value = '';
  outputText.textContent = "";
  shogoText.textContent = "";
});