// เพิ่มรายการ "Donate" ในเมนูเมื่อหน้าจอเล็กลง
const myMenu = document.getElementById('myMenu');
let donateListItem = null; // ใช้เพื่อติดตาม `<li>` ที่เพิ่มเข้าม
const hamMenu = document.querySelector('.ham-menu'); // ค้นหาปุ่ม ham-menu

// ฟังก์ชันสำหรับการแสดง/ซ่อนเมนู
function toggleHam(x) {
    x.classList.toggle("change");
    let myMenu = document.getElementById('myMenu');
    if (myMenu.classList.contains('menu-active')) {
        myMenu.classList.remove('menu-active');
        document.body.classList.remove('no-scroll'); // ลบการไม่ให้เลื่อนเมื่อปิดเมนู
    } else {
        myMenu.classList.add('menu-active');
        document.body.classList.add('no-scroll'); // ไม่ให้เลื่อนเมื่อเปิดเมนู
    }
}

// ฟังก์ชันที่เรียกใช้เมื่อหน้าจอมีการเปลี่ยนแปลงขนาด
function handleResponsiveChange(e) {
    if (e.matches) {
        // หากหน้าจอเล็กกว่า 780px และยังไม่มี "Donate" ในเมนู
        if (!donateListItem) {
            donateListItem = document.createElement('li');
            const donateLink = document.createElement('a');
            donateLink.href = 'donate.html';
            donateLink.innerHTML = '<h4>Donate</h4>';
            donateListItem.appendChild(donateLink);
            myMenu.appendChild(donateListItem);
        }
    } else {
        // หากหน้าจอใหญ่กว่า 780px และมี "Donate" อยู่ในเมนู
        if (donateListItem) {
            myMenu.removeChild(donateListItem);
            donateListItem = null;
        }
        // ลบ class "menu-active" ออกจากเมนูเมื่อหน้าจอใหญ่กว่า 780px
        myMenu.classList.remove('menu-active');

        // ปิดปุ่ม ham-menu เมื่อหน้าจอใหญ่กว่า 780px
        hamMenu.classList.remove('change');
        document.body.classList.remove('no-scroll'); // ลบการไม่ให้เลื่อนเมื่อหน้าจอกลับมาใหญ่
    }
}

// ตรวจสอบขนาดหน้าจอและเรียกใช้ฟังก์ชันเมื่อโหลดหน้าเว็บ
const mediaQuery = window.matchMedia("(max-width: 780px)");
mediaQuery.addEventListener("change", handleResponsiveChange);

// เรียกใช้ฟังก์ชันเพื่อให้ทำงานตอนโหลดหน้าเว็บ
handleResponsiveChange(mediaQuery);

document.querySelectorAll(".nothing-alert").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      Swal.fire({
        icon: "error",
        title: "ก็ยังว่า Don't have anything",
        text: "กดไปเหอะไม่มีอะไรหรอก / Just click it, nothing's gonna happen lol.",
        confirmButtonText: "ตกลง / OK"
      });
    });
  });
