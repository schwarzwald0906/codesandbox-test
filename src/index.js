// /** */
// var val1 = "変数";
// console.log(val1)

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val1 = "変数";
// console.log(val1)

// val1 = "let変数を上書き";
// console.log(val1);

// var val1 = "let変数を再宣言";
// console.log(val1);

// const val1 = "const変数";
// console.log(val1);

// val1 = "const変数を上書き";
// console.log(val1);

// var val1 = "const変数を再宣言";
// console.log(val1);

//constで定義したプロパティは変更可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// console.log(val4.name);

// val4.name = "jak";
// console.log(val4.name);

// val4.address = "Hiroshima";
// console.log(val4);

//constで定義した配列は変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const name = "じゃけえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// const message2 = `My name is ${name}. My age is ${age}.`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の書き方
// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

//arrow関数
// const func2 = (str) => {
//   return str;
// };
// const func2 = str => {
//   return str;
// };
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) =>{
//   return num1 + num2;
// }

// console.log(func3(20, 30));

// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = [`じゃけえ`, 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name , age ] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);
