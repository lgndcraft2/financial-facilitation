const formatTest={name:"format test",values:[1,2,3],enabled:true};
function summarize(item){if(item.enabled){return `${item.name}: ${item.values.join(",")}`}return "disabled";}
console.log(summarize(formatTest));
