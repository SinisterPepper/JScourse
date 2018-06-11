/**
 * ПЕРЕМЕННЫЕ:
 * table - сама таблица
 * tableRows - строки таблицы
 * selectedColumnIndex - индекс выбранного столбца (нужна для поиска)
 * searchText - поисковый текст
 * notFoundRow - строка таблицы где выводится сообщение что 'ничего не было найдено'
 */
let table = null,
    tableRows = null,
    selectedColumnIndex = 1,
    searchText = null,
    notFoundRow = null;

/**
 * Функция инициализации таблицы, нужна для того чтобы всё время вызывать его после обновления таблицы с AJAX запроса
 * Допустим есть кнопка 'загрузить еще' подгружаем новые строки данных в таблицы затем вызываем этот инициализатор чтобы
 * в поиске также учавствовали новые строки
 */
function initTable() {
    table = document.getElementById('contentTable');
    tableRows = table.getElementsByTagName('tr');
    notFoundRow = table.querySelector("tfoot tr");
}

initTable();

/**
 * ПЕРЕМЕННЫЕ:
 * searchInput - поле ввода куда нужно вводить текст для поиска
 * searchBtn - кнопка 'Поиск'
 * searchColumns - радиокнопки в шапке таблицы, для выбора столбца поиска
 */
let searchInput = document.getElementById('search-text'),
    searchBtn = document.getElementById('searchBtn'),
    searchColumns = document.getElementsByName('search-column');


/**
 * Пробегаемся по всем радиокнопкам в шапке таблицы для дальнейших манипуляций
 */
for (let i = 0; i < searchColumns.length; i++) {
    // отбираем выбранную радиокнопку
    let column = searchColumns[i];
    // Создаем на него событие на клик
    column.addEventListener('click', function () {
        // Событие меняем индекс поисковой колонки на выбранную пользователем
        selectedColumnIndex = i;
        // Меняем placeholder у поля ввода для поиска
        changePlaceholder(searchInput, this.value);
        let parent = this.parentElement; // Отбираем родитель элемента то есть label
        changeLabelActivity(parent); // Меняем активность у выбранного label-a
    });
}

/**
* Событие на нажатие клавиши, а точнее если клавишу отпустили
*/
searchInput.addEventListener('keyup', function (event) {

    // Отбираем текст с помощью ключевого слова this обращаемся к нажатому элементу, а с помощью .value забираем 
    // значение этой радиокнопки, .trim() помогает убирать пробелы слева и справа
    let userInput = this.value.trim();

    searchText = userInput; // Присваиваем к поисковому тексту

    if (event.keyCode === 13) { // Смотрим не была ли нажата клавиша 'Enter'
        if (searchText !== "") { // Проверяем если поле текста пустое или нет
            searchInTable(searchText); // Вызываем функцию searchInTable для поиска внутри таблицы значения введенного текста в поле
        } else {
            console.log('Поле поиска пустое!'); // Выводим сообщение того что поле ввода для поиска пустое
        }
    }
});

/**
 * Событие на нажатие кнопки 'Поиск'
 */
searchBtn.addEventListener('click', function () {
    if (searchText !== "") { // Проверяем если поле searchText не пустое 
        searchInTable(searchText); // Ищем в таблице
    } else {
        console.log('Ввод пустой!'); // Иначе выводим результат того что поле пустое
    }
});
/**
 * 
 * @param input - поле ввода поиска 
 * @param targetColumn - выбранная колонка 
 */
function changePlaceholder(input, targetColumn) {
    text = "Ищем по ";
    // Смотрим какая именно колонка была выбрана и меняем его текст
    switch (targetColumn) {
        case "id":
            text += "идентификатору..";
            break;
        case "name":
            text += "имени..";
            break;
        case "surname":
            text += "фамилии..";
            break;
        case "city":
            text += "городу..";
            break;
        case "post_index":
            text += "почтовому индексу..";
            break;
    }
    // Полсе чего меняем placeholder у поля ввода
    input.placeholder = text;
}
/**
 * 
 * @param label - получает родителя от элемента радиокнопки input, то есть label
 */
function changeLabelActivity(label) {
    // Отбираем все label в шапке таблицы
    let columns = document.querySelectorAll("thead label");
    for (let i = 0; i < columns.length; i++) { // Пробегаемся по ним
        columns[i].classList.remove('active'); // Убираем у каждого активность
    }
    label.classList.add('active'); // Затем после цикла добавляем активность выбранному label-у
}


/**
 * Функция позволяющая искать внутри таблицы введённые пользователем текст
 * @param text: Поисковый текст от пользователя
 * Обновляет таблицу найденными результатами
 */
function searchInTable(text) {
    text = text.toLowerCase().trim(); // делаем все символы текста строчными, убираем также пробелы в начале и конце строки
    let isFound = false; // Переменная которая будет следить, найден ли какой-то элемент или нет
    for (let i = 0; i < tableRows.length; i++) { // Цикл по всем строкам таблицы
        // Отбираем у каждой строки тот столбик который мы выбрали изначально
        let td = tableRows[i].getElementsByTagName("td")[selectedColumnIndex];
        if (td) { // Проверяем существует ли он вообще

            // Забираем данные со столбца и сверяем нет ли совпадений с введеной пользователем строкой
            if (td.textContent.toLowerCase().indexOf(text) > -1) {
                tableRows[i].style.display = ""; // Если найдено, то делаем эту строку видимой для пользователя
                isFound = true; // Также меняем переменную isFound на true так как действительно есть какой-то найденный элемент
            } else {
                tableRows[i].style.display = "none"; // Если нет совпадений то скрываем данную строку в таблице
            }
        }
    }
    // После всего цикла проверяем было ли найдено хоть какой-то элемент в таблице или нет
    if (isFound) {
        // Если найдено то скрываем элемент notFoundRow у которого сообщение
        // что ничего в таблице не было найдено
        notFoundRow.classList.add('hidden');
    } else {
        // Иначе, если поиск действительно ничего не выдал, показывать сообщение что ничего не было найдено
        notFoundRow.classList.remove('hidden');
    }
}

