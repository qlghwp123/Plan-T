try {
    const slider = function () {
        const slides = document.querySelectorAll('.slide');
        const btnLeft = document.querySelector('.slider-btn-left');
        const btnRight = document.querySelector('.slider-btn-right');
        const dotContainer = document.querySelector('.dots');

        let curSlide = 0;
        const maxSlide = slides.length;

        const createDots = function () {
            slides.forEach(function (_, i) {
                dotContainer.insertAdjacentHTML('beforeend', `<button class="dots-dot" data-slide="${i}"></button>`);
            })
        };
        const activeDot = function (slide) {
            document.querySelectorAll('.dots-dot').forEach(dot => dot.classList.remove('dots-dot-active'));
            document.querySelector(`.dots-dot[data-slide="${slide}"]`).classList.add('dots-dot-active');
        };

        const goToSlide = function (slide) {
            slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
        }

        const nextSlide = function () {
            if (curSlide === maxSlide - 1) {
                curSlide = 0;
            } else {
                curSlide++;
            }

            goToSlide(curSlide);
            activeDot(curSlide);
        };

        const prevSlide = function () {
            if (curSlide === 0) {
                curSlide = maxSlide - 1;
            } else {
                curSlide--;
            }

            goToSlide(curSlide);
            activeDot(curSlide);
        };
        const init = function () {
            createDots();
            goToSlide(0);
            activeDot(0);
        };

        init();

        btnLeft.addEventListener('click', prevSlide);
        btnRight.addEventListener('click', nextSlide);

        document.addEventListener('keydown', function (e) {
            if (e.key === "ArrowLeft") prevSlide();
            e.key === "ArrowRight" && nextSlide();
        });

        dotContainer.addEventListener('click', function (e) {
            if (e.target.classList.contains('dots-dot')) {
                const { slide } = e.target.dataset;
                goToSlide(slide);
                activeDot(slide);
            }
        });
        setInterval(nextSlide, 6000);
    };

    slider();

} catch { }

// try {
//     const gnb = document.querySelector('.gnb');
//     const gnbMenu = document.querySelectorAll('.gnb-tab');
//     gnbMenu.forEach(tab => {
//         tab.addEventListener('click', function (e) {
//             // e.preventDefault();
//             // console.log(e.target.closest('.gnb-tab'));
//             e.target.closest('.gnb-tab').classList.add('activate');
//         })
//     })

// } catch { }

try {
    //  ?????????, ???????????? ?????? ??????
    const inputBox = document.getElementsByTagName('input');

    const loginActivate = function (e) {
        inputArea = e.target.closest('.input-area');
        if (!e.target.value == "") {
            inputArea.classList.add("activate");
        }
        else {
            inputArea.classList.remove("activate");
        }
    };
    for (let i = 0; i < inputBox.length; i++) {
        inputBox[i].addEventListener('keyup', loginActivate);
    }


} catch { }

// try {
//     //  today ?????? ????????? ????????? ??????
//     var ctx = document.getElementById('today-progress-crc').getContext("2d");

//     // ????????? ?????? ????????? ??????
//     var $r1 = (270 * Math.PI / 180) - Math.PI / 2;
//     var r1 = -Math.PI / 2;
//     function graph() {
//         // console.log($r1);
//         r1 = r1 + ($r1 - r1) * 0.66;
//         // console.log((r1 * 180 / Math.PI + 90));
//         // r1 = r1 + ($r1 - r1);
//         // const i = 0.0133;
//         // r1 = r1 + ($r1 - r1) * 1.33;
//         // console.log(Math.round((r1 * 180 / Math.PI + 90) / 360 * 100));
//         const rateArea = document.querySelector('#progress-per');
//         let achRate = Number(rateArea.dataset.achRate);
//         console.log(achRate);


//         ctx.clearRect(0, 0, 100, 100);
//         ctx.strokeStyle = "#3cddaa";
//         ctx.lineWidth = 10;
//         ctx.lineCap = "round";
//         ctx.beginPath();
//         // ctx.arc(50, 50, 40, -Math.PI / 2, r1, false);
//         ctx.arc(50, 50, 40, Math.PI * 3 / 2, Math.PI * 1 / 2 + Math.PI);
//         ctx.stroke();

