///<reference types = "cypress" />

describe('Asserts', ()=>{
    it('Equals', ()=>{
        const a = 2;
        expect(a, 'Não deve ser igual a 2').not.equal(1);
        expect(a, 'Deve ser igual a 2').equal(2);
    })

    it('Truth', ()=>{
        const a = true;
        const b = null;
        let c;

        expect(a).true;
        expect(b).null;
        expect(c).undefined;
    })

    it('Object', ()=>{
        const obj = {
            a: 0,
            b: 'olá',
            c: 5.12
        }

        expect(obj).eql({a: 0, b: 'olá', c: 5.12});
        expect(obj).contains({a: 0});
        expect(obj).have.property('c');
    })

    it('Array', ()=>{
        const ar = [1, 2, 3, 4];

        expect(ar).include.members([1, 2]);
        expect(ar).deep.equal([1, 2, 3, 4])
    })


    it('Types', ()=>{
        const num = 1;
        const flo = 1.5;
        const str = 'oi';
        const obj = {
            a: 2
        }

        expect(num).a('number');
        expect(str).a('string');
        expect(flo).a('number');
        expect(obj).a('object');
    })


    it('String', ()=>{
        const str = "como esta voce";

        expect(str).include('e');
        expect(str).match(/^como/)
        expect(str).match(/voce$/)
        expect(str).match(/esta/)
    })

    it('Numbers', ()=>{
        const num = 2;
        const flo = 5.12;

        expect(num).above(1);
        expect(num).below(3);
        expect(flo).closeTo(5.1, 0.1)
    })
})