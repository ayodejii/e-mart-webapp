export default function FileWriter(data) {
    
    let fs = require('fs');

            const product = JSON.stringify(data);
            console.log(product)
            fs.writeFile('../../Data/Products.json', product, 'utf8', function(err){
                if(err){ 
                      alert(err); 
                } else {
                      console.log("okay")
                }});
}