window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister");
    form.onsubmit = validateForm;

    form.addEventListener("submit", function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
}

function validateForm() {
    const user = document.forms["myRegister"]["username"].value;
    const password = document.forms["myRegister"]["password"][0].value;
    const retypepassword = document.forms["myRegister"]["password"][1].value;

    // Check if any fields are empty
    if (user === "" || password === "" || retypepassword === "") {
        document.getElementById("errormsg").textContent = "โปรดกรอกข้อมูลให้ครบทุกช่อง";
        return false;
    }

    // Check if password and retype password match
    if (password !== retypepassword) {
        document.getElementById("errormsg").textContent = "รหัสผ่านไม่ตรงกัน";
        return false;
    }

    // Store data in localStorage
    localStorage.setItem("username", user);
    localStorage.setItem("password", password);
            
    alert("ลงทะเบียนสำเร็จ");
    return true;
}

