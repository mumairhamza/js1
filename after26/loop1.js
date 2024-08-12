//for of

const arr = [1, 2, 4, 6, 8]

for (const i of arr) {
    //  console.log(i);
     
}

const greeting="hello word"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
}

//map

const map = new Map()
map.set('pk',"pak")
map.set('usa',"united")
map.set('fr',"france")

// console.log(map);

for (const [key,value ]of map) {
    // console.log(key,':-',value);
    
}

const myobject={
       'gam1':'nfs',
       'game':'spider'
}

// for (const [key,value ]of myobject) {
//     console.log(key,':-',value);
    
// }not work in object    //tds

