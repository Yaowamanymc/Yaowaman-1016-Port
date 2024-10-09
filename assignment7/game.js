window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    alert("Ready");
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var second = 30; 
    var x = document.getElementById('clock');

    // setting timer using setInterval function
    timer = setInterval(function() {
        second--; // แก้ไขจาก timecount เป็น second
        x.textContent = second; // อัปเดตเวลา

        // ตรวจสอบเวลาหมด
        if (second <= 0) {
            clearInterval(timer);
            clearScreen();
            clearInputFields(); // เคลียร์ค่าช่อง
            alert("Game over!");
        } else {
            var allbox = document.querySelectorAll("#layer div");
            // ถ้ากล่องหมด จะบอกว่า You win!
            if (allbox.length === 0) {
                clearInterval(timer);
                clearScreen();
                clearInputFields(); // เคลียร์ค่าช่อง
                alert("You win!");
            }
        }
    }, TIMER_TICK);
}

function addBox() {
    // สร้างกล่องตาม input ที่เราใส่ 
    var numbox = parseInt(document.getElementById("numbox").value); // แปลงเป็นจำนวน
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        // add element to HTML node
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    // เมื่อกดแล้ว กล่องจะหายไป
    box.onclick = function() {
        this.remove(); // ลบกล่องเมื่อคลิก
    }
}

function clearScreen() {
    // ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
    var allbox = document.querySelectorAll("#layer div");

    // console.log("Clearing boxes: ", allbox.length); // ตรวจสอบจำนวนกล่องที่มีอยู่

    // delete all div
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].remove();
    }

    // console.log("All boxes cleared.");
}

function clearInputFields() {
    document.getElementById("numbox").value = ""; // เคลียร์ช่องจำนวนกล่อง
}
