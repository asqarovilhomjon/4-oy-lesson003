// 1-masala
// {
//     prompt("agar berilgan son musbat bo'lsa  ga oshirilsin yoqsa o'zi qaytsin")
//     let a=+prompt("son kiriting")
//     if(a>0){
//         alert (a+1)
//     }else{
//         alert (a)
//     }
// }


// 2-masala
// {
//     prompt("agar berilgan son musbat bo'lsa  1 ga oshirilsin yoqsa 2ga kamayib qaytsin")
//     let a=+prompt("son kiriting")
//     if(a>0){
//     alert (a+1)
//     }else{
//     alert (a-2)
//     }
// }


// 3-masala
// {
//     prompt("agar berilgan son musbat bo'lsa  1 ga oshirilsin yoqsa 2ga kamayib qaytsin agar 0ga teng bo'lsa 10nni ozlashtrsin")
//     let a=+prompt("son kiriting")
//     if(a>0){
//     alert (a+1)
//     }else if (a==0){
//     alert (a+10)
//     }else{
//         alert(a-2)
//     }
// }


// 4-masala
// {
//     prompt("3 ta butun son berilgab shulardan nechtasi musbat")
//     let a=prompt("son kiriting")
//     let b=prompt("son kiriting")
//     let c=prompt("son kiriting")
//     let son=0
//     if(a>0){
//     son++
//     }
//     if(b>0){
//         son++
//     }
//     if(c>0){
//         son++
//     }
//       alert(`${son} ta butun son`)
//     //   console.log(son);
// }


// 5-masala
// {
//     prompt("3 ta butun son berilgab shulardan nechtasi musbat nechtasi manfiy")
//     let a=prompt("son kiriting")
//     let b=prompt("son kiriting")
//     let c=prompt("son kiriting")
//     let son=0
//     let manfiy=0
//     if(a>0){
//     son++
//     }else{
//        manfiy++
//     }
//     if(b>0){
//         son++
//     }else{
//        manfiy++
//     }
//     if(c>0){
//         son++
//     }else{
//        manfiy++
//     }
//       alert(`${son} ta musbat son ${manfiy} ta manfiy son`);
      
//     //   console.log(son);
// }


// 6-masala
// {
//      prompt("2 ta butun son berilgan shulardan kattasini aniqlovchi dastur tuzilsn")
//      let a = prompt("son kiriting");
//      let b = prompt("son kiriting");
//       if (a > b) {
//         alert(a)
//       } else if (a<b) {
//         alert(b)
//       }
// }


// 7-masala
// {
//      prompt("2 ta butun son berilgan shulardan kichigini aniqlovchi dastur tuzilsn")
//      let a = prompt("son kiriting");
//      let b = prompt("son kiriting");
//       if (a > b) {
//         alert(b)
//       } else if (a<b) {
//         alert(a)
//       }
// }


// 8-masala
// {
//      prompt("2 ta butun son berilgan shulardan kichigini aniqlovchi dastur tuzilsn")
//      let a = prompt("son kiriting");
//      let b = prompt("son kiriting");
//       if (a > b) {
//         alert(b);
//       } else if (a < b) {
//         alert(b);
//       }       
//       if (a < b) {
//         alert(a);
//       } else if (a > b) {
//         alert(b);
//       }
// }


// 9-masala
// {
//     +prompt(" a va b sonlari berilgan ularni shunday o'zgartirish kerakki a soni kichik b soni katta bo'lsin")
//      let a = prompt("son kiriting");
//      let b = prompt("son kiriting");
//       a=1
//       b=b*100
//           alert(`a soni ${a}  b soni ${b}`);
// }


// 10-masala
// {
//     +prompt(" a va b agar ular ozaro teng bo'lmasa ularni yigindisi agar teng bo'lsa 0ga teng bo'lsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c=0
//      if(a!=b){
//        c=a+b
//      }else if(a==b){
//         c=0
//      }      
//       alert(c)     
// }


// 11-masala
// {
//     +prompt(" a va b agar ular ozaro teng bo'lmasa ularni yigindisi agar teng bo'lsa 0ga teng bo'lsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c=0
//      if(a>b){
//        alert(a)
//      }else if (b>a){
//       alert(b)
//      }
//       else if(a==b){
//        alert(c=0)
//      }     
// }


// 12-masala
// {
//     +prompt(" 3 ta son berilgan shulardan kichigini aniqlovchi program tuzilsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c = +prompt("son kiriting");     
//      if(a<b&&a<c){
//        alert(a)
//      }else if (b<a&&b<c){
//       alert(b)
//      }
//       else if(c<a&&c<b){
//        alert(c)
//      }    
// }


// 13-masala
// {
//     +prompt(" 3 ta son berilgan shulardan o'rtanchasini aniqlovchi program tuzilsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c = +prompt("son kiriting");
     
//      if(a>b&&a<c){
//        alert(a)
//      }else if(b>a&&a>c){
//         alert(a)
//      }
//      else if (b>a&&b<c){
//       alert(b)
//      }
//      else if(b>c&&a>b){
//         alert(b)
//      }
//       else if(c>a&&c<b){
//        alert(c)
//      }else if(c<a&&c>b){
//         alert(c)
//      }     
// }


// 14-masala
// {
//      prompt(" 3 ta son berilgan shulardan avval kichik kn kattasini aniqlovchi program tuzilsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c = +prompt("son kiriting");     
//      if(a<b&&a<c){
//        alert(a)
//      }else if(b<a&&b<c){
//         alert(b)
//      }
//      else if (b>c&&c<a){
//       alert(c)
//      }     
//      if (a > b && a < c) {
//        alert(a);
//      } else if (b > a && a > c) {
//        alert(a);
//      } else if (b > a && b < c) {
//        alert(b);
//      } else if (b > c && a > b) {
//        alert(b);
//      } else if (c > a && c < b) {
//        alert(c);
//      } else if (c < a && c > b) {
//        alert(c);
//      }    
//      if(a>b&&a>c){
//         alert(a)
//      }else if(b>a&&b>c){
//         alert(b)
//      } else if(c>a&&c>b){
//         alert(c)
//      }     
// }


// 15-masala
// {
//     +prompt(" 3 ta son berilgan shulardan yig'indisi eng katta bo'ladigan ikkitasini aniqlovchi program tuzilsin")
//      let a = +prompt("son kiriting");
//      let b = +prompt("son kiriting");
//      let c = +prompt("son kiriting");     
//      if (a > b && a < c) {
//        alert(a);
//      } else if (b > a && a > c) {
//        alert(a);
//      } else if (b > a && b < c) {
//        alert(b);
//      } else if (b > c && a > b) {
//        alert(b);
//      } else if (c > a && c < b) {
//        alert(c);
//      } else if (c < a && c > b) {
//        alert(c);
//      }    
//      if(a>b&&a>c){
//         alert(a)
//      }else if(b>a&&b>c){
//         alert(b)
//      } else if(c>a&&c>b){
//         alert(c)
//      }    
// }