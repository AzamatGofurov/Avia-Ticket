function openTab(tabName) {
    var tabcontent, tabbuttons;
    
    // Hamma bo'limlarni topamiz
    tabcontent = document.getElementsByClassName("tab-content");
    tabbuttons = document.getElementsByClassName("tab-button");
    
    // Bo'limlarni yopamiz
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.opacity = "0";
        tabcontent[i].style.visibility = "hidden";
        tabbuttons[i].classList.remove('active');
    }
    
    // Tanlangan bo'limni ochamiz
    setTimeout(function() {
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove('active');
        }
        document.getElementById(tabName).classList.add('active');
        document.getElementById(tabName).style.opacity = "1";
        document.getElementById(tabName).style.visibility = "visible";
    }, 500); // Bo'lim yopilishi uchun kutish va keyin yangi bo'limni ochish

    // Tugmani aktiv holatga o'tkazamiz
    event.currentTarget.classList.add('active');
}

// FAQ
function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var allAnswers = document.querySelectorAll('.faq-answer');

    // Barcha javoblarni yopish
    allAnswers.forEach(function(item) {
        if (item !== answer) {
            item.style.maxHeight = '0';
        }
    });

    // Tanlangan javobni ko'rsatish yoki yopish
    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Faqat kerakli blokni ochish
    } else {
        answer.style.maxHeight = '0';
    }
}



