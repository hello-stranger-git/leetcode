// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 示例 1：
// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0
//  
// 提示：-2^31 <= x <= 2^31 - 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


//自己原始方法
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x: number) {
    if (x === 0) {
        return 0
    }
    //将数值转换为字符串进行切割
    let arr: string[] | number
    arr = (x + "").split("")
    let fh: string = ""
    //判断正负数，并且保存符号
    if (arr[0] === "-" || arr[0] === "+") {
        fh = arr[0]
        arr = arr.splice(1)
    }
    //反转数组
    arr = arr.reverse()
    // 去除数组里面的0元素
    arr = arr.filter((item: string): boolean => {
        return parseInt(item) !== 0
    })
    // 将数据转换为字符串后在转换为数值
    arr = parseInt(arr.join(""))
    if (fh === "-") {
        return -arr
    } else {
        return arr
    }
};

//通过取余的方法
var reverseNew = function (x: number) {
}