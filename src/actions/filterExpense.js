

 export var textFilter=({text})=>{
    return {
      type:'TEXT_FILTER',
      text
    }
  }
 export var setStartDate=(startDate)=>({
    type:'SET_START_DATE',
    startDate
  })

  export var setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
  })
  
export  var sortByDate=({sortBy=''}={})=>({
    type:'SORT_BY_DATE',
    sortBy
  })
  
 export var sortByAmmount=({sortBy=''}={})=>({
    type:'SORT_BY_AMMOUNT',
    sortBy
  })