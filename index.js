const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let total = 32

// const totalBatteries = batteryBatches.reduce((paramOne, param2) => paramOne + param2, sum);
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
    }
  )