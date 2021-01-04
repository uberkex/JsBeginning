const status = 1;


switch(status){
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz İşlem");
}

// Output ---> İşlem 1


/* BREAK KULLANMAZSAK */
// break görmediği zaman case 1 girse bile diğer caselere devam edecek break görene kadar

switch(status){
    case 1:
        console.log("İşlem 1");
        
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz İşlem");
}

// Output ---> İşlem 1
//             İşlem 2