// 📌 DESCRIPTION:

// 💡 SOLUTION:
function myLanguages(results) {
let arr = Object.entries(results).sort((a,b) =>b[1]-a[1]).filter(item => item[1] >= 60).map(item => item[0])
  return arr
}
console.log(myLanguages({"Hindi" : 60, "Greek" : 55, "Dutch" : 93}))