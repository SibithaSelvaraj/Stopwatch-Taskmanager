/* Selection the button (when should action perform) and Selecting the <p>tag's id (Where should display) */

const table=document.getElementById("tb")
const timer=document.getElementById("timer")
const hr=document.getElementById("hour")
const min=document.getElementById("minutes")
const sec=document.getElementById("seconds")
const time=document.getElementById("time")

/*Start button function */
let intervalId
let s=0
let h=0
let m=0
function startTimer(){
    if(timer.textContent==="Stop"){
        timer.textContent="Start"

        /*Changing color of button - when stop it bg change to black and txt color to white */
        timer.style.setProperty('background-color','black')
        timer.style.setProperty('color','white')

        table.innerHTML+=`<tr>
        <td>${task.value}</td>
        <td>${des.value}</td>
        <td>${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}</td>
        </tr>`
    /*
    <td>${time.value}</td>
    console.log(time)
    */
        s=0
        h=0
        m=0
        
        /*Stop button function - to stop setInterval func use clearInterval*/
        clearInterval(intervalId)
        sec.textContent="00"
        hr.textContent="00"
        min.textContent="00"
        task.value=''
        des.value=''

        
    }
    else{                                    //execute when the button is start
        timer.textContent="Stop"
        /*Changing color of button - when stop it bg change to white txt to black */
        timer.style.setProperty('background-color','white')
        timer.style.setProperty('color','black')

        /*Incrementing the timer by ++ using setInterval function*/
        

            intervalId=setInterval(function(){
                s++
                if(s>=60){
                    s=0
                    m++
                    if(m>=60){
                        m=0
                        h++
                    }
                }
                sec.textContent=s.toString().padStart(2,'0')
                min.textContent=m.toString().padStart(2,'0')
                hr.textContent=h.toString().padStart(2,'0')
            },1000)
            

    }
}

timer.addEventListener('click',startTimer)




