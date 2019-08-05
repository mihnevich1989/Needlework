(function() {
  // Скрипт слайд-текста

  //получаю NodeList каждого блока
  let arr1 = Array.from(document.querySelectorAll("#one i"));
  let arr2 = Array.from(document.querySelectorAll("#two i"));
  let arr3 = Array.from(document.querySelectorAll("#three i"));
  let line = document.getElementById("line");
  let allArrDiv = Array.from(document.querySelectorAll("div.animation"));

  //инициирую первоналчальный запуск для отображения и присваивания класса
  arr3ReplaceArr1();

  //прохожусь циклом по каждому элементу массива, меняю классы
  function arr3ReplaceArr1() {
    arr3.forEach(function(el, i) {
      setTimeout(function() {
        arr3[i].classList.replace("in", "out");
      }, 100 * i);
    });
    arr1.forEach(function(el, i) {
      setTimeout(function() {
        arr1[i].classList.replace("out", "in");
        line.style.width = 60 + allArrDiv[0].offsetWidth + "px";
      }, 100 * i);
    });
  }

  function arr1ReplaceArr2() {
    arr1.forEach(function(el, i) {
      setTimeout(function() {
        arr1[i].classList.replace("in", "out");
      }, 100 * i);
    });
    arr2.forEach(function(el, i) {
      setTimeout(function() {
        arr2[i].classList.replace("out", "in");
        line.style.width = 60 + allArrDiv[1].offsetWidth + "px";
      }, 100 * i);
    });
  }

  function arr2ReplaceArr3() {
    arr2.forEach(function(el, i) {
      setTimeout(function() {
        arr2[i].classList.replace("in", "out");
      }, 100 * i);
    });
    arr3.forEach(function(el, i) {
      setTimeout(function() {
        arr3[i].classList.replace("out", "in");
        line.style.width = 60 + allArrDiv[2].offsetWidth + "px";
      }, 100 * i);
    });
  }

  //создаю проверку на наличие класса для запуска цикла по соответствующему массиву
  function checkClassArr() {
    let true1 = arr1.every(function(item) {
      return item.classList.contains("in");
    });
    let true2 = arr2.every(function(item) {
      return item.classList.contains("in");
    });
    let true3 = arr3.every(function(item) {
      return item.classList.contains("in");
    });

    if (true3) {
      arr3ReplaceArr1();
    } else if (true1) {
      arr1ReplaceArr2();
    } else if (true2) {
      arr2ReplaceArr3();
    }
  }

  //запускаю проверку с интервалом
  setInterval(checkClassArr, 5000);
  // окончание скрипта слайд-текста
})();