//         // console.log(Math.PI * 1 / 2 + Math.PI);

//         // rateArea.innerText = `${achRate}%`;

//         document.getElementById('progress-per').innerHTML = Math.round((r1 * 180 / Math.PI + 90) / 360 * 100) + "%";
//     }
//     graph();
//     // const progress = setInterval(graph, 40);
//     // setTimeout(function () {
//     //     clearInterval(progress)
//     // }, 6000);

// } catch { }

try {
    //  today ?????? ?????? ?????? 
    let slideUp = (target, duration = 500) => {
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.boxSizing = "border-box";
        target.style.height = target.offsetHeight + "px";
        target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = "none";
            target.style.removeProperty("height");
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
        }, duration);
    };
    let slideDown = (target, duration = 500) => {
        target.style.removeProperty("display");
        let display = window.getComputedStyle(target).display;

        if (display === "none") display = "block";

        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = "border-box";
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
        }, duration);
    };
    let slideToggle = (target, duration = 500) => {
        if (window.getComputedStyle(target).display === "none") {
            return slideDown(target, duration);
        } else {
            return slideUp(target, duration);
        }
    };


    let speedAnimation = 400;
    let target = document.querySelector('.today-section');

    let slideBtnClick = (cl, sl) =>
        document
            .querySelector(cl)
            .addEventListener("click", () => sl(target, speedAnimation));

    slideBtnClick(".add-btn", slideToggle);


} catch { }


