// Запросы. Домашняя работа
// const API = "http://localhost:8001/todo";
/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/
// document.addEventListener("DOMContentLoaded", function () {
//   let list = document.querySelector(".block-1 .list");

//   fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => {
//       data.results.forEach((character) => {
//         let listItem = document.createElement("li");
//         listItem.textContent = character.name;
//         list.appendChild(listItem);
//       });
//     })
//     .catch((error) => console.log("Error fetching characters:", error));
// });

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
// document.addEventListener("DOMContentLoaded", function () {
//   let list = document.querySelector(".block-1 .list");

//   fetch("http://localhost:8000/characters")
//     .then((response) => response.json())
//     .then((characters) => {
//       characters.forEach((character) => {
//         let listItem = document.createElement("li");
//         let characterImage = document.createElement("img");

//         listItem.textContent = character.name;
//         characterImage.src = character.image;
//         characterImage.alt = character.name;

//         listItem.appendChild(characterImage);
//         list.appendChild(listItem);
//       });
//     })
//     .catch((error) => console.log("Error fetching characters:", error));
// });

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let list2 = document.querySelector(".block-2 .list2");

//   fetch("http://localhost:8000/characters")
//     .then((response) => response.json())
//     .then((characters) => {
//       characters.forEach((character) => {
//         let listItem = document.createElement("li");
//         listItem.textContent = character.name;
//         list2.appendChild(listItem);
//       });
//     })
//     .catch((error) =>
//       console.log("Error fetching characters from local server:", error)
//     );
// });

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

// document.addEventListener("DOMContentLoaded", function () {
//     let list2 = document.querySelector(".block-2 .list2");

  // fetch("http://localhost:8000/characters")
  //   .then((response) => response.json())
  //   .then((characters) => {
  //     characters.forEach((character) => {
  //       let listItem = document.createElement("li");
  //       let characterImage = document.createElement("img");

  //       listItem.textContent = character.name;
  //       characterImage.src = character.image;
  //       characterImage.alt = character.name;

  //       listItem.appendChild(characterImage);
  //       list2.appendChild(listItem);
  //     });
  //   })
  //   .catch((error) =>
  //     console.log("Error fetching characters from local server:", error)
  //   );
// });