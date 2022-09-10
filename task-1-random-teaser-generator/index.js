//Base words
const randomBodyParts = ['глаз', 'нос', 'череп', 'рот'];
const randomAdjectives = ['вонючая', 'унылая', 'дурацкая', 'некрасивая'];
const randomAnimals = ['лошадь', 'крокодил', 'лев', 'мартышка', 'крыса'];
const randomBodyPartsAnimals = ['лапа', 'морда', 'нос', 'хвост', 'шерсть'];

//Get access to button and teaser_output
const button = document.getElementById('button');
const output = document.getElementById('teaser_output');

button.addEventListener('click',  generateTeaser)

function generateTeaser() {
  // Choose random body parts in arr randomBodyParts
  let randomBodyPart =
    randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

  // Choose random adjective in arr randomAdjectives
  let randomAdjective =
    randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

  // Choose random word in arr randomWords
  let randomAnimal =
    randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

  // Choose random body parts animal in arr randomBodyPartsAnimals
  let randomBodyPartsAnimal =
    randomBodyPartsAnimals[
      Math.floor(Math.random() * randomBodyPartsAnimals.length)
    ];
  // Join our strings in sentense
  let randomInsult = `У тебя ${randomBodyPart} еще более ${randomAdjective}, чем ${randomBodyPartsAnimal} у ${randomAnimal}».`;
  output.innerHTML = randomInsult;
}
