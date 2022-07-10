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

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("じゃけえ");

/**
 * スプレッド構文
 */

///展開
// const arr1 = [1, 2];
//  console.log(arr1);
//  console.log(...arr1);
// 配列の中身を順番に展開して処理してくれる。

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

///まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr8 = [...arr4];

// arr4[0]= 70
// console.log(arr4);
// console.log(arr8);

// const arr6 = [...arr4,...arr5];
// console.log(arr6);

// const arr7 = arr4;
// arr7[0] = 100
// console.log(arr4);

/**
 * mapやfilterを使った配列処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
///配列の状態で返す

// nameArr.map((name,index) => console.log(`${index+1}番目は、${name}です`));
// /// 要素を一つひとつ表示

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
///ある条件? trueの時 : falseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
// };
// console.log(checkSum(30, 69));

/**
 * 論理演算子の本当の意味を知ろう
 */

// ||は左側がtrueなら左側をそのまま返す。左側がfalseなら右側を処理判定して返す。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//　&&は左側がfalseなら左側をそのまま返す。左側がtrueなら右側を処理判定して返す。
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
