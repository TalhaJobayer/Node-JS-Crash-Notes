let a = 20;
let b = 20;

const newData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(b);
    }, 2000);
    if(b===null){
    reject();
    }
});

newData.then((data)=>{
    let b = data;
    console.log(a+b);
}).catch((error)=>{
    console.log(error);
});