console.log(
  "1-dən 100-ə kimi natural ədədlərin arasından yalnız 7-yə qalıqsız bölünənləri konsolda çap et. Qeyd:Bunun üçün mütləq olaraq, şərt və dövr operatorlarını istifadə et."
);
for (i = 1; i < 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}
console.log(
  "---------------------------------------------------------------------------"
);

console.log(
  "Verilmiş istənilən cümlənin daxilində olan sözlərin sayını tapan proqram yazmaq. Cümlənin daxilində sözlərin arasında istifadə olunan ayırıcılar bunlar ola bilər. -Boşluq -Vergül -Nöqtə"
);
console.log("Bu tapsirigi split lede etmey mumkundur sadece onda verdiyiviz sertleri tam uygun ortmediyi ucun hemde split yaddasda elave yer tutdugu ucun bu usulu daha uygun gordum")
const sentence = "Mən hal-hazırda verilən tapşırığı işləyirəm, çünki vacibdir.";

let wordCount = 0;
for (i = 0; i < sentence.trim().length; i++) {
  if (
    (sentence.charAt(i) == " " ||
    sentence.charAt(i) == "." ||
    sentence.charAt(i) == ",") && !(sentence.charAt(i-1)== " " || sentence.charAt(i-1)== "," || sentence.charAt(i-1)== ".")
  ) if(i!=0){
    wordCount++;
  }
 
}
console.log(wordCount);
console.log(
  "---------------------------------------------------------------------------"
);
console.log(
  "Bu addımları et:  1. 1000 elementli massiv yaratmaq. 2. Massivin daxilini təsadüfi ədədlərlə doldurmaq. (Təsadüfi ədədlərin seçim aralığı 1-dən 100-ə kimi olmalıdır). 3. Massivin daxilini təsadüfi ədədlərlə doldurduqdan sonra,  massivin daxilində hər ədəddən neçə ədəd olduğunu tapmaq.   Yəni, 1 ədədindən neçə dənə, 2 ədədindən neçə dənə, ... , 100 ədədindən neçə dənə olmasını tapmaq."
);

const arr1 = [];
for (i = 0; i < 1000; i++) {
  arr1.push(Math.floor(Math.random() * 100 + 1));
}
console.log(arr1);
const arr1count = {};
for (const element of arr1) {
  if (arr1count[element]) {
    arr1count[element] += 1;
  } else {
    arr1count[element] = 1;
  }
}
console.log(arr1count);
console.log(
  "---------------------------------------------------------------------------"
);
console.log("Verilmiş istənilən cümlənin daxilində ən çox istifadə olunan simvolu tapan proqram yazmaq.Qeyd:Yazdığın proqram istənilən cümlənin daxilində olan ən çox istifadə olunan simvolun sayınıda həmçinin tapmalıdır və bu məlumatları konsolda göstərməlidir.")

var exp = 'Developia' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++)
{
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);