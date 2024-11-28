// الوصف
// اكتب برنامجاً يحسب الراتب الصافي لموظف بعد خصم ضريبة الدخل (15%) وضريبة الضمان الاجتماعي (5%):
// الراتب الأساسي = 5000.
// تعبيرات مختلطة:



let mainSalary = 5000;
let incomeTax = 750 ;
let socialSecurity = 250;

console.log(mainSalary - incomeTax - socialSecurity);

// اكتب برنامجاً يحسب الوقت المتبقي من اليوم بالثواني إذا كان الوقت الحالي هو الساعة 14:30.
console.log("==================")
let mainTime= 24 * 60 * 60;
let currentTime = 14 * 60 * 60 + 30 * 60;
console.log(mainTime - currentTime);



// اكتب برنامجاً يتحقق من هذه الحالة:
// إذا كان الرقم المدخل زوجياً، اضربه بـ 2.
// إذا كان فردياً، اطرحه من 1
console.log("====================");
let inputNumper = 5;
let isEven = false;
if(inputNumper % 2 === 0 && isEven === true){
    console.log(inputNumper * 2);
    } else {
        console.log(inputNumper - 1);
}


// اكتب برنامجاً يحسب عدد الدقائق في عدد أيام مدخل (استخدم العملية أيام×24×60أيام times 24 times 60أيام×24×60).
console.log("====================");

let Days = 7;
console.log(Days * 24 * 60);

