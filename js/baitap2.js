/**
 * Bài tập tính trung bình 5 số thực
 * 
 * Khối 1 Input: 
 * 5 số khi khách hàng nhập vào gồm
 * num1 num2 num3 num4 num5
 * 
 * Khối 2 Các bước xử lý
 * B1: Tìm thẻ html và lấy giá trị
 * B2: Xây dựng công thức tính
 * average(trung bình cộng) = (num1 + num2 + num3 + num4 + num5) / 5
 * B3 Hiển thị UI
 * Khối 3 Output
 * Hiển thị kết quả trung bình  5 số thực
 * 
 */

// Hàm tính
// Khai báo hàm
function average5Number(){

    var num1 = document.getElementById('so1').value;
    var num2 = document.getElementById('so2').value;
    var num3 = document.getElementById('so3').value;
    var num4 = document.getElementById('so4').value;
    var num5 = document.getElementById('so5').value;

    // Tính trung bình cộng 5 số thực
    var average = (parseFloat(num1) + parseFloat(num2) +parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) / 5;
    //  Hiển thị UI

    document.getElementById('txtAverage').innerHTML = 'Trung bình cộng 5 số là: '+ average;
}

// Gắn sự  kiện click cho btn tính

document.getElementById('btnAverage').onclick = average5Number;