// Comment - Ghi chú : File code nó sẽ ko đọc cái dòng ghi chú

// Chạy một chương trình hello
// document.write("Hello");

// Khởi tạo một biến
// var _tenBien = xxx; xxx: chuỗi, số => var thì có thể thay đổi giá trị được
// Kiểu số : var number = "Hello123";
// const _soNguyen,SoThuc = 1234; => const : thì không thay đổi giá trị được

// var soNguyen = 123; // Khởi tạo biến soNguyen với giá trị 123
// soNguyen = 234; // Gán biến soNguyen với giá trị 234

// const soNguyen2 = 123; // LÀ giá trị cố định
// soNguyen2 = 234; // SAI
// document.write(soNguyen2)

// var soNguyen = 2;
// var number = 3;
// var chuoiKiTu = "abc"; // KIEU STRING
// var value;
// Toán tử : +, -, *, /
// Dấu "=" : tức là gán giá trị cho biến đứng trước nó

// Khởi tạo hai biến bienA, bienB, 
// bienA gán giá trị bằng 5, 
// bienB gán giá trị bằng 6, 
// hiển thị ra màn hình giá trị của tổng, tích, hiệu, thương của 2 biến đấy
// var A = 5;
// var B = 6;

// var giaTri = (A == B); 
// Dấu "==": tức là so sánh hai giá trị đứng cạnh nó xem bằng nhau hay không và trả về true/false
// document.write(giaTri);

// Điều kiện logic : Trả về true hoặc false
// &&, ||, !

// &&: condition 1 && condition 2 : Trả về TRUE khi và chỉ khi CẢ 2 ĐIỀU KIỆN ĐÚNG
// TRẢ VỀ FALSE khi và chỉ khi : 1 TRONG HAI 2 CÁi HOẶC CẢ HAI đều SAI

// ||: HOẶC => Trả về TRUE khi và chỉ khi 1 TRONG HAI CÁI ĐÚNG
// => Trả về FALSE khi và chỉ khi CẢ 2 CÁI ĐỀU SAI

//! : Nó sẽ trả về ngược lại giá trị nó (CHỈ ÁP DỤNG CHO BIẾN LÀ BOOLEAN)
// var a = 3 < 4; // TRUE => FALSE
// var b = 5 > 3; // TRUE
// document.write(!a && b);
//Giới thiệu về câu lệnh rẽ nhánh
// cấu trúc
// if(diều kiện) {

// } else if(điều kiện tiếp) {

// } else if(điều kiện tiếp) {

// }
// ...
// else {

// }

// if{

// } else {

// }

// DÙng if, else if, else: Khi và chỉ khi có >= 2 trường hợp xảy ra
// DÙng if else : Khi và chỉ khi chỉ có <= 2 điều kiện xảy ra

// a, b: Muốn so sánh lớn hơn nó thì sẽ có hai trường hợp: a > b CÒN LẠI b > a, b == a
// var a = 3;
// var b = 5;
// if(a > b) {
//     document.write("A lon hơn B");
// } else {
//     document.write("B lon hon A");
// }
// a, b, c: Muốn so sánh lớn nhất thì có 3 trường hợp: a > b && a > c => a là lớn nhất
                                                    //  b > c => b là lớn nhất
var a = 2, b = -3, c = 0, d = 1;
if(a > b && a > c && a > d) {
    document.write(a + " la so lon nhat");
} else if(b > c && b > d) {
    document.write(b + " la lon nhat");
} else if(c > d) {
    document.write(c + " la lon nhat")
} else {
    document.write(d + " la lon nhat");
}