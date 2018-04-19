

export default (expensify,{text,sortBy,startDate,endDate})=>{
    return expensify.filter((expense)=>{
       var startDateFilter=typeof startDate!=='number' || expense.createdAt>=startDate;
       var endDateFilter=typeof endDate!=='number' || expense.createdAt<=endDate;;
       var textFilter=expense.description.toLowerCase().includes(text.toLowerCase());
       return startDateFilter && endDateFilter && textFilter;
   }).sort((a,b)=>{
     if(sortBy==='date'){
       return a.createdAt<b.createdAt ? -1:1;
     }
     else if(sortBy==='ammount'){
       console.log(parseInt(a.ammount));
       return parseInt(a.ammount)<parseInt(b.ammount) ? -1:1;
     }
   })
  } 