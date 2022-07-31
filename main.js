// input: nhập 3 số
// Output: sắp xếp 3 số tăng dần
// Xử lý: tạo biến min. sau đó lấy 2 số bất kì so sánh số nào nhỏ hơn thì gán nó với min, lấy số còn lại so sánh với min nếu min nhỏ hơn
// thì so sánh 


function sort() {
    var a = document.getElementById('no1').value * 1;
    var b = document.getElementById('no2').value * 1;
    var c = document.getElementById('no3').value * 1;
    if (a > b) {
        if (b > c) {
            result =  + c + "<" + b + "<" + a
        }
        else if (a > c) {

            result =  + b + "<" + c + "<" + a;
        } else {

            result =  + b + "<" + a + "<" + c;
        }
    } else if (b > c) {
        if (a > c) {

            result =  + c + "<" + a + "<" + b;
        } else {

            result =  + a + "<" + c + "<" + b;
        }
    } else {

        result =  + a + "<" + b + "<" + c;
    }
    document.getElementById('result').innerHTML = "sắp xếp: " + result;


}
// Bài Tập 2
// input options value

// output Xin chao value cua options
// 


function submit(){
    var s = document.getElementById('item1');
var item1 = s.options[s.selectedIndex].value;

if (item1 == "father") {
    document.getElementById('ketQua').innerHTML = "xin chào " + item1;
}
else if (item1 == "mother") {
    document.getElementById('ketQua').innerHTML = "xin chào " + item1;
}
else if (item1 == "brother") {
    document.getElementById('ketQua').innerHTML = "xin chào " + item1;
}else{
    document.getElementById('ketQua').innerHTML = "xin chào " + item1;
}
}

