let homeScore = document.querySelector(".home-score")
let guestScore = document.querySelector(".guest-score")
let homeScoreCount = 0
let guestScoreCount = 0

function homeOne(){
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function homeTwo(){
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function homeThree(){
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function guestOne(){
    guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function guestTwo(){
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function guestThree(){
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}

function reset(){
    homeScoreCount = 0
    guestScoreCount = 0
    homeScore.textContent = homeScoreCount
    guestScore.textContent = guestScoreCount
}