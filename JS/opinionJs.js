document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.getElementById("click").onclick = function(event) {
    window.location.href = 'addOpinion.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // קבלת נתוני החיפוש מ-LocalStorage
    const info1 = JSON.parse(localStorage.getItem('searchParams2'));  
    const info2 = JSON.parse(localStorage.getItem('Info'));  

    // נקשר כל אלמנט עם המזהה שלו ואז נכניס לו את המידע המתאים ששמור באחסון נתונים
    document.getElementById('nameId').innerHTML = info1.courseName;
    document.getElementById('lecturerId').innerHTML = info1.lecturerName;
    document.getElementById('crowdId').innerHTML = info2.Crowd;
    document.getElementById('requirmentId').innerHTML = info2.Requirment;

    if(info1.courseName == "מבוא למדעי המחשב") {
        document.getElementById('courseTypeId').innerHTML = "מדעי המחשב";
        document.getElementById('star1').classList.add("filled");
        document.getElementById('star2').classList.add("filled");
        document.getElementById('star3').classList.add("filled");
        document.getElementById('star4').classList.add("star");
        document.getElementById('star5').classList.add("star");
    }

    if(info1.courseName == "מתמטיקה דיסקרטית") {
        document.getElementById('courseTypeId').innerHTML = "מתמטיקה";
        document.getElementById('star1').classList.add("filled");
        document.getElementById('star2').classList.add("star");
        document.getElementById('star3').classList.add("star");
        document.getElementById('star4').classList.add("star");
        document.getElementById('star5').classList.add("star");
    }

    if(info1.courseName == "פיזיקה") {
        document.getElementById('courseTypeId').innerHTML = "פיזיקה";
        document.getElementById('star1').classList.add("filled");
        document.getElementById('star2').classList.add("filled");
        document.getElementById('star3').classList.add("filled");
        document.getElementById('star4').classList.add("filled");
        document.getElementById('star5').classList.add("star");
    }

    if(info1.courseName == "מבני נתונים") {
        document.getElementById('courseTypeId').innerHTML = "מדעי המחשב";
        document.getElementById('star1').classList.add("filled");
        document.getElementById('star2').classList.add("filled");
        document.getElementById('star3').classList.add("filled");
        document.getElementById('star4').classList.add("filled");
        document.getElementById('star5').classList.add("filled");
    }

    if(info1.courseName == "תכנות אינטרנט") {
        document.getElementById('courseTypeId').innerHTML = "מדעי המחשב";
        document.getElementById('star1').classList.add("filled");
        document.getElementById('star2').classList.add("filled");
        document.getElementById('star3').classList.add("filled");
        document.getElementById('star4').classList.add("star");
        document.getElementById('star5').classList.add("star");
    }

    // קבלת הנתונים מה-localStorage
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // בחירת גוף הטבלה
    const table = document.getElementById('tableBody').getElementsByTagName('tbody')[0];
    
    // הוספת השורות לטבלה
    entries.forEach(entry => {
        const nameCourse2 = entry.nameCourse;
        if(nameCourse2 == info1.courseName) {
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.textContent =  entry.name;
            cell2.textContent = entry.rating;
            cell3.textContent = entry.review;
        }
    });
});

