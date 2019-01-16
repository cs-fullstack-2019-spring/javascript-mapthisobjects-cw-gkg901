//Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array. Print the new array of objects.



let arr = ["dog", "cat", "pig", "hamster"];

let pet_objects = arr.map(function(val,index)
    {
        let newobj = {};

        newobj.pettype = val;
        newobj.petnumber = index;

        return newobj;
    }
);

console.log(pet_objects);