try {
    // ?????? ?????? ?????? DOM ?????? ??????
    const taskList = document.querySelector('.today-task-list');
    const tasks = document.querySelectorAll('.today-task-list .task');
    let taskConts = document.querySelectorAll('.today-task-list .task .task-cont');

    const taskView = document.querySelector('#task-detail');
    const taskDetailForm = document.querySelector('#today-detail-form');
    const detailTit = document.querySelector('#detail-title');
    const detailCont = document.querySelector('#detail-cont');
    const detailST = document.querySelector('#starttime-pick-edit');
    const detailET = document.querySelector('#endtime-pick-edit');
    const detailTag = document.querySelector('#detail-tag');
    const detailBtnDel = document.querySelector('#detail-btn-del');
    const detailDelForm = document.querySelector('#detail-del-form');
    const todayStudyArea = document.querySelector('.today-study-area');
    const updateBtn = document.querySelector('#todo-update');

    // ?????? ?????? ??? ?????? ?????? ?????? ????????? ??????, json ????????? ?????????, ?????? active ?????? ??????
    const taskMenu = function (e) {
        const tasks = document.querySelectorAll('.today-task-list .task');

        e.preventDefault();

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].classList.contains('activate')) {
                tasks[i].classList.remove('activate');
            }
        }
        todayStudyArea.classList.toggle('hide');
        taskView.classList.toggle('activate');
        // this.classList.toggle('activate');
        if (taskView.classList.contains('activate')) {
            this.parentElement.classList.add('activate');
        } else {
            this.parentElement.classList.remove('activate');
        }
        // this.classList.toggle('activate');

        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
        let delUrl = '/todos/delete/';
        let updateUrl = '/todos/update/';

        axios({
            method: 'POST',
            url: '/todos/today/',
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                const data = res.data.resJson;
                const data2 = res.data.resJson2;
                const tagValues = [];
                const tagPks = []
                todoTasks = JSON.parse(data);
                // console.log(data2);
                // tags = JSON.parse(data2[0])

                const nodes = [...tasks];
                console.log(nodes);
                const idx = nodes.indexOf(this.parentElement);
                detailBtnDel.setAttribute("data-idx", idx)
                console.log(idx);
                // console.log(detailBtnDel.dataset.idx);

                // todo ?????? ???????????? ?????? actions ?????? ??????
                console.log(todoTasks);
                const todoPK = todoTasks[idx].pk;

                for (let i = 0; i < data2.length; i++) {
                    if (data2[i] != "") {
                        tags = JSON.parse(data2[i]);
                        const tagValueList = [];
                        for (let j = 0; j < tags.length; j++) {
                            // tagValueList.push(tags[j].fields.content)
                            // console.log(tags[j].fields.content);
                            tagValueList.push(tags[j].fields.content);
                            // tagValues[tags[j].fields.todo].push(tags[j].fields.content)
                            // console.log(tagValues[tags[j].fields.todo]);

                            if (!tagPks.includes(tags[j].fields.todo)) {
                                tagPks.push(tags[j].fields.todo);
                            }
                        }
                        tagValues.push(tagValueList)
                    }
                }
                let tagStr = ''

                if (tagPks.includes(todoPK)) {
                    const tagIdx = tagPks.indexOf(todoPK);
                    // console.log(todoPK);
                    // console.log(tagValues);
                    // console.log(tagValues[tagIdx])
                    for (let tag of tagValues[tagIdx]) {
                        tagStr += `${tag}, `
                    }
                }
                else {
                    console.log('no tags');
                }

                updateUrl += `${todoPK}`;
                taskDetailForm.setAttribute('action', `${updateUrl}`);

                // todo ?????? ?????? href ?????? ??????
                delUrl += `${todoPK}`;
                detailDelForm.setAttribute('action', `${delUrl}`);

                // ????????? todo ?????????  input??? ??????
                detailTit.value = todoTasks[idx].fields.title;
                detailCont.value = todoTasks[idx].fields.content;
                detailST.value = todoTasks[idx].fields.started_at;
                detailET.value = todoTasks[idx].fields.expired_at;
                detailTag.value = tagStr;
                // detailTag.value = todoTags[idx]
            })
    };

    // ??? ????????? ?????? ????????? ????????? ??????????????? forEach ??????
    taskConts.forEach(taskCont => {
        taskCont.addEventListener('click', taskMenu);
    });

    // today todo ???????????? ?????????
    updateBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const taskDetailForm = document.querySelector('#today-detail-form');

        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
        let urls = taskDetailForm.getAttribute('action');
        axios({
            method: 'POST',
            url: `${urls}`,
            headers: {
                'X-CSRFToken': csrftoken,
                'Content-Type': 'multipart/form-data'
            },
            data: new FormData(taskDetailForm),
        }).then((res) => {
            const data2 = res.data;
            for (let i = 0; i < taskConts.length; i++) {
                if (taskConts[i].parentElement.classList.contains('activate')) {
                    taskConts[i].innerText = data2.todoTitle;
                }
            }
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].classList.contains('activate')) {
                    tasks[i].classList.remove('activate');
                }
            }
            todayStudyArea.classList.toggle('hide');
            taskView.classList.toggle('activate');
            // this.classList.toggle('activate');
            /*if (taskView.classList.contains('activate')) {
                this.parentElement.classList.add('activate');
            } else {
                this.parentElement.classList.remove('activate');
            }*/
        })
    });

    detailBtnDel.addEventListener('click', function (e) {
        e.preventDefault();
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
        let urls = detailDelForm.getAttribute('action');

        axios({
            method: 'POST',
            url: `${urls}`,
            headers: {
                'X-CSRFToken': csrftoken,
            },
        }).then((res) => {
            const data = res.data.resJson;
            const jsonParse = JSON.parse(data)
            
            // ???????????? tasks[targetIdx].remove() ??? ?????????
            // 3?????? ???????????? ?????? ???, ????????? ?????? ????????? ???????????? ???????????? ???
            // ????????? ???????????? ?????? ????????? ????????? ???????????? title ??? ?????????.
            // ?????????????????? ?????????????????? ???????????? ???????????? ????????? ?????? ?????????.
            const targetIdx = Number(e.target.dataset.idx);
            tasks.forEach(function (v, i, o) {
                if (v.classList.contains('activate'))
                {
                    v.remove();
                    return false;
                }
            });

            taskView.classList.remove('activate');

            taskConts = document.querySelectorAll('.today-task-list .task .task-cont');

            // ?????????????????? ??????
            const testBox = document.querySelectorAll('.testbox');
            const timetableAreaL = document.querySelector('.timetable-left');
            const timetableAreaR = document.querySelector('.timetable-right');
            let lng = testBox[targetIdx].dataset.timeArray.length - 1;
            let arr = testBox[targetIdx].dataset.timeArray.substring(1, lng);

            arr = arr.split(', ')
            let startAt = Number(arr[0]);
            let minCnt = Number(arr[1]);

            if (startAt > 54) {
                startAt -= 54;
                for (let j = startAt; j < startAt + minCnt; j++) {
                    timetableAreaR.children[j].classList.remove('activate');
                }
            } else {
                if (minCnt > 7) {
                    let minCntR = 0;
                    if (startAt + minCnt > 54) {
                        minCntR = startAt + minCnt - 54;
                        for (let j = startAt; j < startAt + minCnt - minCntR; j++) {
                            timetableAreaL.children[j].classList.remove('activate');
                        }
                        for (let k = 0; k < minCntR; k++) {
                            timetableAreaR.children[k].classList.remove('activate');
                        }

                    } else {
                        for (let j = startAt; j < startAt + minCnt; j++) {
                            timetableAreaL.children[j].classList.remove('activate');
                        }
                    }
                } else {
                    for (let j = startAt; j < startAt + minCnt; j++) {
                        timetableAreaL.children[j].classList.remove('activate');
                    }
                }
            }
            const testBoxCont = document.querySelector('.time-test');
            testBoxCont.children[targetIdx].remove();

        })
    })



} catch { }

