//imp! NAVBAR SCROLLING COLOR


//•	window.onscroll: يتم تعيين دالة تُنفذ كلما تم التمرير في الصفحة.
//•	if (scrollY > 233): تتحقق الدالة مما إذا كانت قيمة التمرير العمودي (Y) أكبر من 233 بكسل. 
//o	إذا كانت الشرط صحيحًا، يتم تغيير لون خلفية .header-section إلى لون معين (#1b1514e7)، مما يعطي تأثيرًا مرئيًا عند التمرير.
//•	else if (scrollY === 0): إذا كانت قيمة التمرير 0 (أي في أعلى الصفحة)، فإن لون الخلفية يعود إلى شفاف.







window.onscroll = () => {
    if(scrollY > 233){
        document.querySelector('.header-section').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header-section').style.backgroundColor = 'transparent';
    }
}






//•	let valueDisplays = document.querySelectorAll(".section-5__counter-number");: يتم اختيار جميع العناصر التي تحمل الفئة .
//section-5__counter-number، والتي من المفترض أن تحتوي على قيم عداد.
//•	let interval = 5000;: تعيين فترة زمنية إجمالية للعد التنازلي في milliseconds (5000 مللي ثانية = 5 ثواني).
//•	valueDisplays.forEach((valueDisplay) => { ... });: يتم تنفيذ حلقة على كل عنصر تم اختياره.
//o	let startValue = 0;: يبدأ العداد من الصفر.
//o	let endValue = parseInt(valueDisplay.getAttribute("data-val"));: يتم الحصول على القيمة النهائية من السمة data-val للعنصر (يجب أن يكون قيمة عددية).
//o	let duration = Math.floor(interval / endValue);: يتم حساب المدة بين كل زيادة في العداد بناءً على القيمة النهائية.
//•	let counter = setInterval(function () { ... }, duration);: يتم إنشاء عداد زمني (interval) لزيادة قيمة العداد:
//o	startValue += 1;: يتم زيادة قيمة العداد بمقدار 1 في كل مرة يتم استدعاء الدالة.
//o	valueDisplay.innerHTML = ${startValue}<span class="plus-symbol">+</span>;: يتم تحديث المحتوى الداخلي للعنصر ليظهر القيمة الحالية مع علامة "+".
//o	if (startValue == endValue) { clearInterval(counter); }: إذا وصلت قيمة العداد إلى القيمة النهائية، يتم إيقاف العداد.



//imp! COUNTER UP JAVASCRIPT

let valueDisplays = document.querySelectorAll(".section-5__counter-number");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerHTML =`${startValue}<span class="plus-symbol">+</span>`;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);//duration);: يتم إنشاء عداد زمني (interval) لزيادة قيمة العداد:
});






//	الجزء الأول من الكود يغير لون شريط التنقل عند التمرير، مما يوفر تأثيرًا مرئيًا جذابًا.
//	الجزء الثاني ينفذ عدادًا مرئيًا يقوم بزيادة القيم من 0 إلى القيمة المحددة في السمة data-val لكل عنصر، مما يعطي انطباعًا ديناميكيًا.
