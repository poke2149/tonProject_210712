let clothing = 0, eating = 1, health = 2,
    communication = 3, rules = 4, life_main_img = 5, life_rules_img = 6, webcam_img = 7;
let quelist = [false, false, false, false, false,
    false, false, false, false, false]
let complate_chek = [false, false, false, false, false,
    false, false, false, false, false]

let check_yes = [
    document.getElementById("yes_0_0"),
    document.getElementById("yes_0_1"),
    document.getElementById("yes_0_2"),
    document.getElementById("yes_0_3"),
    document.getElementById("yes_0_4"),
    document.getElementById("yes_0_5"),
    document.getElementById("yes_0_6"),
    document.getElementById("yes_0_7"),
    document.getElementById("yes_0_8"),
    document.getElementById("yes_0_9")
]
let check_no = [
    document.getElementById("no_0_0"),
    document.getElementById("no_0_1"),
    document.getElementById("no_0_2"),
    document.getElementById("no_0_3"),
    document.getElementById("no_0_4"),
    document.getElementById("no_0_5"),
    document.getElementById("no_0_6"),
    document.getElementById("no_0_7"),
    document.getElementById("no_0_8"),
    document.getElementById("no_0_9")
]
let life_item = [
    document.getElementById("clothing"),
    document.getElementById("eating"),
    document.getElementById("health"),
    document.getElementById("communication"),
    document.getElementById("rules"),
    document.getElementById("life_main_img"),
    document.getElementById("life_rules_img"),
    document.getElementById("life_webcam_container")
]
function init() {
    life_item[life_rules_img].style.display = "none";
    document.getElementById("checklist_compalate").style.display = "none";
    life_item[webcam_img].style.display = "none";
}
init();
// 클릭이미지 변경
function flag_life_contents(num) {
    switch (num) {
        case 0:
            life_item[clothing].src = "images/last/web10_1_2.png";
            page_change_flag_fun(0);
            webcam_select("teacherble/dress/", num);
            break;
        case 1:
            life_item[eating].src = "images/last/web10_2_2.png";
            page_change_flag_fun(1);
            webcam_select("teacherble/food/", num);
            break;
        case 2:
            life_item[health].src = "images/last/web10_3_2.png";
            page_change_flag_fun(2);
            webcam_select("teacherble/traning/", num);
            break;
        case 3:
            life_item[communication].src = "images/last/web10_4_2.png";
            page_change_flag_fun(3);
            webcam_select("teacherble/face/", num);
            break;
        case 4:
            life_item[rules].src = "images/last/web10_5_2.png";
            page_change_flag_fun(4);
            break;
    }
}
function checklist_check(num, str, _color) {
    switch (num) {// check유무
        case 0:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 1:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 2:
            complate_chek[num] = true;
            if (_color == "green") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_1.png";
                    check_no[num].src = "images/life/5/11_checkbox_1.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_1.png";
                    check_no[num].src = "images/life/5/11_check_1.png";
                    quelist[num] = false;
                }
            }
            break;
        case 3:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 4:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 5:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 6:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 7:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 8:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
        case 9:
            complate_chek[num] = true;
            if (_color == "white") {
                if (str == "yes") {
                    check_yes[num].src = "images/life/5/11_check_2.png";
                    check_no[num].src = "images/life/5/11_checkbox_2.png";
                    quelist[num] = true;
                }
                else {
                    check_yes[num].src = "images/life/5/11_checkbox_2.png";
                    check_no[num].src = "images/life/5/11_check_2.png";
                    quelist[num] = false;
                }
            }
            break;
    }
    complate_check();
}
function complate_check() { // 마지막 검사 확인 함수
    var result = 0;
    if (complate_chek[0] == true && complate_chek[1] == true && complate_chek[2] == true && complate_chek[3] == true && complate_chek[4] == true &&
        complate_chek[5] == true && complate_chek[6] == true && complate_chek[7] == true && complate_chek[8] == true && complate_chek[9] == true) {
        for (i = 0; i < quelist.length; i++) {
            if (quelist[i] == true) {
                result++;
                if (result >= 6) {
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "block";
                    document.getElementById("com_txt_no").style.display = "none";
                }
                else {
                    life_item[life_rules_img].style.display = "none";
                    document.getElementById("checklist_compalate").style.display = "block";
                    document.getElementById("com_txt_yes").style.display = "none";
                    document.getElementById("com_txt_no").style.display = "block";
                }
            }
        }
    }
}
function page_change_flag_fun(num) { //생활배움에서 버튼을 클릭 했을때
    if (num == 0 || num == 1 ||
        num == 2 || num == 3) {
        setTimeout(() => {
            life_item[life_main_img].style.display = "none";
            life_item[webcam_img].style.display = "block";
        }, 500);
    }
    else if (num == 4) {
        setTimeout(() => {
            life_item[life_main_img].style.display = "none";
            life_item[life_rules_img].style.display = "block";
        }, 500);
    }
}
// 티처블 머신 동작 함수
const flip = true;
var status = "stand";
var rungecount = 0;
let model, webcam, main_txt, label_container, label_img,
lunge_count;