try {
    // ??????????????? ??????
    const timetableAreaL = document.querySelector('.timetable-left');
    const timetableAreaR = document.querySelector('.timetable-right');
    const timetableHourL = document.querySelector('.hour-left');
    const timetableHourR = document.querySelector('.hour-right');
    let num = 54

    while (timetableAreaL.children.length < 54) {
        const timeMinBox = document.createElement('p');
        timeMinBox.classList.add('timetable-min');
        timetableAreaL.appendChild(timeMinBox);
    }
    while (timetableAreaR.children.length < 54) {
        const timeMinBox = document.createElement('p');
        timeMinBox.classList.add('timetable-min');
        timetableAreaR.appendChild(timeMinBox);
    }
    for (let i = 0; i < 9; i++) {
        const hourTimeL = document.createElement('p');
        hourTimeL.innerText = i + 6;
        timetableHourL.appendChild(hourTimeL);

        const hourTimeR = document.createElement('p');
        hourTimeR.innerText = i + 15;
        timetableHourR.appendChild(hourTimeR);
    }


    // ?????? ??????????????? time_list ??? ????????? DOM ????????????

    const testBox = document.querySelectorAll('.testbox');

    for (let i = 0; i < testBox.length; i++) {
        // dataset?????? time_list ??? ?????????
        let lng = testBox[i].dataset.timeArray.length - 1;
        let arr = testBox[i].dataset.timeArray.substring(1, lng);

        // str ??? num ?????? ?????? > for ??? ???????????? ????????? ?????????
        arr = arr.split(', ')
        let startAt = Number(arr[0]);
        let minCnt = Number(arr[1]);

        if (startAt > 54) {
            startAt -= 54;
            for (let j = startAt; j < startAt + minCnt; j++) {
                timetableAreaR.children[j].classList.add('activate');
            }
        } else {
            if (minCnt > 7) {
                let minCntR = 0;
                // let minCntR = minCnt - 7;
                // console.log(startAt + minCnt);
                // for (let j = startAt; j < startAt + minCnt; j++) {
                //     timetableAreaL.children[j].classList.add('activate');
                // }
                if (startAt + minCnt > 54) {
                    minCntR = startAt + minCnt - 54;
                    for (let j = startAt; j < startAt + minCnt - minCntR; j++) {
                        timetableAreaL.children[j].classList.add('activate');
                    }
                    for (let k = 0; k < minCntR; k++) {
                        timetableAreaR.children[k].classList.add('activate');
                    }
                    // for (let j = startAt; j < startAt + 6; j++) {
                    //     timetableAreaL.children[j].classList.add('activate');
                    // }
                    // if (startAt + 6 - 54 > 0) {
                    //     for (let k = startAt + 6 - 54; k < minCntR; k++) {
                    //         timetableAreaR.children[k].classList.add('activate');
                    //     }
                    // } else {
                    //     console.log(54 - startAt + 6);
                    // }
                } else {
                    for (let j = startAt; j < startAt + minCnt; j++) {
                        timetableAreaL.children[j].classList.add('activate');
                    }
                }
            } else {
                for (let j = startAt; j < startAt + minCnt; j++) {
                    timetableAreaL.children[j].classList.add('activate');
                }
            }
        }

    }
} catch { }

