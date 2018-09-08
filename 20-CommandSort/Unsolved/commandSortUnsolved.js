// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
//let arr1=[2,4,67,56];
let argv = process.argv;//store process arg which is takes the user input
let new_Arr = [];//hold the stuff you push in
for(i=2;i>argv.length;i++){// tell process.argv to take from 2nd elemnet(we dont want file path)
    new_Arr.push(parseFloat((argv[i])));//push to new array, convert string which is default
}
//sort_numbers()
function sorted(a,b){//sort function to sort the input in new arr
      return (a-b)//return sorted 

    }
console.log(new_Arr.sort(sorted));//.sort() will sort the thing