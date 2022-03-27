const googleSearch = require('./script')

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

it('Silly test', ()=>{
    expect(true).toBe(true)
})

it('is searching google', ()=>{
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})

it('work with undefined or null', ()=>{
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
})
