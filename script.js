let heap;
let n = 10;
function setup() {
    createCanvas(1000, 400);
    heap = new Heap();
    for(var i=1; i<n; i++){
        let x = floor(random(0, height));
        heap.insert(x);
    }
    console.log(heap);
}

function draw(){
    background(50);
    heap.display();
} 

function mouseClicked(){
       
}