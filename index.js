const display=document.getElementById("disp")
const err= document.getElementById("error")
const btns = document.querySelectorAll('button')//selecting all button tags

btns.forEach((btn)=>{
    btn.onclick = () =>{
        if(btn.id=="c"){
            display.textContent=""
        }
        else if(btn.id=="back-space"){
            let str=display.textContent.toString()
            if(str==""){
                err.textContent="ERROR"
            }
            display.textContent=str.slice(0,-1)
        }
        else if(btn.id=="="){
            let str=display.textContent
            if(str==""){
                err.textContent="ERROR"
            }
            else{
                res=eval(str)
                display.textContent=res
            }

        }
        else{
            if(err.textContent!=""){
                err.textContent=""
            }
            
            display.textContent+=btn.id
        }
    }
})
