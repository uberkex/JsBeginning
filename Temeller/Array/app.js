let value;

const numbers = [43,56,33,23,44,35,5];
// const numbers = new Array(43,56,33,23,44,35,5);

const langs = ["Python", "JavaScript", "Java"];
const karma = ["Berke","Karataş",24,72.5,true,null,undefined];


value = numbers.length;
// Output ---> 7

// Index
value = numbers[0];
// Output ---> 43
value = numbers[2];
// Output ---> 33
value = numbers[numbers.length - 1];
// Output ---> 5



/* Indexteki değeri değiştirme */
numbers[2] = 8;
value = numbers;
// Output ---> [43, 56, 8, 23, 44, 35, 5]

/* Index numarasını bulma */
value = numbers.indexOf(44);
// Output ---> 4

/* Sonuna Eleman ekleme ( python --> append ) */
numbers.push(31);
value = numbers;
// Output ---> [43, 56, 8, 23, 44, 35, 5, 31]

/* Başına Eleman ekleme */
numbers.unshift(99);
// Output ---> [99, 43, 56, 8, 23, 44, 35, 5, 31]


/* Sonundan eleman çıkarma  (python same) */
numbers.pop();
// Output ---> [99, 43, 56, 8, 23, 44, 35, 5]

/* Başından eleman çıkarma */
numbers.shift();
// Output ---> [43, 56, 8, 23, 44, 35, 5]



/* Belirli aralıkları çıkarma. 0'dan 3.indexe kadar ama 3.index dahil değil*/
numbers.splice(0,3);
// Output ---> [23, 44, 35, 5]



/* Arrayi tersine çevirme */
numbers.reverse();
// Output ---> [5, 35, 44, 23]


/* 
Array sıralama 
istediğimiz sonuç 5,23,35,44 ama aldığımız sonuç sıralanmış hali değil
sort() methodu sadece ilk rakamlara bakarak bir sıralama işlemi yapıyor
2,3,4,5 olarak düşünüyor ilk rakamlarını alınca ve ona göre sıralıyor sayıları
*/
numbers.sort();
// Output ---> [23, 35, 44, 5]


/* Küçükten büyüğe sıralama sort with function */
numbers.sort(function(x,y){
    return x - y;
});
// Output ---> [5, 23, 35, 44]


/* Büyükten küçüğe sıralama sort with function */
numbers.sort(function(x,y){
    return y - x;
});
// Output ---> [44, 35, 23, 5]


console.log(value);