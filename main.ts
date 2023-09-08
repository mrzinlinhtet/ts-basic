class Point {
    
    constructor(public x?:number, private y?:number) {
    }

    public draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        } 

        this.x = value; 
            
        
    }
    // getDistance(another: Point) {
    //     // ...
    // }

}
let point = new Point(2,4);

let x = point.X;
point.X = 10;
point.draw();


// function doSomethingf() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }

// doSomethingf();

// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e:number[] = [1,2,3];
// let f:any[] = [1,true,'a',false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};

// let backgroundColor = Color.Red;

// let message;
// message = 'abc';
// let endsWithC =  (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

