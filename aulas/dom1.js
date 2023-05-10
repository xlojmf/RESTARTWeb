// Document Object Model  - Application Programming Interface API

// normalmente a forma de utilizar é elementoAManupilar.accao

/* methodos para selecionar elementos a manipular

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelector()
document.querySelectorAll()

*/

console.log(document.getElementsByTagName("h1")); // devolve um array de nodes
console.log(document.getElementsByTagName("h1")[0]); // devolve o primeiro node
console.log(document.getElementsByTagName("h1")[0].innerHTML); // devolve o texto do primeiro node
console.log(document.getElementsByTagName("h1")[0].textContent); // devolve o texto do primeiro node

document.getElementsByTagName("h1")[0].textContent = "Novo texto";

document.getElementById("BtMudaTexto").onclick = function () {
    
    // funcao anonima / callback
    document.getElementById("conteudo").textContent = "Novo texto";
    document.getElementById("conteudo").style.color = "red";

}

//falta adicionar codigo da aula

let content = document.getElementById("collapseContent");
console.log(content);

function toggleCollapse() {
    let content = document.getElementById("collapseContent");
    console.log(content);
    if (content.style.display === "none") {
      content.style.display = "block";
      document.getElementById("btCollapse").innerHTML = "Ocultar Collapse";
    } else {
      content.style.display = "none";
      document.getElementById("btCollapse").innerHTML = "Mostrar Collapse";
    }
  }


// DOM API - Document Object Model - Application Programming Interface
// API interna ao browser
// nodes / HTMLElement
// elementoAManipular.acção
/* métodos para seleccionar o elemento a manipular:
document.getElementById
document.getElementsByTagName
document.getElementsByName
document.getElementsByClassName
document.querySelector
document.querySelectorAll
*/
// devolve uma HTMLCollection
console.log(document.getElementsByTagName("h1"));
// devolve <h1>Teste de DOM</h1>
console.log(document.getElementsByTagName("h1")[0]);
// devolve "Teste de DOM"
console.log(document.getElementsByTagName("h1")[0].textContent);
document.getElementsByTagName("h1")[0].textContent="Outro texto";
document.getElementsByTagName("h1")[0].innerHTML="<strong><em>Outro texto &hearts; &copy; &#9730; &#x2602; &atilde; &#128663;</em></strong>";
​
// &hearts; - HTML character code ou HTML entity
​
let elConteudo=document.getElementById("conteudo");
let conteudoAnterior=elConteudo.textContent;
// event handler
document.getElementById("btMudaTexto").onclick=function() {
    // função anónima / callback
​
    if (elConteudo.textContent==="Novo conteúdo") {
        // Repor conteúdo
        elConteudo.textContent=conteudoAnterior;
        // elConteudo.classList.remove("destaque");
        // document.getElementById("btMudaTexto").textContent="Muda texto";
        this.textContent="Muda texto";
    } else {
        elConteudo.textContent="Novo conteúdo";
        // interagir com as CSS
        // elConteudo.style.color="red";
        // elConteudo.style.backgroundColor="cyan";
        // sintaxe antiga
        // elConteudo.className="destaque";
        // elConteudo.classList.add("destaque");
        document.getElementById("btMudaTexto").textContent="Repor texto";
    }
    elConteudo.classList.toggle("destaque");
}
​
// quando clico no botão
document.getElementById("btCollapse").onclick=function() {
    
    let valorDisplayConteudo=window.getComputedStyle(document.getElementById("conteudoCollapse")).getPropertyValue("display");
    // console.log(valorDisplayConteudo);
​
    if (valorDisplayConteudo==="none") {
        // mostrar o conteúdo do collapse
        document.getElementById("conteudoCollapse").style.display="block";
        this.textContent="Esconder collapse";
    } else {
        // esconde o conteúdo do collapse
        document.getElementById("conteudoCollapse").style.display="none";
        this.textContent="Mostrar collapse";
    }
​
​
}