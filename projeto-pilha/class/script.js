import { Stack } from "./stack-class.js";


const stack = new Stack()


function atualizarPilha() {
    const pilhaContainer = document.getElementById("meuArray");
    pilhaContainer.innerHTML = stack.stack.map(item => `<div class="text-white">${item}</div>`).join('');
}
atualizarPilha()
document.getElementById("pushID").addEventListener("click", ()=>{
    console.log("oi");
    
    const valorInput = document.getElementById("elemento").value

    if(valorInput){
        stack.push(valorInput)
        atualizarPilha()

    }
})

document.getElementById("popID").addEventListener("click", ()=>{
    stack.pop()
    atualizarPilha()

})

document.getElementById("peekID").addEventListener("click", ()=>{

        alert(stack.peek())

})

document.getElementById("sizeID").addEventListener("click", ()=>{
    alert(stack.size())
    
})

document.getElementById("isEmptyID").addEventListener("click", ()=>{
    alert(stack.isEmpty())
    
})