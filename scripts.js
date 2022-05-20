let userCollege = "AA大學";
let userName = "晴海徹";
let headerImg = "https://i.imgur.com/HMjL81j.png";
let collegeImg="https://letket.com/wp-content/uploads/2021/06/logo-social.png";
function change(e) {
    $("span:contains('黃韋誠')").text(userName);
    $("span:contains('國立雲林科技大學')").text(userCollege);
    // $("[alt=顯示圖片]").attr("src", "https://i.imgur.com/HMjL81j.png");
    // image = chrome.runtime.getURL("image/tooruche_128.png");
    $("img.ng-scope").removeAttr("src").attr("src", headerImg);
    $("img.logo.ng-scope").removeAttr("src").attr("src", collegeImg);
    console.log("edited.");
    let size = $("span:contains('黃韋誠')").length;
    console.log(size + ". From " + e);
}

// 先在HTML生成的時候，下面新增一個覆蓋用的div
const floater = document.createElement('div');
floater.setAttribute('style', 'display: block; position: absolute;  top: 0%;  left: 0%; width: 100%; height: 100%; background-color: #FFFFFF; opacity: 1');
floater.setAttribute('id', 'floater');
document.querySelector("body").appendChild(floater);
$("title").text(userCollege);
console.log("Cover success.");

// $("body").attr("onload", change("body"));

// 在完全加載完後改名
window.onload = async function () {
    await setTimeout(() => {
        change("onload");
        $("#floater").css("display", "none");
        console.log("Cover removed.");
    }, 300);
    // 拿掉覆蓋用div
};



// window.addEventListener("haschange", change("haschange"));

