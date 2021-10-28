// let pinyin = require('js-pinyin');
// const pinyin = require('./node_modules/js-pinyin/pinyin.js')
// pinyin.setOptions({checkPolyphone: false, charCase: 0});
 
// console.log(pinyin.getFullChars('管理员'));
// console.log(pinyin.getCamelChars('管理员'));
// console.log(pinyin.getCamelChars('1234'));
// console.log(pinyin.getCamelChars('english'));

// [1, 4, -5, 10].find((n) => n < 0)  
// -5  
// const arr = [1, 5, 10, 15]
//  const arrr = arr.find((n) => n > 10) // 10 
//  const arrr1 = arr.findIndex((n) => n > 10) // 3  第四个索引
// console.log(arrr)
// console.log(arrr1)

// var a=['a','b','c'];
// var b=a.splice(1,2,'e','f');    //a=['a','e','f','c'],b=['b']
// console.log(a)
// console.log(b)


// const a = 11.4321 | 0
// console.log(a)


const arr = [1,2,3,4]
const index = arr.findIndex((item) => {
    return item > 2
})
if(index > -1){

  arr.splice(index,1)
}
console.log(arr)


// import {onMounted, ref} from 'vue'

// export default function useMouse() {
// 	const x = ref(0)
// 	const y = ref(0)
// 	onMounted(() => {
// 		window.addEventListener('mousemove', e => {
// 			x.value = e.pageX
// 			y.value = e.pageY
// 		})
// 	})
// 	return {x, y};//x,y可以在组件中使用
// }