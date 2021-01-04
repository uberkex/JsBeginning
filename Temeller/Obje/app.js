const programmer = {
    firstName : "Berke",
    lastName : "Karataş",
    age : 24,
    email : "uberke.karatas@gmail.com",
    langs : ["Python","JavaScript","Java"],

    address : {
        city : "İstanbul",
        street : "Düğmeciler",
    },

    work : function(){
        console.log("Programcının work fonksiyonu çalışıyor..")
    },

}


value = programmer;
programmer.work();
console.log(value);


programmer_email = programmer.email;
programmer_email2 = programmer["email"];
programmer_firstname = programmer.firstName;
programmer_lastname = programmer.lastName;
programmer_age = programmer.age;
programmer_langs = programmer.langs;
programmer_city = programmer.address.city;
programmer_street = programmer.address.street;

const infos = `
    <h2>Programcı Bilgileri</h2>
    <p>Email = ${programmer_email} </p>
    <p>Email = ${programmer_email2} </p>
    <p>Ad = ${programmer_firstname} </p>
    <p>Soyad = ${programmer_lastname} </p>
    <p>Yaş = ${programmer_age} </p>
    <p>Diller = ${programmer_langs} </p>
    <p>Şehir = ${programmer_city} </p>
    <p>Sokak = ${programmer_street} </p>
    
`;

document.body.innerHTML = infos;




/* JSON */
const programmers = [
    {
        name : "Berke Karataş",
        age:25,
    },

    {
        name : "Martin Eden",
        age:35,
    }

]

info = programmers[0].name; // Berke Karataş
info = programmers[0].age;  // 25

info = programmers[1].name; // Martin Eden
info = programmers[1].age;  // 35

console.log(info);