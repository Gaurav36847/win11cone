let first = document.getElementsByClassName("first")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

let second = document.getElementsByClassName("second")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]

let third = document.getElementsByClassName('third')[0]
let edge = document.getElementsByClassName('edge')[0]

let fourth = document.getElementsByClassName('fourth')[0]
let filemanager = document.getElementsByClassName('filemanager')[0]


first.addEventListener('click',comeup1)
second.addEventListener('click',comeup2)
third.addEventListener('click',comeup3)
fourth.addEventListener('click',comeup4)

function comeup1(){
    // console.log('clicked')
    if(startmenu.style.bottom == "50px"){

        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom  = "50px"
    }

}

function comeup2(){
    // console.log('clicked')
    if(searchmenu.style.bottom == "50px"){

        searchmenu.style.bottom = "-655px"
    }
    else{
        searchmenu.style.bottom  = "50px"
    }

}

function comeup3(){
    // console.log('clicked')
    if(edge.style.bottom == "42px"){

        edge.style.bottom = "-761px"
    }
    else{
        edge.style.bottom  = "42px"
    }

}

function comeup4(){
    // console.log('clicked')
    if(filemanager.style.bottom == "110px"){

        filemanager.style.bottom = "-761px"
    }
    else{
        filemanager.style.bottom  = "110px"
    }

}


// const time1 = document.getElementsByClassName('time')[0]

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() ;//+ ":" + today.getSeconds()//;
// var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
// var date_time = time + ' ' + date;

// time1.innerHTML = time + " " + date;
// time1.innerHTML = date;


// let taskbar = document.getElementsByClassName("taskbar")[0]
// let startmenu = document.getElementsByClassName("startmenu")[0]



// taskbar.addEventListener("click", ()=>{
//     console.log("clicked");
//     if(startmenu.style.bottom == "50px"){
//         startmenu.style.bottom = "-655px"
//         console.log('clicked')
//     }
//     else{
//         startmenu.style.bottom = "50px"
//     }
// })