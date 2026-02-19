const hourArrow = document.querySelector('.h'),
    minArrow = document.querySelector('.m'),
    secArrow = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minuteNum = document.querySelector('.minutes');


function clock() {
    let time = new Date(),
        minute = time.getMinutes(),
        second = time.getSeconds(),
        hour = time.getHours()
    minArrow.style.transform = `rotate(${minute * 6}deg)`
    secArrow.style.transform = `rotate(${second * 6}deg)`
    hourArrow.style.transform = `rotate(${hour * 30}deg)`
    setTimeout(() => {
        clock()
    }, 1000)
    hourNum.innerHTML = hour < 10 ? "0" + hour : hour
    minuteNum.innerHTML = minute < 10 ? "0" + minute : minute

}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem');

tabsItem.forEach((btn, i) => {
    tabsItem[i].addEventListener('click', () => {
        tabsItem.forEach((item, j) => {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        })
        btn.classList.add('active')
        tabsContentItem[i].classList.add('active')
    })

})

const stopwatch__btn = document.querySelector('.stopwatch__btn'),
    stopwatch__hours = document.querySelector('.stopwatch__hours'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds'),
    tabsLink__span = document.querySelector('.tabLink__span');

function full() {
    if (stopwatch__btn.innerHTML === "stop") {
        stopwatch__seconds.innerHTML++
        if (stopwatch__seconds.innerHTML == 60) {
            stopwatch__seconds.innerHTML = 0;
            stopwatch__minutes.innerHTML++;
        }
        if (stopwatch__minutes.innerHTML == 60) {
            stopwatch__minutes.innerHTML = 0;
            stopwatch__hours.innerHTML++;
        }
    }
    setTimeout(() => {
        full();
    }, 10);

}
full()
function clear() {
    stopwatch__seconds.innerHTML=0
    stopwatch__minutes.innerHTML = 0;
    stopwatch__hours.innerHTML = 0;
}
stopwatch__btn.addEventListener('click', () => {
    if (stopwatch__btn.innerHTML === "start") {
        stopwatch__btn.innerHTML = "stop";
        tabsLink__span.classList.add('active')
    }
    else if (stopwatch__btn.innerHMTL === "stop") {
        stopwatch__btn.innerHTML = "clear";
        tabsLink__span.classList.add('active_clear')
    }
    else {stopwatch__btn.innerHTML = "start";
        clear();
        tabsLink__span.classList.remove('active_clear')
        tabsLink__span.classList.remove('active')

    }

});
