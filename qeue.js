class Queue{
    constructor(){
        this.storage ={};
        this.head =0;
        this.tail =0;
    }

    enqeue(element){
        this.storage[this.tail] =element;
        this.tail++
    }
    deqeue(){
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++
        return removed
    }
}

const qeue = new Queue()

qeue.enqeue('fahis');
qeue.enqeue('farhan');
qeue.enqeue('faiha');

qeue.deqeue();
qeue.deqeue();
console.log(qeue);
 