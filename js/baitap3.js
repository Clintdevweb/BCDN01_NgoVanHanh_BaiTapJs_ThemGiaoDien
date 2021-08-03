/**
 * Khối 1 Input
 * Số tiền USD khách hàng nhập vào usd
 *  
 * Khối 2 Các bước xử lý
 * B1: Tìm thẻ html và lấy giá trị
 * B2: Xây dựng công thức chuyển đổi
 * VND = USD * 235000
 * Bước 3: Hiển thị UI 
 * Khối 3 Output
 * 
 * Số tiền việt nam đồng khi quy đổi từ USD sang(VDN)
 */

// Tạo sự kiện click btn Change



document.getElementById('btnChange').onclick =  function(){
    var USD = parseInt(document.getElementById('moneyUSD').value);
    console.log(USD);
    // Xây dựng công thức chuyển đổi
    var VND = USD * 23500;
    console.log(VND);
    document.getElementById('moneyVND').innerHTML = VND;
}
