let factorial1 = (num) => {
    if (num == 0) {
        return 1;
    }

    if(num>0){
        return num*factorial1(num-1);
    }
}
const ans = factorial1(2);
console.log(ans);