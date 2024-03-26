const order = {
  customer: {
    adress:{
      // city:''
    }
  }
};

if (!order.customer?.address?.city) {
  console.log("City is required");
}

// condition1 = true;
// condition2 = true;

// if (condition1 && condition2) {
//   console.log("Ambas condiciones son true");
// } else {
//   console.log("No son las dos condiciones son true");
// }
