// 輸入資料 存入localStorage stringify轉成字串
// 輸出資料 從localStorage提取資料 parse轉成物件
document.querySelector(".btn").addEventListener("click", newData);
var data = JSON.parse(localStorage.getItem("data"))|| [];

function newData(){
    var txt = document.querySelector('.textTyping').value;
    var todo ={thing : txt};
    data.push(todo);
    localStorage.setItem("data", JSON.stringify(data));
    showData();
}
// 寫for迴圈 到ul.innerHTML裡面塞入li
function showData(){
    var str ="";
    for(let i = 0;data.length > i;i++){
        str +=  "<li>"+ data[i].thing +`<a href=""><span></span></a></li>`
    };
    document.querySelector(".list").innerHTML = str;
}

