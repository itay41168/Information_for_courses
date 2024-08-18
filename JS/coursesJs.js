// תפריט נפתח
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    // קבלת נתוני החיפוש מ-LocalStorage
    const searchParams = JSON.parse(localStorage.getItem('searchParams'));

    // מציאת הטבלה
    const table = document.getElementById('courses-tbody').getElementsByTagName('tbody')[0];

    // טבלת הקורסים
    const courses = [
        { courseName: 'מבוא למדעי המחשב', lecturerName: 'תמר', year: 'א', semester: 'א' },
        { courseName: 'פיזיקה', lecturerName: 'מאיר', year: 'א', semester: 'א' },
        { courseName: 'מבני נתונים', lecturerName: 'ילנה', year: 'ב', semester: 'ב' },
        { courseName: 'תכנות אינטרנט', lecturerName: 'אורלי', year: 'ג', semester: 'ב' },
        { courseName: 'מתמטיקה דיסקרטית', lecturerName:'איגור', year: 'א', semester: 'א' },
        { courseName: 'מתמטיקה דיסקרטית', lecturerName: 'יוגב', year: 'ב', semester: 'ק' },
    ];

    // סינון הקורסים בהתאם לפרמטרי החיפוש
    const filteredCourses = courses.filter(course => {
        return (searchParams.courseName=='' || course.courseName==searchParams.courseName) &&
               (searchParams.lecturerName=='' || course.lecturerName==searchParams.lecturerName) &&
               (searchParams.year=='' || course.year == searchParams.year) &&
               (searchParams.semester=='' || course.semester==searchParams.semester);
    });

    // אם אין תוצאות חיפוש מתאימות 
    if(filteredCourses.length == 0) {
        window.alert("אין תוצאות"); // הודעת התראה שאין תוצאות 
        window.location.href = '../main.html'; // מעבר חזרה למסך הבית
    }

    // הוספת השורות לטבלה
    filteredCourses.forEach(course => {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = course.courseName;
        cell2.textContent = course.lecturerName;
        cell3.textContent = course.year;
        cell4.textContent = course.semester;

        // יצירת כפתור מעבר לדף הקורס
        const button = document.createElement('button');
        button.textContent = 'דף הקורס';
        button.classList.add('course-button');
        button.addEventListener('click', function() {
            // הנחה שכל דף קורס הוא בשם courseName.html

            // יצירת אובייקט חיפוש
            const searchParams2 = {
                courseName: cell1.textContent,
                lecturerName: cell2.textContent,
                year: cell3.textContent,
                semester: cell4.textContent
            };

            // שמירת פרמטרי החיפוש ב-LocalStorage
            localStorage.setItem('searchParams2', JSON.stringify(searchParams2));

            // מעבר לדף קורס
            window.location.href = 'course_page.html';
        });
        cell5.appendChild(button);
    });
});

