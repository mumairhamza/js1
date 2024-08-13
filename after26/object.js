
// // const myobject={
// //     gam1:"nfs",
// //     game:'spider',
// //     game2:'spider2',
// //     game3:'spider3'

// // }

// // for (const key in myobject) {
// //     // console.log(myobject[key]);
// //     // console.log(`${key} shortcut of ${myobject[key]}`);
    
// // }

// // // const pro=["js","cs","html","php"]

// // // for (const key in pro) {
// // //     console.log(key);
    
// // // }

// // // pro.forEach( function (item) {
// // // console.log(item);

// // // } ) 
    
// // // pro.forEach(element) {
// // //  console.log(element);
    
// // // }
 
// // // pro.forEach((element, index,arr) => {
// // //     console.log(element,index,arr);
    
// // // });

// // const pro=[1,2,3,4,5,5,6,7,8]
// // // const mypro=pro.filter((num) =>{
// // //     return num>4
// // // })


// // // console.log(mypro);
// // const mypro=[]
// // pro.forEach((num)=>{
// //     if(num>4){
// //       mypro.push(num

// //       )
// //     }
// // })
// // // console.log(mypro);


// // const book=[
// //     {title:'book1',genre:'history',publish:1111},
// //     {title:'book1',genre:'none',publish:1112},
// //     {title:'book1',genre:'history',publish:2111},
// //     {title:'book1',genre:'science',publish:3111},
// //     {title:'book1',genre:'math',publish:2131},
// //     {title:'book1',genre:'science',publish:3411}
// // ];
// // let userbook=book.filter((bk)=> bk.genre==='history')
// //  userbook=book.filter((bk)=> bk.publish>=2000 && bk.genre==='history')
// // console.log(userbook);



// ///nexttt/////

// const mynum=[1,2,3,4,5,6,7]
// // const newnum=mynum.map((num)=>num+10)

// const newnum=mynum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=30)
// // console.log(newnum);

////////////Array//////////////////

const mynum=[1,2,3]

// const mytotal = mynum.reduce(function(acc,curntvalue){
//     // console.log(`acc:  ${acc} and currentvalue; ${curntvalue}`);
    
//     // return acc+curntvalue
// },0)

const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);
