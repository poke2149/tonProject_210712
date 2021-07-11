let job_idx = 0;
var windowsObj;
let job_bg_item = [
    document.getElementById("bg_img"),
    document.getElementById("present_img"),
    document.getElementById("q1_bg0"),
    document.getElementById("q1_bg1"),
    document.getElementById("q1_bg2"),

]
let job_link_item = [
    document.getElementById("job_link0"),
    document.getElementById("job_link1")
]
let job_img_item = [
    document.getElementById("page_num"),
    document.getElementById("title_txt"),
    document.getElementById("page_icon"),
    document.getElementById("icon_txt"),
    document.getElementById("q1_img"),
    document.getElementById("q1_txt"),
    document.getElementById("q2_txt"),
    document.getElementById("q2_play0"),
    document.getElementById("q2_play1"),
    document.getElementById("q3_img"),
    document.getElementById("q3_txt"),
    document.getElementById("page_num")
]

let jobs = [
    document.getElementById("post"),
    document.getElementById("programer"),
    document.getElementById("smartfarm"),
    document.getElementById("creater"),
    document.getElementById("cooker"),
    document.getElementById("librarian"),
    document.getElementById("dron"),
    document.getElementById("charecter"),
    document.getElementById("athlete"),
    document.getElementById("environment"),
    document.getElementById("disaster"),
    document.getElementById("healthcare")
]
function init() {
    if (document.getElementById("explanation-job-img")) {
        document.getElementById("explanation-job-img").style.display = "none";
    }
}
init();
function changeimg(idx) {
    switch (idx) {
        case 0:
            jobs[0].src = "images/Jobbtn/web_8page_1_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 1:
            jobs[1].src = "images/Jobbtn/web_8page_2_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 2:
            jobs[2].src = "images/Jobbtn/web_8page_7_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 3:
            jobs[3].src = "images/Jobbtn/web_8page_8_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 4:
            jobs[4].src = "images/Jobbtn/web_8page_3_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 5:
            jobs[5].src = "images/Jobbtn/web_8page_4_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 6:
            jobs[6].src = "images/Jobbtn/web_8page_9_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 7:
            jobs[7].src = "images/Jobbtn/web_8page_10_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 8:
            jobs[8].src = "images/Jobbtn/web_8page_5_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 9:
            jobs[9].src = "images/Jobbtn/web_8page_6_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 10:
            jobs[10].src = "images/Jobbtn/web_8page_11_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        case 11:
            jobs[11].src = "images/Jobbtn/web_8page_12_2.png"
            flag_change_windows(false);
            flag_job_img(idx);
            job_idx = idx;
            break;
        default:
            alert("error!");
            break;
    }
}
function flag_change_windows(b_flag_window) {
    b_flag_window = !b_flag_window;
    if (b_flag_window) {
        setTimeout(() => {
            document.getElementById("selet-job-img").style.display = "none";
            document.getElementById("explanation-job-img").style.display = "block";
        }, 500);
    } else {
        setTimeout(() => {
            document.getElementById("selet-job-img").style.display = "block";
            document.getElementById("explanation-job-img").style.display = "none";
        }, 500);
    }
}
function flag_job_img(num) {
    switch (num) {
        case 1:
            job_img_item[0].src = "images/page9/1/02_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/1/title.png";
            job_img_item[2].src = "images/page9/1/02_icon.png";
            job_img_item[3].src = "images/page9/1/02_text.png";
            job_img_item[4].src = "images/page9/1/02_img.png";
            job_img_item[5].src = "images/page9/1/02_content_01.png";
            job_img_item[6].src = "images/page9/1/02_content_02.png";
            job_img_item[7].src = "images/page9/1/02_play_01.png";
            job_img_item[8].src = "images/page9/1/02_play_02.png";
            job_img_item[9].src = "images/page9/1/02_charc.png";
            job_img_item[10].src = "images/page9/1/02_content_03.png";
            job_link_item[0].href = "https://www.youtube.com/watch?v=GlhhMN2xEGM";
            job_link_item[1].href = "http://www.tvworknet.or.kr/program/programSubVodDetail.do?programKey=1001&contentCid=14387";
            break;
        case 2:
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/2/07_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/2/07_title.png";
            job_img_item[2].src = "images/page9/2/07_icon.png";
            job_img_item[3].src = "images/page9/2/07_text.png";
            job_img_item[4].src = "images/page9/2/07_pic.png";
            job_img_item[5].src = "images/page9/2/07_content_1.png";
            job_img_item[6].src = "images/page9/2/07_content_2.png";
            job_img_item[7].src = "images/page9/2/07_play_1.png";
            job_img_item[8].src = "images/page9/2/07_play_2.png";
            job_img_item[9].src = "images/page9/2/07_charc.png";
            job_img_item[10].src = "images/page9/2/07_content_3.png";
            job_link_item[0].href = "https://www.youtube.com/watch?v=gBW9bDj9ocg";
            job_link_item[1].href = "https://www.youtube.com/watch?v=gBW9bDj9ocg";
            break;
        case 3:
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/3/11_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/3/11_title.png";
            job_img_item[2].src = "images/page9/3/11_icon.png";
            job_img_item[3].src = "images/page9/3/11_text.png";
            job_img_item[4].src = "images/page9/3/11_pic.png";
            job_img_item[5].src = "images/page9/3/11_content_1.png";
            job_img_item[6].src = "images/page9/3/11_content_2.png";
            job_img_item[7].src = "images/page9/3/11_play.png";
            job_img_item[8].src = "";
            job_img_item[9].src = "images/page9/3/11_charc.png";
            job_img_item[10].src = "images/page9/3/11_content_3.png";
            job_link_item[0].href = "https://www.career.go.kr/cnet/front/web/movie/catMapp/catMappView.do?ARCL_SER=1013310";
            job_link_item[1].href = "";
            break;
        case 4:
            document.getElementById("vr_img_icon").style.marginLeft = "35%"
            document.getElementById("vr_img_icon").style.marginTop = "-51.5%"
            job_img_item[0].src = "images/page9/4/03_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/4/page9_3_title.png";
            job_img_item[1].style.width = "15%";
            job_img_item[2].src = "images/page9/4/03_icon.png";
            job_img_item[3].src = "images/page9/4/03_text.png";
            job_img_item[4].src = "images/page9/4/page9_3_pic.png";
            job_img_item[5].src = "images/page9/4/03_content_01.png";
            job_img_item[6].src = "images/page9/4/03_content_02.png";
            job_img_item[7].src = "images/page9/4/03_play_01.png";
            job_img_item[8].src = "images/page9/4/03_play_02.png";
            job_img_item[9].src = "images/page9/4/03_charc.png";
            job_img_item[10].src = "images/page9/4/03_content_03.png";
            job_link_item[0].href = "https://www.career.go.kr/jr/video/view?arcl_ser=1000760";
            job_link_item[1].href = "https://www.youtube.com/watch?v=BwcW6KyMDaA";
            break;
        case 5:
            document.getElementById("vr_img_icon").style.marginLeft = "26%"
            job_img_item[0].src = "images/page9/5/04_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/5/04_title.png";
            job_img_item[1].style.width = "7%";
            job_img_item[2].src = "images/page9/5/04_icon.png";
            job_img_item[3].src = "images/page9/5/04_text.png";
            job_img_item[4].src = "images/page9/5/page9_4_pic.png";
            job_img_item[5].src = "images/page9/5/04_content_01.png";
            job_img_item[6].src = "images/page9/5/04_content_02.png";
            job_img_item[7].src = "images/page9/5/04_play_01.png";
            job_img_item[8].src = "images/page9/5/04_play_02.png";
            job_img_item[9].src = "images/page9/5/04_charc.png";
            job_img_item[10].src = "images/page9/5/04_content_03.png";
            job_link_item[0].href = "http://www.tvworknet.or.kr/program/programSubVodDetail.do?programKey=1001&contentCid=14289";
            job_link_item[1].href = "https://www.youtube.com/watch?v=-X6uqtdI-4I";
            break;
        case 6:
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/6/08_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/6/08_title.png";
            job_img_item[2].src = "images/page9/6/08_icon.png";
            job_img_item[3].src = "images/page9/6/08_text.png";
            job_img_item[4].src = "images/page9/6/08_pic.png";
            job_img_item[5].src = "images/page9/6/08_content_1.png";
            job_img_item[6].src = "images/page9/6/08_content_2.png";
            job_img_item[7].src = "images/page9/6/08_play_1.png";
            job_img_item[7].style.width = "17%";
            job_img_item[7].style.marginTop = "-27%";
            job_img_item[8].src = "images/page9/6/08_play_2.png";
            job_img_item[8].style.width = "17%";  
            job_img_item[8].style.marginTop = "-27%";
            job_img_item[9].src = "images/page9/6/08_charc.png";
            job_img_item[10].src = "images/page9/6/08_content_3.png";
            job_link_item[0].href = "https://www.career.go.kr/cnet/front/web/movie/catMapp/catMappView.do?ARCL_SER=1013250";
            job_link_item[1].href = "https://www.career.go.kr/cnet/front/web/movie/catMapp/catMappView.do?ARCL_SER=1012645";
            break;
        case 7:
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/7/09_num.png";
            job_img_item[0].style.width = "6%";
            job_img_item[1].src = "images/page9/7/09_title.png";
            job_img_item[2].src = "images/page9/7/09_icon.png";
            job_img_item[3].src = "images/page9/7/09_text.png";
            job_img_item[4].src = "images/page9/7/09_pic.png";
            job_img_item[5].src = "images/page9/7/09_content_1.png";
            job_img_item[6].src = "images/page9/7/09_content_2.png";
            job_img_item[7].src = "images/page9/7/09_play.png";
            job_img_item[8].src = "";
            job_img_item[9].src = "images/page9/7/09_charc.png";
            job_img_item[10].src = "images/page9/7/09_content_3.png";
            job_link_item[0].href = "http://news.ebs.co.kr/ebsnews/menu1/newsAllView/10661728/H?eduNewsYn=N";
            job_link_item[1].href = "";
            break;
        case 8:
            job_img_item[0].src = "images/page9/8/05_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/8/05_title.png";
            job_img_item[2].src = "images/page9/8/05_icon.png";
            job_img_item[3].src = "images/page9/8/05_text.png";
            job_img_item[4].src = "images/page9/8/05_pic.png";
            job_img_item[5].src = "images/page9/8/05_content_1.png";
            job_img_item[6].src = "images/page9/8/05_content_2.png";
            job_img_item[7].src = "images/page9/8/05_play_1.png";
            job_img_item[8].src = "images/page9/8/05_play_2.png";
            job_img_item[9].src = "images/page9/8/05_charc.png";
            job_img_item[10].src = "images/page9/8/05_content_3.png";
            job_link_item[0].href = "https://www.career.go.kr/jr/video/view?arcl_ser=1013200";
            job_link_item[1].href = "https://www.career.go.kr/jr/video/view?arcl_ser=1000705";
            break;
        case 9:
            job_img_item[0].src = "images/page9/9/06_num.png";
            job_img_item[0].style.width = "5%";
            job_img_item[1].src = "images/page9/9/06_title.png";
            job_img_item[2].src = "images/page9/9/06_icon.png";
            job_img_item[3].src = "images/page9/9/06_text.png";
            job_img_item[4].src = "images/page9/9/06_pic.png";
            job_img_item[5].src = "images/page9/9/06_content_1.png";
            job_img_item[6].src = "images/page9/9/06_content_2.png";
            job_img_item[7].src = "images/page9/9/06_play.png";
            job_img_item[8].src = "";
            job_img_item[9].src = "images/page9/9/06_charc.png";
            job_img_item[10].src = "images/page9/9/06_content_3.png";
            job_link_item[0].href = "https://www.worktv.or.kr/program/programSubVodDetail.do?programKey=56018&contentCid=82771";
            job_link_item[1].href = "";
            break;
        case 10:
            document.getElementById("vr_img_icon").style.marginLeft = "43%"
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/10/10_num.png";
            job_img_item[0].style.width = "6%";
            job_img_item[1].src = "images/page9/10/10_title.png";
            job_img_item[1].style.width = "25%";
            job_img_item[1].style.marginTop = "-51.5%";
            job_img_item[2].src = "images/page9/10/10_icon.png";
            job_img_item[3].src = "images/page9/10/10_text.png";
            job_img_item[4].src = "images/page9/10/10_pic.png";
            job_img_item[5].src = "images/page9/10/10_content_1.png";
            job_img_item[6].src = "images/page9/10/10_content_2.png";
            job_img_item[7].src = "images/page9/10/10_play.png";
            job_img_item[8].src = "";
            job_img_item[9].src = "images/page9/10/10_charc.png";
            job_img_item[10].src = "images/page9/10/10_content_3.png";
            job_link_item[0].href = "https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=356";
            job_link_item[1].href = "";
            break;
        case 11:
            document.getElementById("vr_img_icon").style.marginLeft = "43%"
            job_bg_item[0].src = "images/page9/future/page_9_background_2.png";
            job_bg_item[1].src = "images/page9/future/page9_future.png";
            job_bg_item[2].src = "images/page9/future/page9_2_q1.png";
            job_bg_item[3].src = "images/page9/future/page9_2_q2.png";
            job_bg_item[4].src = "images/page9/future/page9_2_q3.png";
            job_img_item[0].src = "images/page9/11/12_num.png";
            job_img_item[0].style.width = "6%";
            job_img_item[1].src = "images/page9/11/12_title.png";
            job_img_item[1].style.width = "25%";
            job_img_item[1].style.marginTop = "-51.5%";
            job_img_item[2].src = "images/page9/11/12_icon.png";
            job_img_item[3].src = "images/page9/11/12_text.png";
            job_img_item[4].src = "images/page9/11/12_pic.png";
            job_img_item[5].src = "images/page9/11/12_content_1.png";
            job_img_item[6].src = "images/page9/11/12_content_2.png";
            job_img_item[7].src = "images/page9/11/12_play.png";
            job_img_item[8].src = "";
            job_img_item[9].src = "images/page9/11/12_charc.png";
            job_img_item[10].src = "images/page9/11/12_content_3.png";
            job_link_item[0].href = "http://www.worktv.or.kr/program/programSubVodDetail.do;jsessionid=eyXMR4efmceEzQ3VaIaDggpbBG3jDTdpngSyNFx09K4Gy2KqJQ8hQrHgEHa8Unvt.worktv_was_servlet_engine3?programKey=53509&contentCid=70327";
            job_link_item[1].href = "";
            break;
    }
}
function pop_windows(url , title) {
    windowsObj = window.open(url, title, 'width=100% , height = 500 , left = 50%, top = 50%, toolbars=no,scrollbars=no');
    localStorage.setItem("item", job_idx);
    return false;
}