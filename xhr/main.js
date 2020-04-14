
axios.get('https://api.github.com/users/viniOlimpio')
.then(function(response){
    console.log(response.data.avatar_url);
})
.catch(function(error){
    console.log(error);
})





//PROMISES!!!!

// function minhaPromise (){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('get', 'https://api.github.com/users/viniOlimpio');
        
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4 ){
//                 if(xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 } else{
//                     reject(`Erro na Requisição. Status: ${xhr.status}` );
//                 }
//             }
//         }
//     })
// }


// minhaPromise()
// .then(function (response){
//     console.log(response.id);//posso colocar qualquer prop da resposta!!!! 
// })
// .catch(function(error){
//     console.warn(error);
// });