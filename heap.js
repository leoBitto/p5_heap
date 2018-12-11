class Heap{
    constructor(){
        this.data = [];
        this.data[0] = height+1; 
    }
    remove(){
        let b = this.data[1];
        this.data[1] = this.data.pop();
        this.downheap();
        return b;
    }

    insert(n){
        this.data.push(n);
        this.upheap(this.data.indexOf(n));
    }

    upheap(i){
        let temp = this.data[i];
        this.data[0] = height+1;
        while(this.data[floor(i/2)] < temp){
            this.data[i] = this.data[floor(i/2)];
            i = floor(i/2);
        }
        this.data[i] = temp;
    }

    downheap(){
        let i = 1;
        while(i < this.data.length){
            if(this.data[i]<this.data[i+i]){
                let temp = this.data[i];
                this.data[i] = this.data[i+i];
                this.data[i+i] = temp;
            }else if(this.data[i]<this.data[i+i+1]){
                let temp = this.data[i];
                this.data[i] = this.data[i+i+1];
                this.data[i+i+1] = temp;
            }
            i = i+i;
        }
    }
    
    display(){
        let w = (width/this.data.length);
        for (let i=1; i<=this.data.length; i++){
            
            fill(127);
            rect(w*(i-1), height, w, -this.data[i]);
            // fill(255, 0, 0);
            // text(this.data[i], w*(i-1)+w/2, height-10)
        }
    }
}