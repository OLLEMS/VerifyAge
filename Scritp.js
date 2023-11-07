function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fAno.value.length < 1900 || fAno.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "images/bebe.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "images/jovem.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "images/adulto.png");
      } else {
        //idoso
        img.setAttribute("src", "images/idoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "images/bebe-f.png");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "images/jovem-f.png");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "images/adulto-f.png");
      } else {
        //idoso
        img.setAttribute("src", "images/idoso-f.png");
      }
    }

    document.getElementById("res").style.textAlign = "center";

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
