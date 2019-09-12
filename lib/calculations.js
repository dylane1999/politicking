const bios = require('./bios.json')

Object.defineProperty(Array.prototype, 'flat', { //https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});

function calculateResults(data) {
  let numberOfQs = 16;
  let bidenCounter = 0;
  let sandersCounter = 0;
  let bookerCounter = 0;
  let harrisCounter = 0;
  let buttigiegCounter = 0;
  let yangCounter = 0;
  let trumpCounter = 0;
  let warrenCounter = 0;
  let betoCounter = 0;
  let klobucharCounter = 0;
  let castroCounter = 0;
  let gillibrandCounter = 0;
  let weldCounter = 0;
  let timRyanCounter = 0;
  let steveBullockCounter = 0;

  let data1 = Object.entries(data);
  data1 = dataSorter(data1);
  data1 = String(data1);
  data1 = data1.split(" ");
  console.log(data1);
  console.log("test");
  alignmentFinder(data1);

  return {
    candidates: [
      { name: "Biden", alignment: Math.floor((bidenCounter / numberOfQs) * 100 ), bio: bios.Biden },
      { name: "Sanders", alignment: Math.floor((sandersCounter / numberOfQs) * 100 ),bio: bios.Sanders},
      { name: "Buttigieg", alignment: Math.floor((buttigiegCounter / numberOfQs) * 100 ),bio: bios.Buttigieg},
      { name: "Booker", alignment: Math.floor((bookerCounter / numberOfQs) * 100 ),bio: bios.Booker},
      { name: "Harris", alignment: Math.floor((harrisCounter / numberOfQs) * 100) ,bio: bios.Harris},
      { name: "Yang", alignment: Math.floor((yangCounter / numberOfQs) * 100),bio: bios.Yang },
      { name: "Beto", alignment: Math.floor((betoCounter / numberOfQs) * 100) ,bio: bios.Beto},
      { name: "Klobuchar", alignment: Math.floor((klobucharCounter / numberOfQs) * 100),bio: bios.Klobuchar },
      { name: "Castro", alignment: Math.floor((castroCounter / numberOfQs) * 100),bio: bios.Castro },
      { name: "Trump", alignment: Math.floor((trumpCounter / numberOfQs) * 100),bio: bios.Trump },
      { name: "Warren", alignment: Math.floor((warrenCounter / numberOfQs) * 100 ),bio: bios.Warren},
      { name: "Gillibrand", alignment: Math.floor((gillibrandCounter / numberOfQs) * 100 ),bio: bios.Gillibrand},
      { name: "Weld", alignment: Math.floor((weldCounter / numberOfQs) * 100),bio: bios.Weld },
      { name: "Ryan", alignment: Math.floor((timRyanCounter / numberOfQs) * 100 ),bio: bios.Ryan},
      {
        name: "Bullock",
        alignment: Math.floor((steveBullockCounter / numberOfQs) * 100),bio: bios.Bullock
      }
    ]
  };

  function alignmentFinder(data) {
    for (let index = 0; index < data.length; index++) {
      //a loop that adds one to the animal count for each time the animals name appears in the document
      if (data[index].includes("biden")) {
        bidenCounter++;
      } else if (data[index].includes("buttigieg")) {
        buttigiegCounter++;
      } else if (data[index].includes("sanders")) {
        sandersCounter++;
      } else if (data[index].includes("harris")) {
        harrisCounter++;
      } else if (data[index].includes("booker")) {
        bookerCounter++;
      } else if (data[index].includes("yang")) {
        yangCounter++; //og
      } else if (data[index].includes("beto")) {
        betoCounter++;
      } else if (data[index].includes("klobuchar")) {
        klobucharCounter++;
      } else if (data[index].includes("castro")) {
        castroCounter++;
      } else if (data[index].includes("trump")) {
        trumpCounter++;
      } else if (data[index].includes("warren")) {
        warrenCounter++;
      } else if (data[index].includes("gillibrand")) {
        gillibrandCounter++;
      } else if (data[index].includes("weld")) {
        weldCounter++;
      } else if (data[index].includes("ryan")) {
        timRyanCounter++;
      } else if (data[index].includes("bullock")) {
        steveBullockCounter++;
      }
    }
  }

  function dataSorter(data) {
    data = data.flat(50);
    data = filterItems(data, "q");
    return data;
  }

  function filterItems(arr, query) {
    return arr.filter(function(filt) {
      return filt.indexOf(query.toLowerCase()) == -1;
    });
  }
}

module.exports = calculateResults;

