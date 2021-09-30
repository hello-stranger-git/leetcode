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
    // 13. 罗马数字转整数
    romanToInt(s: string): number {
        //规则
        const map: any = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }
        //最后算出来的数
        let sum: number = 0
        for (let index = 0; index < s.length; index++) {
            debugger
            console.log(s[index])
            //当前值
            const current: number = map[s[index]]
            //下一个值
            const next: number = map[s[index + 1]]

            if (current < next) {
                sum -= current
            } else {
                sum += current
            }
        }
        return sum

    };
    // 20. 有效的括号
    isValid(s: string): boolean {
        //保存括号
        let stack: string[] = []
        for (let i = 0; i < s.length; i++) {
            const element = s[i];
            if (element === "(" || element === "{" || element === "[") {
                stack.push(element)
            } else if (element === ")" || element === "}" || element === "]") {
                // 取出当前最后一个元素做对比
                let lastEle = stack[stack.length - 1]
                if (lastEle === "(" && element === ")") {
                    stack.pop()
                } else if (lastEle === "{" && element === "}") {
                    stack.pop()
                } else if (lastEle === "[" && element === "]") {
                    stack.pop()
                } else {
                    stack.push(element)
                }
            }
        }
        return stack.length === 0
    };
}