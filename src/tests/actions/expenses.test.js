import {removeExpense} from './../../actions/expenses';


test('should be test remove expense action and returen object',()=>{
    expect(removeExpense('128566ajaj')).toEqual({
        "type":"REMOVE_EXPENSE",
        "id":"128566ajaj"
    });
})