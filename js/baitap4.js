// Bài tập 4
/**
 * Khối 1 Input
 * Chiều rộng
 * Chiều dài
 * 
 * Khối 2
 * Các bước xử lý:
 * B1 Tìm thẻ html và lấy giá trị
 * B2 Xây dựng công thức tính
 * C (biến C được hiểu là chu vi hình chữ nhật)
 * S (biến S được hiểu là diện tích hình chữ nhật)
 * width là chiều rộng và length là chiều dài
 * Chu vi hình chữ nhật:
 * C = (width + length) * 2
 * S = wdth * length
 * B3  Hiển thị UI
 * 
 * Khối 3 Output
 * Kết quả của chu vi và diện tích hình chữ nhật
 * 
 */

// Tạo sự kiện click btnCount

document.getElementById('btnCount').onclick = function(){
    var width = parseFloat(document.getElementById('inputWidth').value);
    var length = parseFloat(document.getElementById('inputLength').value);
    // Tính chu và diện tích hình chữ nhật

    var C = (width + length) * 2;
    var S = width * length;

    document.getElementById('txtResult').innerHTML = "Diện tích hình chữ nhật là: " + S + "<br>" + "Chu vi hình chữ nhật là: " + C;


}