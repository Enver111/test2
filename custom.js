// Добавляем обработчик события при нажатии на бургер-меню
document.getElementById('mobile-menu').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    // Переключаем класс для бургер-меню и стандартного меню
    menu.classList.toggle('active');
    this.classList.toggle('active');
  });
  