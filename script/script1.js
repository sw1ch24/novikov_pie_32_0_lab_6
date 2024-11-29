function task1(){
    function getСircumference(R) {
        if (R === undefined) {
            alert("Нет радиуса");
        };
        return 2 * Math.PI * R;
    };

    let R = document.getElementById('inputR').value;             // обработка инпута
    if (isNaN(R) || R == '') {                                   // проверка на неправильный ввод числа
        document.getElementById('outputTask1').innerHTML = '<p class="text-danger">Неверный ввод!</p>';                             
        return;
    } else if (R < 0) {
        document.getElementById('outputTask1').innerHTML = '<p class="text-danger">Радиус не может быть отрицательным!</p>';
        return;
    } else {
        R = Number(R);                                           // преобразование строки в число
    };
    
    let circumference = getСircumference(R).toFixed(2);          // вычисление длины окружности и округление
    let output = `<p>Формула нахождения длины окружности: L =  2&pi;R</p>
    <p>L = 2&pi; * ${R} &#8776; ${circumference}`; 

    document.getElementById('outputTask1').innerHTML = output;
};
