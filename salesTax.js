var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calcSalesTotals(salesData) {
  var answer = [];
  for(var i = 0; i < data.length; i += 1) {
    var companyInProv = data[i];
    var partialAnswer = {
      name: companyInProv.name,
      province: companyInProv.province
    };
    partialAnswer.totalSales =
      companyInProv.sales.reduce(function(runTotal, currTotal) {
        return runTotal + currTotal;
      }, 0);
    answer.push(partialAnswer);
    // console.log(answer);
  }
  return answer;
  // console.log(answer);
}

var newData = calcSalesTotals(companySalesData);

// console.log(newData);

function calcSalesTax(salesData, rates) {
  for(var i = 0; i < salesData.length; i += 1) {
    var province = salesData[i].province;
    var taxRate = rates[province];
    var totalSales = salesData[i].totalSales;
    var totalTax = taxRate * totalSales;
    salesData[i].totalTax = totalTax;
  }
  return salesData;
}

var newData2 = calcSalesTax(newData, salesTaxRates);

console.log(newData2);








// console.log("work in progress: ", salesData(companySalesData));

// function calculateSalesTax(salesData, taxRates) {
//
// }
//


// var results = salesTaxReport(companySalesData, salesTaxRates);
