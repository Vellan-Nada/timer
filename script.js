// $(".start").prop("disabled",true)  This code can be used to disable the button

let time;
let counter = 1

$(".start").click(function(){
    if (counter===1){
        counter=2
        let val;
        if ($(".display").text()==='0:00'){
            val = (Number($(".counter").val()))*60*1000
        }
        else {
            let rem = $(".display").text()
            let arr = rem.split(":")
            let min = Number(arr[0])*60*1000
            let sec = Number(arr[1])*1000
            val = min + sec
        }

        let timer = new Date()
        timer.setTime(timer.getTime()+val)

        let future = timer.getTime()

        time = setInterval(function(){
            let now = new Date().getTime()
            let diff = future-now

            let seconds = Math.floor(diff/1000)%60
            let minutes = Math.floor(diff/(1000*60))

            $(".display").text(`${minutes}:${seconds.toString().padStart(2,"0")}`)

            if(diff<=0){
                $(".display").text("0:00")
                clearInterval(time) 
                $(".counter").val("0")
                counter = 1
                return
            }
        },1000)
    }
})

$(".stop").click(function(){
    clearInterval(time)
    counter = 1
})

$(".reset").click(function(){
    $(".display").text("0:00")
    clearInterval(time)
    $(".counter").val("0")
    counter = 1
})
