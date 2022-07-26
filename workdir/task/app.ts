const taskOne = (passengers: number, shuffle: number) => {
  const location: string[] = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"];

  interface objTypes {
    name: String;
    location: string;
  }
  let myArray: String[] = [];
  let boarded: any[] = [];
  let reservation: {}[] = [];
  let countShuffle: number = 1;

  // generate passengers and put them into my_array
  for (let i = 1; i <= passengers; i++) {
    myArray.push("passenger" + i);
  }

  // assign location to passengers and push them to boarded first
  let count = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (count == 5) {
      count = 0;
    }
    let obj = { name: myArray[i], location: location[count] };
    count++;
    boarded.push(obj);
  }

  //   this check and remove  unbalance location
  let reserve = boarded.length % 5;
  // reserve

  if (reserve == 0) {
  } else {
    reservation = boarded.splice(boarded.length - reserve, reserve);
  }
  
  /**
   * reserve have been removed from the boarded pasengers
   * our current borded now holds a new length of only allowed
   * boarded passengers
   */

  let newBoard: Number = boarded.length;
  

  for (let i = 0; i <= newBoard; i++) {
    if (boarded.length <= 50) {
    } else {
      if (i % 50 === 0 && shuffle == 0) {
        //make a shallow copy
        reservation = boarded.map((item) => item);
        // splice out the ones fore boarded // start from index 50
        boarded.splice(50, 50);
        //splice out the ones for reservation // start from index 0 cout up to 50
        reservation.splice(0, 50);
      }
      else if (i % 50 === 0 && shuffle >= 1) {
        boarded.splice(0, 50);

        countShuffle++;
        shuffle--;
      }
    }
  }
  // boarded;
  return {
    boarded: boarded,
    reservation: reservation,
    count: countShuffle,
  };
};

taskOne(221, 2);
export default taskOne;
