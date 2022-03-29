// const fs = require('fs')


// // reading files

// fs.readFile('./docs/blog1.txt', (err, data) => { //read files is a asyncronus methods
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log("this is last line of code");  // this is log out first 



// // writing files

// fs.writeFile('./docs/blog1.txt', "Hello, World", () => {
//     console.log("file was writter");
// })

// fs.writeFile('./docs/blog2s.txt', "Hello, World", () => {
//     console.log("file was writter");
// })



// // directories


// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
//     console.log("foler created");
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//     })
//     console.log("folder deleted");
// }



// // deleting files

// if(fs.existsSync('./docs/deleteMe.txt')){
//     fs.unlink('./docs/deleteMe.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log("file deleted");
//     })
// }
