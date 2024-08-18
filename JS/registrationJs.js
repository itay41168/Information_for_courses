document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

//  הפעולה תגדיר את דף ההרשמה עם השם של הקורס ממנו הגענו יחד עם הסמסטר שבחרנו
document.addEventListener('DOMContentLoaded', function() {
    // קבלת נתוני החיפוש מ-LocalStorage
        const info = JSON.parse(localStorage.getItem('searchParams2'));
        // הגדרת הבחירה הנכונה בטופס
        var semster=info.semester;
        var course=info.courseName;
        document.getElementById('semesterId').value =semster ;
        document.getElementById('courseId').value =course ;
        });


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
        // קבלת הערכים מהטופס
        const Id = document.getElementById('id');
        const email = document.getElementById('email');
        const name = document.getElementById('name');

        if(name.value=='')
        {
            window.alert("לא הוכנס שם ");
            name.focus() // הסמן יתרכז על הקלט של הכנסת שם 
            return false;
        }
        if(email.value=='')
        {
            window.alert("לא הוכנס מייל ");
            courseName.focus() // הסמן יתרכז על הקלט של הכנסת מייל 
            return false;
        }
        if(Id.value=='')
        {
            window.alert("לא הוכנס תעודת זהות ");
            courseName.focus() // הסמן יתרכז על הקלט של הכנסת תעודת זהות 
            return false;
        }
        if(email.value.indexOf("@",0)<0)
        {
            window.alert(" מייל לא תקין");
            courseName.focus() // הסמן יתרכז על הקלט של הכנסת מייל 
            return false;
        }
        if(email.value.indexOf(".",0)<0)
        {
            window.alert(" מייל לא תקין");
            courseName.focus() // הסמן יתרכז על הקלט של הכנסת מייל 
            return false;
        }
        if(Id.value.length!=9)
        {
            window.alert(" ת.ז לא תקין");
            courseName.focus() // הסמן יתרכז על הקלט של הכנסת מייל 
            return false;
        }

        window.alert(" ההרשמה בוצעה בהצלחה ");
        Id.value='';
        name.value='';
        email.value='';
        document.getElementById('semesterId').value ='' ;
        document.getElementById('courseId').value ='' ;

        return true;

});


