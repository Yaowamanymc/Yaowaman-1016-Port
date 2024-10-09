
window.onload = loginLoad;

function loginLoad() {
  
    const loginForm = document.getElementById("myLogin");
    loginForm.onsubmit = checkLogin;
}


function warningText(message) {
    let loginForm = document.forms["myLogin"];
    loginForm.username.value = ""; // เคลียร์ช่อง username
    loginForm.password.value = ""; // เคลียร์ช่อง password
    alert(message); 
    return false;
}


function checkLogin() {
    const loginForm = document.forms["myLogin"]; // ดึงข้อมูลจากฟอร์ม

   
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const expectedUsername = urlParams.get("username");
    const expectedPassword = urlParams.get("password");

    // ตรวจสอบว่า username ถูกกรอกหรือไม่
    if (!loginForm.username.value) {
        return warningText("กรุณากรอกชื่อผู้ใช้");
    }

    // ตรวจสอบว่า password ถูกกรอกหรือไม่
    else if (!loginForm.password.value) {
        return warningText("กรุณากรอกรหัสผ่าน");
    }

    // ตรวจสอบว่า username ตรงกับที่กำหนดไว้หรือไม่
    else if (loginForm.username.value !== expectedUsername) {
        return warningText("ชื่อผู้ใช้ไม่ถูกต้อง");
    }

    // ตรวจสอบว่า password ตรงกับที่กำหนดไว้หรือไม่
    else if (loginForm.password.value !== expectedPassword) {
        return warningText("รหัสผ่านไม่ถูกต้อง");
    }

  
    alert("เข้าสู่ระบบสำเร็จ!");
    return true; 
}