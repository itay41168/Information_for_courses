// תפריט נפתח
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.getElementById('openSyllabusId').addEventListener('click', function() {
    const img=document.getElementById('imgSyllabus');
    const info = JSON.parse(localStorage.getItem('searchParams2'));

    if(info.courseName=="מתמטיקה דיסקרטית")
    {
        document.getElementById("imgSyllabus").src = "../images/sMathDisc.JPG";
    }

    if(info.courseName=="מבני נתונים")
    {
        document.getElementById("imgSyllabus").src = "../images/dataStrSyllabus.JPG";
    }

    if(info.courseName=="מבוא למדעי המחשב")
    {
        document.getElementById("imgSyllabus").src = "../images/mComuterSyllabus.JPG";
    }

    if(info.courseName=="פיזיקה")
    {
        document.getElementById("imgSyllabus").src = "../images/physicSyllabus.JPG";

    }

    img.style.display="flex";

});

document.addEventListener('DOMContentLoaded', function() {
    // קבלת נתוני החיפוש מ-LocalStorage
    const info = JSON.parse(localStorage.getItem('searchParams2'));
    
    // מציאת האלמנטים
    const nameCourse = document.getElementById('couseName');
    const lecturer=document.getElementById('lecturer-nameId');
    const year=document.getElementById('yearId');
    const crowd=document.getElementById('crowdId');
    const requirment=document.getElementById('requirmentId');
    const topic=document.getElementById('topicId');
    const point=document.getElementById('pointId');
    
    nameCourse.textContent = info.courseName;
    lecturer.textContent =  info.lecturerName;
    year.textContent = info.year;
    
    if(info.courseName=="מבוא למדעי המחשב")
    {
        crowd.textContent=crowd.textContent + "סטודנט שנה א מתמטיקה-מדעי המחשב";
        topic.textContent=topic.textContent + "היכרות עם שפת תכנות עבודה עם עורך מבנה של מחלקה...";
        point.textContent=point.textContent + "4";
        requirment.textContent=requirment.textContent + "אין";
    
    }
    
    if(info.courseName=="מתמטיקה דיסקרטית")
    {
        crowd.textContent=crowd.textContent + "מתמטיקה - פיזיקה - מדעי המחשב";
        topic.textContent=topic.textContent + "קורס בסיס במתמטיקה , תורת גרפים , קומבינטוריקה  ";
        point.textContent=point.textContent + "4";
        requirment.textContent=requirment.textContent + "אין";
        
    
    }
    
    if(info.courseName=="מבני נתונים")
    {
        crowd.textContent=crowd.textContent + "סטודנט שנה ב מתמטיקה-מדעי המחשב";
        topic.textContent=topic.textContent + "קורס מתקדם במדעי המחשב ,  סיבוכיות זמן , עצים , גרפים , מערכים ורשימה מקושרת  ";
        point.textContent=point.textContent + "5";
        requirment.textContent=requirment.textContent + "מבוא למדעי המחשב";
    
    }
    
    if(info.courseName=="תכנות אינטרנט")
    {
        crowd.textContent=crowd.textContent + "סטודנט שנה ג מתמטיקה-מדעי המחשב";
        topic.textContent=topic.textContent + "html ,css ,js";
        point.textContent=point.textContent + "3";
        requirment.textContent=requirment.textContent + "מבוא לבסיס נתונים ,מבוא למדעי המחשב";
    
    }
    
    if(info.courseName=="פיזיקה")
    {
        crowd.textContent=crowd.textContent + "סטודנט שנה ג מתמטיקה-פיזיקה ";
        topic.textContent=topic.textContent + " קורס בסיס בפיזיקה";
        point.textContent=point.textContent + "4";
         equirment.textContent=requirment.textContent + "אין";
    
    }
    
    });

document.getElementById('clickOpinion').onclick= function() {

    const crowd=document.getElementById('crowdId').textContent;
    const requirment=document.getElementById('requirmentId').textContent;
     //יצירת אובייקט של מידע הדרוש לחוות דעת : קהל יעד ודרישות קדם 
    const Info = {
        Crowd: crowd,
        Requirment: requirment
    };

 // שמירת פרמטרי החיפוש ב-LocalStorage
localStorage.setItem('Info', JSON.stringify(Info));

// מעבר לדף חוות דעת
 window.location.href = 'opinion.html';

}

document.getElementById('clickRegistration').onclick= function() {
//מעבר לדף הרשמה
 window.location.href = 'registration.html';
}



