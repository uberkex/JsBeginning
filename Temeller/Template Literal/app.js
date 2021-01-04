const name = "Ulaş Berke Karataş";
const department = "Bilişim";
const salary = 4000;



// Alt Gr ve noktalı virgüle iki defa basarak oluşturabiliriz.
const info = `İsim = ${name} \nDepartman = ${department}\nMaaş = ${salary}`;
console.log(info)

function mrb (){
    return "Merhaba"
}

const html = `

<ul>
<li>${name}</li>
<li>${department}</li>
<li>${salary}</li>
<li>${mrb()}</li>
</ul>

`;

document.body.innerHTML = html;