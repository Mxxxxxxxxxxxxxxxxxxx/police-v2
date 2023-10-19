// console.log("Hello From Script File");

let Name = document.getElementById("name");
let crew = document.getElementById("Crew");
let addBtn = document.getElementById("add_name");
let listNames = document.getElementById("listOfNames");
let allNames = document.getElementById("List_Names");
let showAddForm = document.getElementById("addBtn");
let addForm = document.querySelector('.NAMES');
let showAllNames = document.getElementById('crewBtn');
let tableNames = document.querySelector('.tableOfNames');
let masterBtn = document.getElementById('actionbtn');
let namesDay = [];
let namesNight = [];
let crewArray = ["15 مايو", "الشرطة", "كوبرى الجلاء", "السعودية", "الامارات",
    "الفرنسيه", "الكويت", "كوبرى الجيزة", "بين البحرين", "والى", "الاوقاف", "الفروسيه"];


// ////////////////////
let mayDay = document.getElementById('mayD');
let policeDay = document.getElementById('poD');
let galDay = document.getElementById('gaD');
let soudiDay = document.getElementById('sauD');
let emritDay = document.getElementById('emrD');
let friDay = document.getElementById('freD');
let cuatDay = document.getElementById('cuatD');
let gizaDay = document.getElementById('gizaD');
let seaDay = document.getElementById('twoSeaD');
let walyDay = document.getElementById('walyD');
let afDay = document.getElementById('afD');
let horDay = document.getElementById('horD');
// /////////////////////////////
let mayNight = document.getElementById('mayN');
let policeNight = document.getElementById('poN');
let galNight = document.getElementById('gaN');
let soudiNight = document.getElementById('sauN');
let emritNight = document.getElementById('emrN');
let friNight = document.getElementById('freN');
let cuatNight = document.getElementById('cuatN');
let gizaNight = document.getElementById('gizaN');
let seaNight = document.getElementById('twoSeaN');
let walyNight = document.getElementById('walyN');
let afNight = document.getElementById('afN');
let horNight = document.getElementById('horN');
///////////////////////////////////
addBtn.addEventListener("click", () => {
    const newRow = document.createElement('tr');
    let myName = {
        newName: Name.value,
        crew: crew.value
    }
    if (crew.value === "نهار") {
        namesDay.push(myName);
    } else {
        namesNight.push(myName);
    }

    newRow.innerHTML = `
        <td>${Name.value}</td>
        <td>${crew.value}</td>
    `;
    allNames.appendChild(newRow);
    Name.value = "";
    crew.value = "";
    //     // console.log(namesDay);
    //     // console.log(namesNight);
});

showAddForm.addEventListener('click', () => {
    addForm.classList.toggle('show');
    // console.log("Added")
});


showAllNames.addEventListener('click', () => {
    tableNames.classList.toggle('run');

});








function generateUniqueRandomNumbers(count, min, max) {
    if (count > (max - min + 1)) {
        console.error("Count should not exceed the range of available numbers.");
        return [];
    }

    const randomNumbers = [];
    const allNumbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

    while (randomNumbers.length < count) {
        const randomIndex = Math.floor(Math.random() * allNumbers.length);
        const randomNumber = allNumbers.splice(randomIndex, 1)[0];
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

const count = 4;  // تعيين عدد الأرقام العشوائية
const min = 0;     // الحد الأدنى للنطاق
const max = 3;   // الحد الأعلى للنطاق

const randomNumbers = generateUniqueRandomNumbers(count, min, max);
console.log(randomNumbers);

let resultArray = [];
let nightArray = [];


masterBtn.addEventListener("click", () => {
    resultArray = [];
    const randomNameIndex = generateUniqueRandomNumbers(namesDay.length, 0, namesDay.length - 1);
    const randomCrewIndex = generateUniqueRandomNumbers(namesDay.length, 0, namesDay.length - 1);

    for (let i = 0; i < namesDay.length; i++) {
        const person = {
            name: namesDay[randomNameIndex[i]],
            crew: crewArray[randomCrewIndex[i]]
        };

        resultArray.push(person);
    }

    console.log(resultArray);
    resultArray.map((e) => {
        if (e.crew === "15 مايو") {
            mayDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الشرطة") {
            policeDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "كوبرى الجلاء") {
            galDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "السعودية") {
            soudiDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الامارات") {
            emritDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الفرنسيه") {
            friDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الكويت") {
            cuatDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "كوبرى الجيزة") {
            gizaDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "بين البحرين") {
            seaDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "والى") {
            walyDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الاوقاف") {
            afDay.innerHTML = e.name.newName;
        }
    })
    resultArray.map((e) => {
        if (e.crew === "الفروسيه") {
            horDay.innerHTML = e.name.newName;
        }
    })
    // .........................
    resultArray.map((e) => {
        if (e.name.newName === "محمود عادل") {
            console.log("the Crew: " + e.crew)
        }
    })
    // mmmmmmmmmmmmmmmmmmmmm
    nightArray = [];
    const randomNameIndexNight = generateUniqueRandomNumbers(namesNight.length, 0, namesNight.length - 1);
    const randomCrewIndexNight = generateUniqueRandomNumbers(namesNight.length, 0, namesNight.length - 1);

    for (let i = 0; i < namesNight.length; i++) {
        const person = {
            name: namesNight[randomNameIndexNight[i]],
            crew: crewArray[randomCrewIndexNight[i]]
        };

        nightArray.push(person);
    }

    console.log(nightArray);
    nightArray.map((e) => {
        if (e.crew === "15 مايو") {
            mayNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الشرطة") {
            policeNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "كوبرى الجلاء") {
            galNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "السعودية") {
            soudiNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الامارات") {
            emritNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الفرنسيه") {
            friNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الكويت") {
            cuatNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "كوبرى الجيزة") {
            gizaNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "بين البحرين") {
            seaNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "والى") {
            walyNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الاوقاف") {
            afNight.innerHTML = e.name.newName;
        }
    })
    nightArray.map((e) => {
        if (e.crew === "الفروسيه") {
            horNight.innerHTML = e.name.newName;
        }
    })



})
