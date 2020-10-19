class Stack{
    constructor(){
        this.items =[];
        this.count = 0
    }

    // add element to top of stack
    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`);
        this.count++
        return this.count -1
    }

    pop(){
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count-1];
        this.count-=1
        console.log(`${deleteItem}removed`);
        return deleteItem
    }
    // Check top element in stack
    peek(){
        console.log(`top element is ${this.items[this.count-1]}`);
        return this.items[this.count-1]
    }
    // check if stack is empty
    isEmpty(){
        console.log(this.count ===0 ? 'stack is empty ':'it is not empty');
        return this.count ==0
    }
    // check size of stack
    size(){
        console.log(`${this.count}elements in the stack`);
        return this.count
    }
}

const stack = new Stack()
stack.isEmpty();
stack.push(100)
stack.push(200)
stack.push(300)
stack.peek()
stack.size()

stack.pop();