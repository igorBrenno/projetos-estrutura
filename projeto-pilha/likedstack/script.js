import LinkedStack from "./linked-stack.js";

const stack = new LinkedStack()


function atualizarPilha() {
    let temp = stack.top
    const pilhaContainer = document.getElementById("meuArray");
    pilhaContainer.innerHTML = ""
    while (temp !== null){
        pilhaContainer.innerHTML +=  `<div class="text-white">${temp.value}</div>`
        temp = temp.prev
    }
}
atualizarPilha()
document.getElementById("pushID").addEventListener("click", ()=>{
    
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