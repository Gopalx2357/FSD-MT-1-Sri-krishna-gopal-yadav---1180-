let str ="abcabcbb";
let start =0;
let maxLength =0;
let result ="";
let seen =new Set();
for (let i = 0; i < str.length; i++) {
    while (seen.has(str[i])) {
        seen.delete(str[start]);
        start++;
    }
    seen.add(str[i]);
    if (i-start+1>maxLength) {
        maxLength = i-start+1;
        result = str.substring(start,i+1);
    }
}
console.log("Longest Substring:",result);
console.log("Length:",maxLength);