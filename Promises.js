
const arr = ["Bishnudev","Arnab","Sudip","Anjali","Souvik"];

// 1st Method
const getData = new Promise((resolve,reject) => {
    if(arr!=""){
        resolve();
        console.log(arr.toString());
    }
    else{
        reject();
        console.log("Something error occured");
    }
});

getData.then((data)=>{
    console.log("Done updating data");
}).catch((error)=>{
    console.log(error);
});

// 2nd Method
const getData = async (data) => {
    if(data!=""){
    let data = await arr.toString();
    console.log(data);
    }
    else{
        console.log("Could not find data");
    }
}

getData();