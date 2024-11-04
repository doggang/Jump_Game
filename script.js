//플레이어의 점프 기능 구현.
// 점프는 bottom 속성을 조정하는 방식으로 구현.
// 사용자가 스페이스바를 누르면 bottom 속성을 바꾸어 캐릭터가 위로 올라갔다 내려오게 애니메이션 구현.
const player = document.getElementById("player"); 
let isJumping = false;

function jump() {
    if (isJumping) return;
    isJumping = true;
    
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight > 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                jumpHeight -= 10;
                player.style.bottom = `${jumpHeight}px`;
            }, 20);
        }
        jumpHeight += 10;
        player.style.bottom = `${jumpHeight}px`;
    }, 20);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        jump();
    }
});

// 장애물의 위치 업데이트 및 충돌 감지
// #obstacle은 CSS 애니메이션으로 계속 이동하도록 설정했지만, JavaScript를 사용해 충돌 감지 로직을 추가해야 함.
// setInterval을 사용해 일정 시간 간격으로 플레이어와 장애물의 위치를 체크하고, 두 요소가 겹치는지 확인.
const obstacle = document.getElementById("obstacle");

function checkCollision(e) {
    const playerRect = player.getBoundingClientRect(); //player의 위치 정보
    const obstacleRect = obstacle.getBoundingClientRect(); //obstacleRect의 위치 정보
    console.log(playerRect.left);
    console.log(obstacleRect.right);

    if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
    ) {
        alert("Game Over!");
        
        window.location.reload();
    }
}

setInterval(checkCollision, 50);


// 게임 난이도 조정 및 추가 기능.
// 장애물 속도 조절, 장애물 추가, 게임 점수를 표시기능 구현.
let score = 0;
const scoreDisplay = document.createElement("div");
scoreDisplay.style.position = "absolute";
scoreDisplay.style.top = "10px";
scoreDisplay.style.left = "10px";
scoreDisplay.style.fontSize = "20px";
scoreDisplay.innerText = `Score: ${score}`;
document.body.appendChild(scoreDisplay);

setInterval(() => {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
}, 1000);