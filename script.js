var jumper = document.getElementById("jumper");

window.addEventListener("click", function(e){
    jumper.style.transform = 'translate(0px, -300px)';
    setTimeout(function(){
        jumper.style.transform = 'translate(' +'0px', + '350px)';
    },400);
});