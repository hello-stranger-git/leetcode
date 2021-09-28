class Easy {
    //7. 整数反转
    reverse(x: number): number {
        let a, sum = 0, max = Math.pow(2, 31), min = -max - 1;
        if (x > max || x < min) {
            return 0;
        }
        while (x !== 0) {
            a = x % 10
            x = parseInt((x / 10).toString())
            sum = sum * 10 + a
        }
        if (sum > max || sum < min) {
            return 0
        }
        return sum
    }
    // 9. 回文数
    isPalindrome(x: number): boolean {
        let num = x
        return Number(x.toString().split("").reverse().join("")) === num
    }
}