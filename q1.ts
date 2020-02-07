let a =  [ 2, 1, 4, 5, 3, 2];
let b =  [ 2, 4, 5, 1, 3];
let c =  [ 2, 1, 3, 5, 3, 2];

function duplicate(num,list){
    let sameNum ='-1';
    list = list.sort();
    let len = list.length;
    
    for(let i=(len-1); i != 0; i--){
        if(list[i] == list[i-1]){
            sameNum = list[i];
            break;
        }
    }
    return "Array_"+num+" Ans :"+sameNum;
}
document.getElementById("Ans-a").textContent = duplicate(1,a);
document.getElementById("Ans-b").textContent = duplicate(2,b);
document.getElementById("Ans-c").textContent = duplicate(3,c);