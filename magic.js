//for first row
let a = 0;
let b = 0;
console.log("--------MAGIC--------")
let row_1 = prompt("Enter Five Numbers Between 1 To 9>")
let for_check = Array.from(row_1)
let finn = for_check.slice()
if (row_1.length > 5) {
  console.log("you can enter five numbers only..plz restrat the program and enter agin:)")
  b = 1;
  return
}

for (let num of for_check) {
  if (num < 1 || num > 9) {
    console.log("you can only enter numbers between 1 to 9..plz restrat the program and enter agin:)")
    a = 1
    return
  }
}
let arr = Array.from(row_1)
let popped_num = arr.pop()
arr.push(popped_num - 2)
arr.unshift(2)
let answer = arr.join(" ")
let joining = finn.join("  ")
if (a === 0 && b === 0) {
  console.log(`your final answer is going to be "${answer}" note it for later.`)
}
//for second row
let c = 0;
let d = 0;
let row_2 = prompt("Enter Five More Numbers Between 1 To 9>")
let for_check2 = Array.from(row_2)

let joining2 = for_check2.join("  ")
if (row_2.length > 5) {
  console.log("you can enter five numbers only..plz restrat the program and enter agin:)")
  c = 1;
  return
}

for (let num2 of for_check2) {
  if (num2 < 1 || num2 > 9) {
    console.log("you can only enter numbers between 1 to 9..plz restrat the program and enter agin:)")
    d = 1;
    return
  }
}
if (c === 0 && d === 0) {
  alert("GREAT! Now Let Me Enter Five Numbers.")
}
//third row
let row_3 = for_check2.map((value) => {
  return 9 - value;
})
let fin = row_3.join("  ")
console.log(fin, " These Are My Five NUmbers...Now Enter Five Numbers Between 1 To 9 for one last time..")

//fourth row
let e = 0;
let f = 0;
let row_4 = prompt("Enter Five More Numbers Between 1 To 9>")
let for_check4 = Array.from(row_4)
let joining4 = for_check4.join("  ")
if (row_4.length > 5) {
  console.log("you can enter five numbers only..plz restrat the program and enter agin:)")
  e = 1;
  return
}

for (let num4 of for_check4) {
  if (num4 < 1 || num4 > 9) {
    console.log("you can only enter numbers between 1 to 9..plz restrat the program and enter agin:)")
    f = 1;
    return
  }
}
if (e === 0 && f === 0) {
  alert("We Are Almost There Now Let Me Enter Five Numbers Again.")
}
// fifth row
let row_5 = for_check4.map((value) => {
  return 9 - value
})
let yo = row_5.join("  ")
console.log(yo, " These Are My Five NUmbers...Now Combining All The Numbers\n--------------------------------------")

setTimeout(() => {
  console.log(joining, " First Row Entered By You.")
  console.log(joining2, " Second Row Entered By You.")
  console.log(fin, " Third Row Entered By Me.")
  console.log(joining4, " Fourth Row Entered By You.")
  console.log(yo, " Last Row Entered By Me.")
  console.log("---------------")
  console.log("\nNow Add All These Your Answer Will Be Same As I Told You In The Starting(INSHALLAH)....")
}, 2000);