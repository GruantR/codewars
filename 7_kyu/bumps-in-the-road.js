// git reset --hard origin/main
//https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

// 📌 DESCRIPTION:


// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


// 💡 SOLUTION :

function bump(x){
    let count = 0;
    x.split('').forEach(function (item) {if (item === 'n') {count++}})
    return count > 15 ? 'Car Dead' : 'Woohoo!'
    }
    
    console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
    