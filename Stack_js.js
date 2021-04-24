//Data structures in Javascript 
//Rahul yadav 

//Stacks

let stack=function()
{
  this.count=0;
  this.array=[];
  
  
  //function to add elements in the stack
  this.push=function(data)
  {
    this.array[this.count]=data;
    this.count++
  }
  
  //function to remove element from the stack
  this.pop=function()
  {
    //if the stack is empty element cannot be removed
    if(this.count==0)
      return undefined;
      
    this.count--;
   //storing the element to be removed before deleting
    let removed_element=this.array[this.count]
    delete this.array[this.count];
    return removed_element;
  }
  
  //function to show the size of the stack
  this.size=function()
  {
     return this.count;
  }
  //function to check if the stack is empty
  this.isEmpty=function()
  {
     return this.size()==0;
  }

  
}
let Stack=new stack()
Stack.push(45);
Stack.push(60);
Stack.pop() //returns 45

