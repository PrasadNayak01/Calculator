let string = "";
let buttons = document.getElementsByTagName("span");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementsByTagName("input")[0].value = string;
        }
        else if(e.target.innerHTML == "C"){
            document.getElementsByTagName("input")[0].value = "";
            string = "";
        }
        else{
            string += e.target.innerHTML;
            document.getElementsByTagName("input")[0].value = string; 
        }
    } )
});