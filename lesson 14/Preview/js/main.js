/*var myModule = require('../part/script1.js');

let myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();*/

//Вариант с ES6

import {one, two} from "../part/script1.js";

alert('${one} and ${two}');