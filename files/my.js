var w = document.getElementById("vvvvv")

var num = document.getElementById("lis")
var lineP = document.getElementById("fwj")
var point = document.getElementById("ghj")

console.log(w.getBoundingClientRect().width)

var all = w.getBoundingClientRect().width
w.onclick=function (e) {
    // console.log('x:',e.offsetX)
    var x = e.offsetX
    if(x < all/6){
        num.innerHTML=0
        lineP.setAttribute('style', 'width: 0%;');
        point.setAttribute('style', 'left: 0%;');
    }else if(x > all/6 && x < all/2){
        num.innerHTML=1
        lineP.setAttribute('style', 'width: 33%;');
        point.setAttribute('style', 'left: 33%;');
    }else if(x>all/2 && x < all/6*5){
        num.innerHTML=2
        lineP.setAttribute('style', 'width: 66%;');
        point.setAttribute('style', 'left: 66%;');
    }else{
        num.innerHTML=3
        lineP.setAttribute('style', 'width: 100%;');
        point.setAttribute('style', 'left: 100%;');
    }
}