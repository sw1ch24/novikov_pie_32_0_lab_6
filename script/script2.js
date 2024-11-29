function task2(){
    function getRandomInt(min = 0, max = 9) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    function createArray(M, N) {
        let arr = [];
        for (let i = 0; i < M; i++){
            let row = []
            for (let j = 0; j < N; j++){
                row.push(getRandomInt());
            };
            arr.push(row);
            row = [];
        };
        return arr;
    };
 
    let checkWrongInput = (Num) => isNaN(Num) || Num == '';
    let checkPositiveInteger = (Num) => Num > 0 && Num % 1 == 0;
    
    let M = document.getElementById('inputM').value;                // обработка инпута чисел
    let N = document.getElementById('inputN').value;

    if (checkWrongInput(N) || checkWrongInput(M)) {                 // проверка на неправильный ввод
        document.getElementById('outputSum').innerHTML = '';        
        document.getElementById('outputArray').innerHTML = '<p class="text-danger">Неверный ввод!</p>';
        return;
    } else if (!checkPositiveInteger(N) || !checkPositiveInteger(M)) {
        document.getElementById('outputSum').innerHTML = ''; 
        document.getElementById('outputArray').innerHTML = '<p class="text-danger">Числа должны быть целыми и положительными!</p>';
        return;
    } else {
        M = Number(M);                                      // преобразование строки в число
        N = Number(N); 
    };
    let arr = createArray(M, N);                            // создание массива
    let sumArr = arr.map(function(row) {                    // подсчета суммы элементов каждой строки и создание массива с результатами
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
        };
        return sum; 
    });
    let outputArr = '<p>Исходная матрица:</p>' + arr.map((row) => `<pre>${row.join('   ')}</pre>`).join('\n');
    let outputSum = sumArr.map((sum, index) => `<p>Сумма чисел ${index + 1} строки = ${sum}</p>`).join('\n');

    document.getElementById('outputArray').innerHTML = outputArr;
    document.getElementById('outputSum').innerHTML = outputSum;                          
};
