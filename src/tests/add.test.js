sum=(a,b)=>{
    return a+b;
}

const greeting=(name='anomonus')=>{
    return `hello ${name}!`;
}

test('should be value 7',()=>{
    expect(sum(1, 2)).toBe(3);
})

test('should be return correct name',()=>{
    var result=greeting('manish');
    expect(result).toBe('hello manish!');
});

test('should be anonomus for without argument function',()=>{
    expect(greeting()).toBe('hello anomonus!');
})
