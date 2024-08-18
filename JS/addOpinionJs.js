document.getElementById('clickAddOpinion').onclick= function(event) {
    event.preventDefault();

    const name=document.getElementById('name').value;
    const rating=document.getElementById('rating').value;
    const review=document.getElementById('reviewId').value;

    if(name=="")
    {
        window.alert("הכנס שם סטודנט");
        document.getElementById('name').focus() // הסמן יתרכז על הקלט של הכנסת שם 
        return false;
    }
    let count = review.split(" ").length - 1;  
    if(count>40)
    {
        window.alert("ניתן לרשום עד 40 מילים");
        document.getElementById('reviewId').focus() // הסמן יתרכז על הקלט של הכנסת ביקורת 
        return false;
    }
    if(review==""){
        window.alert("הכנס חוות דעת");
        document.getElementById('reviewId').focus() // הסמן יתרכז על הקלט של הכנסת ביקורת 
        return false;
    }

    const info1 = JSON.parse(localStorage.getItem('searchParams2'));  
    const nameCourse=info1.courseName;

    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // הוספת הנתונים החדשים
    entries.push({nameCourse,name,rating,review});

    // שמירת הנתונים המעודכנים ב-localStorage
    localStorage.setItem('entries', JSON.stringify(entries));

    //מעבר לדף חוות הדעת
       window.location.href = 'opinion.html';
    return true;
}