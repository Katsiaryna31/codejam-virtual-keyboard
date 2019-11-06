'use strict';

const numberRows = 5;

const keyRow1 = [
  ['backquote', 'ё', 'Ё', '`', '~', 192],
  ['digit1', '1', '!', '1', '!', 49],
  ['digit2', '2', '"', '2', '@', 50],
  ['digit3', '3', '№', '3', '#', 51],
  ['digit4', '4', ';', '4', '$', 52],
  ['digit5', '5', '%', '5', '%', 53],
  ['digit6', '6', ':', '6', '^', 54],
  ['digit7', '7', '?', '7', '&', 55],
  ['digit8', '8', '*', '8', '*', 56],
  ['digit9', '9', '(', '9', '(', 57],
  ['digit0', '0', ')', '0', ')', 48],
  ['digit-', '-', '', '-', '', 189],
  ['equal=', '=', '+', '=', '+', 187],
  ['backspace', 'backspace', 'backspace', 'backspace', 'backspace', 8]
];

const keyRow2 = [
  ['tab', 'tab', 'tab', 'tab', 'tab', 9],
  ['keyQ', 'й', 'Й', 'q', 'Q', 81],
  ['keyW', 'ц', 'Й', 'w', 'W', 87],
  ['keyE', 'у', 'У', 'e', 'E', 69],
  ['keyR', 'к', 'К', 'r', 'R', 82],
  ['keyT', 'е', 'Е', 't', 'T', 84],
  ['keyY', 'н', 'Н', 'y', 'Y', 89],
  ['keyU', 'г', 'Г', 'u', 'U', 85],
  ['keyI', 'ш', 'Ш', 'i', 'I', 73],
  ['keyO', 'щ', 'Щ', 'o', 'O', 79],
  ['keyP', 'з', 'З', 'p', 'P', 80],
  ['bracketLeft', 'х', 'Х', '[', '{', 219],
  ['bracketRight', 'ъ', 'Ъ', ']', '}', 221],
  ['del', 'del', 'del', 'del', 'del', 46]
];

const keyRow3 = [
  ['capsLock', 'capsLock', 'capsLock', 'capsLock', 'capsLock', 20],
  ['keyA', 'ф', 'Ф', 'a', 'A', 65],
  ['keyS', 'ы', 'Ы', 's', 'S', 83],
  ['keyD', 'в', 'В', 'd', 'D', 68],
  ['keyF', 'а', 'А', 'f', 'F', 70],
  ['keyG', 'п', 'П', 'g', 'G', 71],
  ['keyH', 'р', 'Р', 'h', 'H', 72],
  ['keyJ', 'о', 'О', 'j', 'J', 74],
  ['keyK', 'л', 'Л', 'k', 'K', 75],
  ['keyL', 'д', 'Д', 'l', 'L', 76],
  ['semicolon', 'ж', 'Ж', ';', ':', 186],
  ['quote', 'э', 'Э', '&rsquo;', '&quot;', 222],
  ['enter', 'enter', 'enter', 'enter', 'enter', 13]
];

const keyRow4 = [
  ['shiftLeft', 'shift', 'shift', 'shift', 'shift', 16],
  ['keyZ', 'я', 'Я', 'z', 'Z', 90],
  ['keyX', 'ч', 'Ч', 'x', 'X', 88],
  ['keyC', 'с', 'С', 'c', 'C', 67],
  ['keyV', 'в', 'В', 'v', 'V', 86],
  ['keyB', 'и', 'И', 'b', 'B', 66],
  ['keyN', 'т', 'Т', 'n', 'N', 78],
  ['keyM', 'ь', 'Ь', 'm', 'M', 77],
  ['comma', 'б', 'Б', ',', '<', 188],
  ['dot', 'ю', 'Ю', '.', '>', 190],
  ['slash', '.', ',', '/', '?', 191],
  ['arrowTop', '&uarr;', '&uarr;', '&uarr;', '&uarr;', 38],
  ['shiftRight', 'shift', 'shift', 'shift', 'shift', 16]
];

const keyRow5 = [
  ['ctrl', 'ctrl', 'ctrl', 'ctrl', 'ctrl', 17],
  ['win', 'win', 'win', 'win', 'win', 91],
  ['alt', 'alt', 'alt', 'alt', 'alt', 18],
  ['space', '', '', '', '', 32],
  ['alt', 'alt', 'alt', 'alt', 'alt', 18],
  ['arrowLeft', '&larr;', '&larr;', '&larr;', '&larr;', 37],
  ['arrowBottom', '&darr;', '&darr;', '&darr;', '&darr;', 40],
  ['arrowRight', '&rarr;', '&rarr;', '&rarr;', '&rarr;', 39],
  ['ctrl', 'ctrl', 'ctrl', 'ctrl', 'ctrl', 17]
];

const rowsArray = [
  keyRow1,
  keyRow2,
  keyRow3,
  keyRow4,
  keyRow5
];

if (!localStorage.getItem('Lang')) {
  localStorage.setItem('Lang', 'rus');
}

