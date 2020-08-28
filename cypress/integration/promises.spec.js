///<reference types = "cypress" />

it('sem testes ainda', () => {

})

const getSomething = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(50)
        }, 2000) 
    } ) 
} 


const test = async () => {
    console.log('Test promises');

    getSomething().then(some => {
       console.log(some);
    });

    console.log('end');
}

test();