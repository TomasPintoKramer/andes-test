export function orderByField (data, field){
    let uniqueValues;
    if (field==="day"){
         uniqueValues = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
          ]
    }else{
    const valuesArray = [];
    data.map((item) => valuesArray.push(item[field]));
     uniqueValues = [...new Set(valuesArray)];
}
    const result = {};
    uniqueValues.map((value) => {
      data.map((sale) => {
        if (field==="day"){
            if (new Date(sale[field]).toLocaleString("es-MX", { month: "long" }) === value) {
              if (!result[value]) {
                result[value] = { sales: [sale], name: value };
              } else {
                result[value].sales.push(sale);
              }
            }
        }else{
        if (sale[field] == value) {
          if (!result[value]) {
            result[value] = { sales: [sale], name: value };
          } else {
            result[value].sales.push(sale);
          }
        }
      }});
    });
    for (const key in result) {
      result[key].totalSales = result[key].sales.reduce(function (a, b) {
        return a + b.finalPrice;
      }, 0);
    }
    return result
}
export function findMaxSales(obj){
    return Object.keys(obj).reduce((a, b) => (obj[a].totalSales > obj[b].totalSales ? a :b))
}