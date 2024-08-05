// 先用getItem JSON parse 獲取數據轉成物件
// 用push將資料累加進去
// 輸入資料 setItem存入localStorage stringify轉成字串

document.querySelector(".btn").addEventListener("click", newData);
var data =JSON.parse(localStorage.getItem("thing")) || [];
// 一開始就要顯示localStorage的資料
showData(data);

function newData(){
    var textValue = document.querySelector(".textTyping").value;
    var todo = {thing : textValue};
    data.push(todo);
    showData(data);
    localStorage.setItem("thing",JSON.stringify(data));
}


// 寫for迴圈 到ul.innerHTML裡面塞入li 裡面還要塞data值才可以用來後續刪除
function showData(data){
    var str ="";
    for(let i = 0; data.length > i;i++){
        str +=  `<li data-listnum=`+ i + `>`+ data[i].thing +`<a href=""><span></span></a></li>`
    };
    document.querySelector(".list").innerHTML = str;
}

// 利用splice將localStorage資料刪除
// 並用setItem從新將值放回
document.querySelector(".list").addEventListener("click", deleteText);
function deleteText(e){
    // 讓a連結不要一直重整頁面
    e.preventDefault();
    if(e.target.nodeName!=="A"){
        return
    };
    var numDelete = e.target.dataset.listnum;
    data.splice(numDelete,1);
    // 先將locallStorage資料刪除回傳
    localStorage.setItem("thing",JSON.stringify(data));
    // 重新將localstorage資料放回
    showData(data);
}