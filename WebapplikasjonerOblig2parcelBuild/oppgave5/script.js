window.onload = run;

function run(){
    document.body.appendChild(document.createElement("main"))
    document.body.appendChild(document.createElement("p"))
    document.body.lastChild.innerHTML ="Jeg trener på JavaScript"
    document.body.lastChild.classList.add("nutty")
    const myObj = [{id: 1, data: "text"},{id:2, data:"text2"}];
    var select = document.createElement("select")
    for(var i = 0; i < myObj.length; i++) {
        var valg = document.createElement('option');
        valg.innerHTML = myObj[i].data;
        valg.value = myObj[i].id;
        select.appendChild(valg);
    }
    select.style.margin = "0 auto"
    select.style.display = "block"
    select.style.maxWidth = "500px"
    document.body.style.width = "100%";
    document.body.firstChild.style.width = "100%"
    document.body.firstChild.appendChild(select)

    var reset = document.createElement("button")
    reset.onclick = function(){
       document.getElementById("liste").removeChild(document.body.lastChild)
        
    }
    var test = document.createElement("button")
    reset.innerHTML="reset"
    test.onclick = function(){
        var tekst = document.body.lastChild.textContent.split(" ")
        var utskrift =""
        for(var i = 3; i >-1;i--){
            console.log(tekst[i])
            utskrift+=tekst[i].substring(1)+" "
        }
        document.body.lastChild.innerHTML = utskrift.split("").reverse().join("");
    }
    test.innerHTML="test"
    document.body.firstChild.appendChild(test)
    document.body.firstChild.appendChild(reset)
    var ul = document.createElement("ul")
        ul.id = "liste"
        document.body.appendChild(ul)
       
        resetList()

    function resetList(){
        for(var i = 0; i < 4;i++){
            var knappli = document.createElement("li")
            var knapp = document.createElement("button")
            knapp.innerText="delete"
            knapp.onclick=function(e){
                e.target.parentNode.parentNode.removeChild(e.target.parentNode)
                e.target.parentNode.removeChild(e.target)
            }
            knappli.appendChild(knapp)
            ul.appendChild(knappli)
        }
    
      
        
    }
    
    
    
}


