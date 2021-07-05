const data = {
    "details": [
       {
          "key": "Rakesh",
          "age": "20",
       },
       {
          "key": "Mahesh",
          "age": "23",
       }
    ]
 };
 const findByKey = (data, key) => {
    const arr = data['details'];
    if(arr.length){
       const result = arr.filter(el => {
          return el['key'] === key;
       });
       if(result && result.length){
          return result[0].age;
          
       }
       else{
          console.log("NO DATA FOUND");
       }
    }
 }
 //Pass Object And Key Value
 console.log(findByKey(data, 'Mahesh'));