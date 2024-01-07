// 📌 DESCRIPTION:

// 💡 SOLUTION:

function removeDuplicateWords (s) {
    let set = new Set(s.split(' '))
    return Array.from(set).join(' ')
  }
  console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))