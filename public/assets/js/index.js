// ฟังก์ชันเปลี่ยนภาพโดยรับข้อมูลจาก data
function changeImages(data) {
    // เปลี่ยน background image ของ banner-pc
    for (let i = 1; i <= 6; i++) {
        // เปลี่ยน background image ของ banner-pc
        document.getElementById(`banner${i}`).style.backgroundImage = `url(${data[`banner${i}`]})`;

        // เปลี่ยน src ของ banner-mobile
        let mobileBanner = document.getElementById(`mobile_banner${i}`);
        if (mobileBanner) {
            // ตั้งค่า src ให้เป็นรูปภาพใหม่
            mobileBanner.setAttribute('src', data[`mobile_banner${i}`]);

            // ตรวจสอบว่า class 'lazyload' อยู่ใน element หรือไม่
            if (mobileBanner.classList.contains('lazyload')) {
                // เรียก lazyload อีกครั้งเพื่อให้มันโหลดภาพ
                mobileBanner.classList.remove('lazyload'); // ลบ lazyload
                mobileBanner.classList.add('lazyload'); // เพิ่ม lazyload ใหม่
            }
        }
    }

    console.log(data.mobile_banner1); // ตรวจสอบค่าที่ได้รับจาก data
}



function setLanguage(language) {
    localStorage.setItem('selectedLanguage', language); // เก็บการเลือกภาษาลง localStorage
    $.ajax({
        type: 'GET',
        url: `/changeLanguage/${language}`,
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            // console.log(data); // ดูข้อมูลที่ได้รับกลับมา
            $('#serve').text(data.serve);
            $('#header_contact').text(data.header_contact);
            $('#News').text(data.News);
            $('#serviceTitle').text(data.serviceTitle);
            $('#serviceTitle_Text').text(data.serviceTitle_Text);
            $('#evx').text(data.evx);
            $('#farme_X').text(data.farme_X);
            $('#AI_Chat').text(data.AI_Chat);
            $('#Pos_X').text(data.Pos_X);
            $('#businessLocation').text(data.businessLocation);
            $('#Location').text(data.Location);
            $('#Location_evx').text(data.Location_evx);
            $('#Location_farme_X').text(data.Location_farme_X);
            $('#Location_HomeX').text(data.Location_HomeX);
            $('#Location_SolarX').text(data.Location_SolarX);
            $('#Location_POS_X_1').text(data.Location_POS_X_1);
            $('#Location_UNITY_X').text(data.Location_UNITY_X);
            $('#Location_Smart_X').text(data.Location_Smart_X);
            $('#Location_POS_X_2').text(data.Location_POS_X_2);
            $('#Latest_news').text(data.Latest_news);
            $('#AI_Automated_1').html(data.AI_Automated_1);
            $('#AI_Automated_2').html(data.AI_Automated_2);
            $('#AI_Automated_3').html(data.AI_Automated_3);
            $('#AI_Automated_4').html(data.AI_Automated_4);
            $('#Technology').text(data.Technology);
            $('#Technology_Text').text(data.Technology_Text);
            $('#About_us').text(data.About_us);
            $('#Website_structure').text(data.Website_structure);

            changeImages(data);
            // อัพเดต active language
            updateActiveLanguage(language);
        },
        error: function(xhr, status, error) {
            console.error('Error loading language:', xhr); // แสดงข้อผิดพลาดในการร้องขอ
        }
    });
}

// ฟังก์ชันการอัพเดต active language
function updateActiveLanguage(language) {
    // ลบ class 'active' จากทุกภาษา
    document.querySelectorAll('.language').forEach(function(lang) {
        lang.classList.remove('active');
    });

    // เพิ่ม class 'active' ให้กับภาษาที่ถูกเลือก
    const selectedLang = document.querySelector(`.language[onclick="setLanguage('${language}'); return false;"]`);
    if (selectedLang) {
        selectedLang.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // เมื่อโหลดหน้าเสร็จแล้ว ให้โหลดภาษา (ถ้ามีการเลือกไว้ใน localStorage)
    var savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        setLanguage(savedLanguage);
        // อัพเดต dropdown ให้ตรงกับภาษาที่บันทึก
        $('.sel-lang').val(savedLanguage);
    } else {
        // ถ้ายังไม่มีการเลือกภาษาใน localStorage ใช้ภาษาเริ่มต้น (th)
        setLanguage('th');
    }
});