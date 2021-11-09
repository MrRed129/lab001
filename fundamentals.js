const aCar = {
    owner: "Joe Bloggs",
    mileage : 10000,
    previous_owners: [
        { name: "Pat Smith", address: "1 Main Street" },
        { name: "Sheila Dwyer", address: "2 High Street" }
      ],
    
    colour : {
        exterior: "red",
        interior: { texture: "silk", shade: "`green`" }
    },
    type: {
      make: "Toyota",
      model: "Corolla",
      cc: 1.8
    },
    registration: { year: 201, county: "WD", number: 1058 }
  };
  
  console.log(aCar.owner + " drives a " + aCar.type.make);
  console.log(
    "Reg. = " +
      aCar.registration.year +
      "-" +
      aCar.registration.county +
      "-" +
      aCar.registration.number
  );


console.log(aCar.owner + " drives a " + aCar.type.make);
console.log(
  "Reg. = " +
    aCar.registration.year +
    "-" +
    aCar.registration.county +
    "-" +
    aCar.registration.number
);

aCar.mileage = 10000
aCar.colour = {
  exterior: "red",
  interior: { texture: "leather", shade: "cream" }
}

console.log(
  "It is a " +
    aCar.colour.exterior +
    " car, " +
    aCar.mileage +
    " milage, with " +
    aCar.colour.interior.texture +
    " interior."
);
console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )
  for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
    console.log(aCar.previous_owners[i].name);
}