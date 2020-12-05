var elements = [1,2,3,4,2,1,5,6,4];

return elements.getDuplicate();

function getDuplicate(){
    for (let i = 0; i < elements.length; i++) {
        for (let j = i+1; j < elements.length; j++) {
            if (elements[i] == elements[j]) {
                console.log(elements[j]);
                
            }
            
        }
        
    }
}