let block = document.createElement('div');
block.className = 'container';
document.body.append(block);

let textArea = document.createElement('textarea');
textArea.setAttribute('rows', '20');
textArea.setAttribute('cols', '60');
block.append(textArea);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
block.append(keyboard);

let row = document.createElement('div');
row.className = 'row';

let createRow = () => {
  let newRow = row.cloneNode(true);
  keyboard.append(newRow);
};

for (var i = 1; i <= numberRows; i++) {
  createRow();
}

let rows = document.querySelectorAll('.row');
for (var j = 0; j < rows.length; j++) {
  let rowNumber = j + 1;
  rows[j].classList.add('row' + rowNumber);
}

let button = document.createElement('div');
button.className = 'button';

let langButton = document.createElement('div');
langButton.className = 'lang';

let caseSymbol = document.createElement('div');
caseSymbol.className = 'case';

let takeButton = () => {
  for (let b = 0; b < rowsArray.length; b++) {
    let row = document.querySelector('.row' + (b + 1));
    const keyRow = rowsArray[b];
    for (let a = 0; a < keyRow.length; a++) {
      const newButton = button.cloneNode(true);
      newButton.classList.add(keyRow[a][0]);
      newButton.addEventListener('mousedown', onButtonDown);
      newButton.append(getButtonLang('rus', keyRow, a));
      newButton.append(getButtonLang('eng', keyRow, a));
      row.append(newButton);
    }

    setLanguage();
  }
}

let getButtonLang = function(lang, keyRow, a) {
  const newButton = langButton.cloneNode(true);
  newButton.classList.add(lang);

  const langIncrement = lang === 'rus' ? 0 : 2;
  newButton.append(getButtonSymbol(keyRow[a][1 + langIncrement], 'down'))
  newButton.append(getButtonSymbol(keyRow[a][2 + langIncrement], 'up'))

  return newButton;
}

let getButtonSymbol = function(symbol, symbolCase) {
  const newUpEngSymbol = caseSymbol.cloneNode(true);
  newUpEngSymbol.classList.add(symbolCase);
  newUpEngSymbol.innerHTML = symbol;
  return newUpEngSymbol;
}

const pressedKeys = [];
const codesCombination = [16, 18];

let findPressedKey = (pressedKeys) => {
  for (let c = 0; c < rowsArray.length; c++) {
    const keyRow = rowsArray[c];
    for (let d = 0; d < keyRow.length; d++) {
      if (pressedKeys.includes(keyRow[d][5])) {
        const activeClass = '.' + keyRow[d][0];
        let activeButton = document.querySelector(activeClass);
        activeButton.classList.add('button--active');
      }
    }
  }
}

let removePressedKey = () => {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(function (but) {
    if (but.classList.contains('button--active')) {
      but.classList.remove('button--active');
    }
  })
}

let onKeyDown = (evt) => {
  const lastPressed = pressedKeys[pressedKeys.length - 1];
  const pressedKey = evt.keyCode;
  pressedKeys.push(pressedKey);
  findPressedKey(pressedKeys);

  if (evt.shiftKey && lastPressed !== 16) {
    const down = document.querySelectorAll('.down');
    const up = document.querySelectorAll('.up');
    down.forEach(function (symbol) {
      symbol.classList.add('visually-hidden');
    })
    up.forEach(function (symbol) {
      symbol.classList.remove('visually-hidden');
    })
  }
};

let onButtonDown = (evt) => {
  textArea.setRangeText(
    evt.target.innerHTML,
    textArea.selectionStart,
    textArea.selectionEnd,
    'end'
  )
  window.getSelection().removeAllRanges();
}

let onKeyUp = function () {
  if (codesCombination.includes(pressedKeys[pressedKeys.length - 1]) && codesCombination.includes(pressedKeys[pressedKeys.length - 2])) {
    let lang = localStorage.getItem('Lang');
    lang = lang === 'rus' ? 'eng' : 'rus';
    localStorage.setItem('Lang', lang);
    setLanguage();
  }

  while (pressedKeys.length > 0) {
    pressedKeys.pop();
    removePressedKey();
  }
  const down = document.querySelectorAll('.down');
  const up = document.querySelectorAll('.up');
  down.forEach(function (symbol) {
    symbol.classList.remove('visually-hidden');
  })
  up.forEach(function (symbol) {
    symbol.classList.add('visually-hidden');
  })
};

let setLanguage = () => {
  const lang = localStorage.getItem('Lang');

  const eng = document.querySelectorAll('.eng');
  const rus = document.querySelectorAll('.rus');
  if (lang === 'rus') {
    eng.forEach(function (engButton) {
      engButton.classList.remove('visually-hidden');
    });
    rus.forEach(function (rusButton) {
      rusButton.classList.add('visually-hidden');
    });
  } else {
    eng.forEach(function (engButton) {
      engButton.classList.add('visually-hidden');
    });
    rus.forEach(function (rusButton) {
      rusButton.classList.remove('visually-hidden');
    });
  }
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

takeButton();
