// TASK 1
const myHouse = {
    numberOfStoreys: 2,
    hasParking: false,
    numberOfBedrooms: 2,
    hasGarden: true,
    energyRating: "D",
};

const myCar = {
    colour: "red",
    numberOfWheels: 4,
    hasPowerSteering: true,
    numberOfSeats: 2,
    milesPerGallon: 20,
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseYear: "2008", // not sure if this is better as a number
    leadActor: "Christian Bale",
};

// TASK 2
let person = {
    name: "Liz",
    likesChocolate: false,
  };

console.log(person.likesChocolate);

if (person.likesChocolate) {
    console.log(`${person.name} loves chocolate`);
}
else {
    console.log(`${person.name} hates Chocolate`);
};


// TASK 3
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"]);
console.log(bensPhrases[desiredPleasantry]);

desiredPleasantry = "farewell";
console.log(bensPhrases[desiredPleasantry]);


// TASK 4
let me = {
    firstName: "Liz",
    lastName: "Wade",
    isBootcamper: false,
  };

me.isBootcamper = true;


// TASK 5
let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  myText = communication.payload.message.text;

  if (communication.payload.message.priority === "URGENT") {
    console.log(myText);
  }
 

  // TASK 6: Experiment with objects, functions, inputs etc

  function makeABagel() {
    // declare a bagel object.
    // Give it some boring default values (not sure if this step is necessary
    // but it feels scary not to define the schema for bagel at all??
    // And by creating defaults here I can use them as prompts below,
    // and avoid the risk of null values.)
    let bagel = {
        type: "plain",
        isToasted: false,
        spread: "butter",
        fillings: [],
    };

    // Get some user input
    // I'm going to use the defaults I specified in the declaration as defaults for the prompt
    // (Clearly a drop-down menu would be a better way to do this.)
    bagel.type = prompt("Do you want plain, sesame, or poppy?", bagel.type); 
    bagel.isToasted = Boolean(prompt("Press OK if you want it toasted or CANCEL if you don't", "Yes")); // worked out how to do this via stack exchange. Not bulletproof since explicitly entering "No" will return true
    bagel.spread = prompt("Spread with butter or cream cheese?", bagel.spread);
    
    let fillingToAdd = true;
    while (fillingToAdd) {
        fillingToAdd = prompt("Add a filling, or press CANCEL if you're done adding fillings");
        bagel.fillings.push(fillingToAdd);
    }
    bagel.fillings.pop(); // there must be a better way to not end up with a null value on the end of the array!
    

    // Hand it over with a nice message!
    enjoyMessage = `Enjoy your `

    if (!bagel.isToasted) {
        enjoyMessage += "un";
    }
    enjoyMessage += `toasted ${bagel.type} bagel with `;

    if (bagel.fillings.length > 0) {
        enjoyMessage += (bagel.fillings + " and ");
    }
    enjoyMessage += (bagel.spread + "!");

    console.log(enjoyMessage);
    return bagel;
  }

  myBagel = makeABagel();

  console.log(myBagel);




