//Queues in  JavaScript
//Rahul yadav


function queue()
{
   //an empty array 
   let array=[];
   
   //function to know the size of the queue
   this.size=function()
    {
      return array.length;
    }
    //function to check if queue is empty
    this.isEmpty=function()
    {
       return this.size()==0;
    }
   //function to add elements in the queue
   this.enqueue=function(element)
   {
      array.push(element);
   }
   
   //function to remove elements from the queue
    this.dequeue=function()
    {
       if(this.isEmpty())
       {
        return "Queue is empty";
       }
       return  array.shift();
    }
    
   //function to print elements of the queue
   this.print=function()
   {
     console.log(array);
   }
   
   //function to know the element at first
   this.peek=function()
   {
     return array[0];
   }
}
let q=new queue()
q.enqueue(45);
q.enqueue(23);
q.enqueue(56);

