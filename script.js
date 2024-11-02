var jumper = document.querySelector("#jumper");

function jump(e){
    const startPosition = parseInt(getComputedStyle(jumper).left);
    const targetPosition = startPosition + 100; // 목표 위치
    const duration = 1000; // 전환 시간 (1초)
    const interval = 10; // 이동 간격 (ms)

    let currentTime = 0;

    if(e.keyCode == '32'){
        console.dir(jumper.offsetTop);
        currentTime += interval  

        const progress = Math.min(currentTime / duration, 1); // 진행 상태 (0~1)

        const currentPosition = startPosition + (targetPosition - startPosition) * progress;
        jumper.style.left = currentPosition + 'px';

        if (progress < 1) {
          setTimeout(jump, interval);
        }

    }else{
        console.log("error");
    }
};

window.addEventListener("keydown", (e)=>{jump(e)});

