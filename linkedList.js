class Node{
    constructor(value){
        this.value = value
        this.nextNode = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    append(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        }else{
            let previous = this.head

            while(previous.nextNode){
                previous = previous.nextNode
            }
            previous.nextNode = node
        }
        this.size++
    }

    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        }else{
            node.nextNode = this.head
            this.head = node
        }
        this.size++
    }


    tail(){
        let tail = this.head
        while(tail){
            tail = tail.nextNode
            if(!tail.nextNode){
                return tail
            }
        }    
    }

    at(index){
        if(this.size === 0){
            console.log('The list is empty!')
        }
        else if(index > this.size -1){
            console.log("Null")
        }
        else if(index === 0){
            console.log(`At Index ${index}: ${this.head.value}`)
            return
        }else{
            let current = this.head;
            let idx = 0;
            while (current) {
                idx++
                current = current.nextNode

                if(idx === index){
                    console.log(`At Index ${index}: ${current.value}`);
                }
            }
        }
    }

    pop(){
        let current = this.head
        for(let i = 1; i < this.size - 1; i++){
            current = current.nextNode
        }
        current.nextNode = null
    }

    contains(value){
        let current = this.head
        while(current){
            if(current.value === value){
                return true
            }else{
                current = current.nextNode;
            }
            if(!current){
                return false
            }
        }
    }

    find(value){
        let current = this.head
        let index = 0
        while(current){
            
            if(current.value === value){
                console.log(`Index of ${value}: ${index}`)
            }
            current = current.nextNode
            index++
        }
    }

    toString(){
        let string = "";
        let current = this.head
        while(current){
            string += `(${current.value}) -> `;
            current = current.nextNode
            if(!current){
                string += 'null'
            }
        }
        console.log(string);
    }

}


const list = new LinkedList()

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(9)
list.prepend(40)

list.toString()

list.find(9)

list.pop()

list.toString()


