document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});



document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // קבלת הערכים מהטופס
    const courseName = document.getElementById('courseName');
    const lecturerName = document.getElementById('lecturerName');
    const year = document.getElementById('year');
    const semester = document.getElementById('semester');

    if(courseName.value=='' && lecturerName.value=='' && year.value=='' && semester.value=='')
    {
      
        window.alert("לא הוכנס מידע");
        courseName.focus() // הסמן יתרכז על הקלט של הכנסת שם קורס
        return false;
    }
    else if(courseName.value!='מבוא למדעי המחשב'  &&
        courseName.value!='מבני נתונים' &&
        courseName.value!='פיזיקה'       &&
        courseName.value!='תכנות אינטרנט' &&
        courseName.value!='מתמטיקה דיסקרטית' &&
        courseName.value!=''
    )
    {
        
        window.alert("לא קיים קורס כזה");
        courseName.style.backgroundColor="#718575"
        courseName.focus() // הסמן יתרכז על הקלט של הכנסת שם קורס
        return false;
    }
    else if(lecturerName.value!="תמר" &&
        lecturerName.value!="איגור" &&
        lecturerName.value !="אורלי" && 
        lecturerName.value !="יוגב" &&
        lecturerName.value != "ילנה" &&
        lecturerName.value != ""
    )
    {
      
        window.alert("לא קיים מרצה כזה");
        lecturerName.style.backgroundColor="#718575"
        lecturerName.focus() // הסמן יתרכז על הקלט של הכנסת שם קורס
        return false;
    }
    else{
        // יצירת אובייקט חיפוש
        const searchParams = {
            courseName: courseName.value,
            lecturerName: lecturerName.value,
            year: year.value,
            semester: semester.value
        };

        // שמירת פרמטרי החיפוש ב-LocalStorage
        localStorage.setItem('searchParams', JSON.stringify(searchParams));
        // מעבר לדף הטבלה
        window.location.href = 'Includes/courses.html';
    }
    return true;
});