function webcam_select(_url, num) {
    const URL = _url;
    main_txt = document.getElementById("webcam_main_txt");
    label_container = document.getElementById("label-container");
    label_img = document.getElementById("label-img");
    lunge_count = document.getElementById("lunge-count");

    async function init_webcam() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        webcam = new tmImage.Webcam(window.innerWidth / 2.5, window.innerHeight / 2.5, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);
        document.getElementById("webcam-container").appendChild(webcam.canvas);

        console.log("loading complate");
    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict(num);
        window.requestAnimationFrame(loop);
    }
    async function predict(_num) {
        if (_num == 0) {// 옷차림

            main_txt.innerHTML = "계절/날씨에 어울리는 옷차림.";
            const prediction = await model.predict(webcam.canvas);

            if(prediction[1].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/rain_dress.png";
            }
            else if(prediction[2].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/spring.png";
            }
            else if(prediction[3].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/summer.png";
            }
            else if(prediction[4].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/winter.png";
            }
            else{
                label_img.src = "";
            }
        }
        else if(_num == 1){

            main_txt.innerHTML = "좋은 음식과 해로운 음식 구별하기.";
            main_txt.style.marginLeft = "16.9%";
            label_container.innerHTML = "음식을 보여 주세요";
            const prediction = await model.predict(webcam.canvas);

                if (prediction[0].className == "해로운음식" && prediction[0].probability.toFixed(2) >= 0.92) {
                    label_img.src = "images/chimg/bed_food.png";
                }
                else if (prediction[2].className == "좋은음식" && prediction[2].probability.toFixed(2) >= 0.92) {
                    label_img.src = "images/chimg/good_food.png";
                }
                else{
                    label_img.src = "";
                }
        }
        else if (_num == 2) {
            main_txt.innerHTML = "몸을 튼튼하게 해보아요.";
            main_txt.style.marginLeft = "27%";
            label_container.innerHTML = "런지운동을 해볼까요?";
            label_container.style.marginLeft = "53%";
            const prediction = await model.predict(webcam.canvas);

            if(prediction[0].className == "제자리" && prediction[0].probability.toFixed(2) >= 0.92){          
                lunge_count.style.display = "block";
                if(status == "squat"){
                    rungecount++;
                    if(rungecount >= 10){
                        lunge_count.style.marginLeft = "65%";
                        if(rungecount >= 100){
                            lunge_count.style.marginLeft = "59%";
                        }
                    }
                    lunge_count.innerHTML = rungecount;
                    lunge_count.style.marginLeft = "68%";
                    label_img.style.display = "none";
                }
                status = "stand";
            }
            else if(prediction[1].className == "런지" && prediction[1].probability.toFixed(2) >= 0.92){
                lunge_count.style.display = "block";
                label_img.style.display = "none";
                status = "squat";
            }
            else if(prediction[3].className == "힘을 내세요" && prediction[3].probability.toFixed(2) >= 0.92){
                lunge_count.style.display = "none";
                label_img.style.display = "block";
                label_img.src = "images/chimg/cheerup.png";
            }
            else{
                lunge_count.style.display = "none";
                label_img.style.display = "none";
                label_img.src = "";
            }
            //#region 런지 카운트 테스트 코드
            // if(prediction[2].className == "런지운동을 해볼까요?" && prediction[2].probability.toFixed(2) >= 0.92){
            //     lunge_count.style.display = "block";
            //     if(status == "squat"){
            //         rungecount++;
            //         if(rungecount >= 10){
            //             lunge_count.style.marginLeft = "65%";
            //             if(rungecount >= 100){
            //                 lunge_count.style.marginLeft = "59%";
            //             }
            //         }
            //         lunge_count.innerHTML = rungecount;
            //         lunge_count.style.marginLeft = "68%";
            //         label_img.style.display = "none";
            //     }
            //     status = "stand";
            // }
            // else if(prediction[3].className == "힘을 내세요" && prediction[3].probability.toFixed(2) >= 0.92){
            //     lunge_count.style.display = "block";
            //     label_img.style.display = "none";
            //     status = "squat";
            // }
            //#endregion 런지 카운트 테스트 코드
        }
        else if(_num == 3){
            main_txt.innerHTML = "얼굴표정으로 나의 마음을 표현해 보아요.";
            main_txt.style.fontSize = "3.3vw";
            main_txt.style.marginLeft = "17.5%";
            label_container.innerHTML = "표정을 지어주세요";
            const prediction = await model.predict(webcam.canvas);
            if(prediction[0].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/sad_face.png";
            }
            else if(prediction[1].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/happy_face.png";
            }
            else if(prediction[2].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/sur_face.png";
            }
            else if(prediction[4].probability.toFixed(2) >= 0.92){
                label_img.src = "images/chimg/no_mask.png";
            }
            else{
                label_img.src = "";
            }
        }
    }
    init_webcam();
}