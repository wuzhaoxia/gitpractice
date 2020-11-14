
// 注意：该index.js不同于学习模块化时，那个用于汇总js的文件
// 模块化技术的index.js只用于汇总各个js模块
// 该index。js是webpack的【入口文件】
// 该文件可以用于汇总：js、css、json、图片、音频、视频

//汇总所有js模块
import {sum} from './modules1'
import {sub} from './modules2'
import modules3 from './modules3'
import a from '../json/test.json'

console.log(sum(1,2));
console.log(sub(3,2));
console.log(modules3.mul(5,6));
console.log(modules3.mul(12,6));
console.log(a)