sum=(a,b)=>{
    return a+b;
}

test('should be value 7',()=>{
    expect(sum(1, 2)).toBe(4);
})