try {
    const todayDate = document.querySelector('#id_when');
    const currentDate = new Date().toLocaleString();
    const todayMonth = document.querySelector('.today-date-month');
    const todayDay = document.querySelector('.today-date-day');

    // ?????? ?????? ????????? todos-today ??? date?????? value ????????? ?????? ????????????
    todayDate.value = currentDate.substring(0, 10);

    // todos-today ????????? ???????????? ??????
    todayMonth.innerText = currentDate.split('. ')[1];
    todayDay.innerText = currentDate.split('. ')[2];

} catch { }


try {
    // ?????? activate
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
    const weekdayNow = week[new Date().getDay()];
    const prevWeekValue = document.querySelector('.prev-week');
    const nextWeekValue = document.querySelector('.next-week');
    const weekUpdate = function (days) {
        let datumP = new Date();
        // console.log(weekSun);
        datumP.setDate(datumP.getDate() - datumP.getDay() + days);
        let prevWeek = datumP.toLocaleString().split('. ').slice(0, 3);
        // console.log(prevWeek);
        prevWeekValue.innerText = `~ ${prevWeek[0]}.${prevWeek[1]}.${prevWeek[2]}`;
        datumP.setDate(datumP.getDate() + 6);
        console.log(datumP);
        let nextWeek = datumP.toLocaleString().split('. ').slice(0, 3);
        // console.log(nextWeek);
        nextWeekValue.innerText = `${nextWeek[0]}.${nextWeek[1]}.${nextWeek[2]} ~`;
    };
    weekUpdate(0);

    // console.log(datumP.toLocaleString().split('. ')[2]);


    const weekArea = document.querySelector('.week-area');
    const weekdayAll = document.querySelectorAll('.weekday');

    for (i = 0; i < week.length; i++) {
        weekdayAll[i].innerText = week[i];
        if (weekdayAll[i].innerText === weekdayNow) {
            weekdayAll[i].classList.add('activate');
            const boxWidth = document.querySelector('.box').clientWidth;
            const scrollPos = (boxWidth * i);
            weekArea.scrollTo({
                top: 0,
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    }


    // ??????, ????????? ?????? ?????????
    const weekBtn = document.querySelectorAll('.week-btn');

    let cnt = 0;
    let weekCnt = 0;
    const weekMove = function (e) {
        e.preventDefault();
        // ?????? ?????? ????????????

        const isPrev = e.target.parentElement.dataset.isPrev;
        let urls = '/todos/week/';
        if (isPrev === 'true') {
            cnt--;
            weekCnt -= 7;
            console.log(weekCnt);
            cnt = String(cnt);
            urls = `${urls}${cnt}`
            e.target.parentElement.setAttribute('data-week-cnt', `${cnt}`)
        } else {
            cnt++;
            weekCnt += 7;
            cnt = String(cnt);
            urls = `${urls}${cnt}`
            e.target.parentElement.setAttribute('data-week-cnt', `${cnt}`)
        }
        e.target.parentElement.setAttribute('href', `${urls}`);

        weekUpdate(weekCnt);

        for (let i = 0; i < 7; i++) {
            // ???????????? ????????? ????????? activate ?????? ??????
            if (cnt != 0) {
                weekdayAll[i].classList.remove('activate');
                weekArea.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (weekdayAll[i].innerText === weekdayNow && cnt == 0) {
                weekdayAll[i].classList.add('activate');
                const boxWidth = document.querySelector('.box').clientWidth;
                const scrollPos = (boxWidth * i);
                weekArea.scrollTo({
                    top: 0,
                    left: scrollPos,
                    behavior: 'smooth'
                });
            }
        }

        //  todo ????????? ???????????? axios
        axios({
            method: 'get',
            url: `${urls}`,
        })
            .then((res) => {
                let data = res.data.resJson;
                jsonParse = JSON.parse(data[1]);

                const tasklist = document.querySelectorAll('.task-list');

                // ??? ????????? ????????? ??? ?????? html ????????????
                for (let i = 0; i < 7; i++) {
                    while (tasklist[i].hasChildNodes()) {
                        tasklist[i].removeChild(
                            tasklist[i].firstChild
                        )
                    }
                }

                for (let i = 0; i < data.length; i++) {
                    jsonParse = JSON.parse(data[i]);

                    // ????????? json??? ???????????? ????????? ??? ???????????? ????????????
                    if (jsonParse.length != 0) {
                        for (let j = 0; j < jsonParse.length; j++) {
                            if (jsonParse[j].fields.is_completed) {
                                tasklist[i].insertAdjacentHTML("beforeend", `
                                <li class="task deactivate">
                                <p class="task-cont">${jsonParse[j].fields.title}</p>
                                <input type="checkbox" name="task-chb${jsonParse[j].pk}" id="task-chb${jsonParse[j].pk}" checked="checked">
                                <label for="task-chb${jsonParse[j].pk}" class="task-chb"></label>
                                </li>
                                `)
                            } else {
                                tasklist[i].insertAdjacentHTML("beforeend", `
                                <li class="task">
                                <p class="task-cont">${jsonParse[j].fields.title}</p>
                                <input type="checkbox" name="task-chb${jsonParse[j].pk}" id="task-chb${jsonParse[j].pk}" >
                                <label for="task-chb${jsonParse[j].pk}" class="task-chb"></label>
                                </li>
                                `)
                            }

                        }
                    } else {
                        // ???????????? ????????? ????????? ???????????? ?????? ??????
                        tasklist[i].insertAdjacentHTML("beforeend", `
                        <li class="task task-empty">
                        <p class="task-cont"> ????????? ????????? ????????? :(</p>
                        </li>
                        `)
                    }
                }
            });
    };

    weekBtn.forEach(btn => {
        btn.addEventListener('click', weekMove)
    });

} catch { }

// Todo is_completed ?????????
try {
    // Axios POST method csrf token setting
    // link : https://velog.io/@corner3499/Django-9-CSRF-Token-%EC%B2%98%EB%A6%AC-Todo%EC%9D%98-%EB%A7%88%EC%A7%80%EB%A7%89
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';

    // ?????? ???????????? ???????????? input tags ?????? ?????? ??????
    let inputTags = [];
    // task ???????????? ?????? ???????????? ??? ?????????
    document.querySelectorAll(".task").forEach(
        function (v, i, o) {
            // ????????? ??? input ????????? ?????????
            // ?????? ??????????????? p ?????? ?????? ???????????? 
            // ?????? if ????????? ??? ???????????? ????????????.
            if(v.children.length > 1)
                inputTags.push(o[i].children[1]);
        }
    );

    inputTags.forEach(function (v, i, o) {
        // ????????? ???????????? ?????? ????????? ?????? ????????? ????????? ?????? 
        if (v.checked)
            v.parentElement.classList.add("deactivate");
        else
            v.parentElement.classList.remove("deactivate");

        v.addEventListener("click", () => {
            // ?????? ?????? ??? ??? todo id ??? ?????? 
            is_completed = (v.checked) ? true : false;
            todoId = v.id.split("task-chb")[1];

            // axios post arguments ??????
            url = "/todos/is_completed/";
            data = {
                is_completed,
                todoId,
            };

            // axios ????????? ??????
            axios.post(
                url,
                data
            ).then((res) => {
                // ???????????? ??? ???????????? ??????
                // console.log(res.data.is_completed);

                // ???????????? ?????? ????????? ????????? ?????? 
                if (res.data.is_completed)
                    v.parentElement.classList.add("deactivate");
                else
                    v.parentElement.classList.remove("deactivate");
            });
        });
    });

} catch { }

try {
    const achievePer = document.querySelector(".achieve-per");
    const achieveNum = document.querySelector('.achiever-num');

    achieveNum.innerText = `${achievePer.dataset.achievePer}%`;
    achievePer.style.width = `${achievePer.dataset.achievePer}%`;

} catch { }


try {
    const startDate = document.querySelector("#study-start-date");
    const endDate = document.querySelector("#study-end-date");
    startDate.addEventListener("input", function (event) {
        endDate.min = event.target.value;
    });
} catch { }

