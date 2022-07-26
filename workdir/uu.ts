const taskOne = (passengers: number, shuffle: number) => {
  const location: string[] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];
  //complete your work here

  // boarded passenger
  // reserved passenger
  // count -- number of time the train move

  let arr = [];
  let boarded = [];
  let reserve: {}[] = [];
  let countShuffle = 1;
  // GENERATE PASSENGERS
  for (let i = 1; i <= passengers; i++) {
    arr.push("passenger" + i);
  }

  // ASSIGN LOCATION TO PASSENGERS
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count == 5) {
      count = 0;
    }
    let obj = { name: arr[i], location: location[count] };
    count++;
    boarded.push(obj);
  }
  // console.log(boarded);

  //   THIS CHECK AND REMOVE  UNBALANCE LOCATION
  let res = boarded.length % 5;

  if (res == 0) {
  } else {
    reserve = boarded.splice(boarded.length - res, res);
  }
  // console.log(reserve);

  let newBoard = boarded.length;

  for (let i = 0; i <= newBoard; i++) {
    if (boarded.length <= 50) {
    } else {
      if (i % 50 === 0 && shuffle == 0) {
        reserve = [...boarded]; //made a shallow copy

        boarded.splice(50, 50); // splice out the ones fore boarded // start from index 50

        reserve.splice(0, 50); //splice out the ones for reserve // start from index 0 cout up to 50
      } else if (i % 50 === 0 && shuffle >= 1) {
        boarded.splice(0, 50);

        countShuffle++;
        shuffle--;
      }
    }
  }

  return {
    boarded: boarded,
    reservation: reserve,
    count: countShuffle,
  };
};

export default taskOne;
