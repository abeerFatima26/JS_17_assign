window.onload=function(){
    setTimeout(()=>{
        document.querySelector("#count p").innerHTML = "10";
        setTimeout(()=>{
            document.querySelector("#count p").innerHTML = "9";
            setTimeout(()=>{
                document.querySelector("#count p").innerHTML = "8";
                setTimeout(()=>{
                    document.querySelector("#count p").innerHTML = "7";
                    setTimeout(()=>{
                        document.querySelector("#count p").innerHTML = "6";
                        setTimeout(()=>{
                            document.querySelector("#count p").innerHTML = "5";
                            setTimeout(()=>{
                                document.querySelector("#count p").innerHTML = "4";
                                setTimeout(()=>{
                                    document.querySelector("#count p").innerHTML = "3";
                                    setTimeout(()=>{
                                        document.querySelector("#count p").innerHTML = "2";
                                        setTimeout(()=>{
                                            document.querySelector("#count p").innerHTML = "1";
                                            setTimeout(()=>{
                                                document.querySelector("#count p").style.display="none";
                                                document.querySelector("#msg p").innerHTML = "Happy Independence Day !!!";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
}