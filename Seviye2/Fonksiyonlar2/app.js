/* Immediately Invoked Function Expression (IIFE) */

// Tanımlandığı yerde çalışan fonksiyonlar

(function(name){
    console.log(`Merhaba ${name}`);
})("Berke");



/* object */

const database = {
    host: "localhost",
    add: function(){
        console.log("Veri eklendi..");
    },
    get:function(){
        console.log("Veriye ulaşıldı..");
    },
    update:function(id){
        console.log(`${id} numaralı veri güncellendi..`);
    },
    delete:function(id){
        console.log(`${id} numaralı veri silindi..`);
    },
}

console.log(database);

database.add();
// Output ---> Veri eklendi..
database.delete(11652003);
// Output ---> 11652003 numaralı veri silindi..