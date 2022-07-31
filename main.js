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

// Bài tập 3
// input 3 số nguyên
// output các số chẵn, các số lẻ
// xử lý: 

function count(){
    let no1 = +document.getElementById('number1').value;
    let no2 = +document.getElementById('number2').value;
    let no3 = +document.getElementById('number3').value;
    let countEven = 0;
    let countOdd = 0;
    
    if(no1 % 2 === 0){
        countEven++
    }else {countOdd++}
    if(no2 % 2 === 0){
        countEven++
    }else {countOdd++}
    if(no3 % 2 === 0){
        countEven++
    }else {countOdd++};
    let result = "<p>" + "Có " + countEven + " số chẵn" + ", " + countOdd + " số lẻ" +"</p>";
    document.getElementById('count').innerHTML = result

    
} 
// Bài tập 4
 

function tamGiac(){
    let a = +document.getElementById('canh1').value;
    let b = +document.getElementById('canh2').value;
    let c = +document.getElementById('canh3').value;
    
    if(a < b + c & b < a + c & c < a + b){
        if(c*c === b*b + a*a | b*b === a*a + c*c | a*a === b*b + c*c){
            document.getElementById('duDoan').innerHTML = "<p>" + "Hình tam giác vuông" + "</p>";
        }else if(a===b & b===c){
            document.getElementById('duDoan').innerHTML = "<p>" + "Hình tam giác đều" + "</p>";
        }else if(a===b | a===c | b===c){
            document.getElementById('duDoan').innerHTML = "<p>" + "Hình tam giác cân" + "</p>";
        }else{
            document.getElementById('duDoan').innerHTML = "<p>" + "Hình tam giác khác" + "</p>";
        }
    }else {
        console.log("kp TG");
    }
    

}