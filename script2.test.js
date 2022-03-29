const swapi = require('./script2');
const fetch = require('node-fetch');

it('Calls swapi to getpeople', ()=>{
    expect.assertions(1);
    return swapi.getPeople(fetch).then((data)=> {
        expect(data.count).toBe(87)
    })
})

it('calls swapi to getPeople with Promise', ()=>{
    expect.assertions(2);
    return swapi.getPeople(fetch).then((data)=>{
        expect(data.count).toBe(87)
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it('getPeople returns count and results Mocking it', ()=>{
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4,5]
        })
    }))

    expect.assertions(4)
    return swapi.getPeople(mockFetch).then(data =>{
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('http://swapi.py4e.com/api/people')
        expect(data.count).toBe(87)
        expect(data.results.length).toBeGreaterThan(5);
    })
})

// it('Learn mockfetch',()=>{
//     const mockFetch = jest.fn()
//         .mockReturnValue(Promise.resolve({
//             json: ()=> Promise.resolve({
//                 count: 87,
//                 results: [1,2,3,4,5]
//             })
//         }))
//         expect.assertions(1)
//         return swapi.getPeople(mockFetch).then(data => {
//             expect(mockFetch.mock.calls.length).toBe(1)
//         })
// })

it('Another MockFetch', ()=>{
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
        json: ()=> Promise.resolve({
            count: 87,
            results: [1,2,3,4,5]
        })
    }))

    expect.assertions(5)
    return swapi.getPeople(mockFetch).then(data=> {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(data.count).toBe(87)
        expect(data.results).toBeInstanceOf(Array)
        expect(data && typeof data === 'object').toBe(true)
        expect(Array.isArray(data.results)).toBe(true)
    })
})
