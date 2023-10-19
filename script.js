
let Name = document.getElementById("name");
let crew = document.querySelectorAll("input[name='crew']");
let addBtn = document.getElementById("add_name");
let listNames = document.getElementById("listOfNames");
let allNames = document.getElementById("List_Names");
let showAddForm = document.getElementById("addBtn");
let addForm = document.querySelector('.popup');
let showAllNames = document.getElementById('crewBtn');
let tableNames = document.querySelector('.tableOfNames');
let masterBtn = document.getElementById('actionbtn');
let namesCount = document.getElementById('namesCount');
let clearAll = document.getElementById('clearAllNames');
let bigArray = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0],
[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1],
[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2],
[4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3],
[5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4],
[6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5],
[7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6],
[8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7],
[9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8],
[10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
[11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
[12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
]
let namesDay = [];
let namesNight = [];
if (window.localStorage.getItem("namesDay")) {
    namesDay = JSON.parse(window.localStorage.getItem("namesDay"))
}



if (window.localStorage.getItem("namesNight")) {
    namesNight = JSON.parse(window.localStorage.getItem("namesNight"));
}

getDataFromLocalStorage()

namesCount.innerHTML = `(${namesDay.length + namesNight.length})`;
let crewArray = ["15 مايو", "الشرطة", "كوبرى الجلاء", "السعودية", "الامارات",
    "الفرنسيه", "الكويت", "كوبرى الجيزة", "بين البحرين", "والى", "الاوقاف", "2الفروسيه", "الفروسيه"];


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
let horDay2 = document.getElementById('horD2');
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
let horNight2 = document.getElementById('horN2');
///////////////////////////////////
//  Make Popup With Jquery

$('#addBtn').click(function () {
    $('.popup').fadeIn()
})
$('.popup').click(function () {
    $(this).fadeOut();
})
$('.popup .NAMES').click(function (e) {
    e.stopPropagation();
})
$('#cancle').click(function () {
    $('.popup').fadeOut();
})
//  ==================
// End Popup With Jquery

// function makeRandomArray(min, max) {
//     let length = max + 1;
//     let myArray = [];
//     let randomArray = [];
//     for (let i = min; i < length; i++) {
//         myArray.push(i)
//     }

//     while (randomArray.length < length) {
//         const randomIndex = Math.floor(Math.random() * myArray.length)
//         const num = myArray.splice(randomIndex, 1)[0]
//         randomArray.push(num)
//     }

//     return randomArray;
// }
clearAll.addEventListener('click', () => {
    window.localStorage.clear();
});


// let memoryArray = [];
$('.popupForMasterBtn').click(() => {
    $(this).fadeOut()
});
$('.inner').click(function (e) {
    e.stopPropagation();
})
$('#info').click(function () {
    $('.popupForMasterBtn').fadeOut();
})

let num = 0
if (localStorage.getItem('num')) {
    num = JSON.parse(localStorage.getItem('num'));
}

masterBtn.addEventListener("click", () => {
    if (namesDay.length < 13 && namesNight.length < 13) {
        $('.popupForMasterBtn').fadeIn();

    } else {

        window.localStorage.setItem('num', num);
        let theNum = window.localStorage.getItem('num');
        let finalResult = [];
        let resultOfNames = bigArray[theNum].map((e) => {
            return namesDay[e];
        })

        // num = num + 1;
        if (num === 13) {
            num = 0
        }


        // console.log(num)
        for (let i = 0; i < resultOfNames.length; i++) {
            let person = {
                name: resultOfNames[i],
                crew: crewArray[i]
            }
            finalResult.push(person);
        }
        // memoryArray.push(finalResult)
        finalResult.map((e) => {
            if (e.crew === "15 مايو") {
                mayDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الشرطة") {
                policeDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "كوبرى الجلاء") {
                galDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "السعودية") {
                soudiDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الامارات") {
                emritDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الفرنسيه") {
                friDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الكويت") {
                cuatDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "كوبرى الجيزة") {
                gizaDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "بين البحرين") {
                seaDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "والى") {
                walyDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الاوقاف") {
                afDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "الفروسيه") {
                horDay.innerHTML = e.name.newName;
            }
        })
        finalResult.map((e) => {
            if (e.crew === "2الفروسيه") {
                horDay2.innerHTML = e.name.newName;
            }
        })


        //   finalResultNight

        // finalResultNight = [];
        let finalResultNight = [];
        let resultOfNamesNight = bigArray[theNum].map((e) => {
            return namesNight[e];
        })
        num = num + 1;
        if (num === 13) {
            num = 0
        }

        for (let i = 0; i < resultOfNamesNight.length; i++) {
            let person = {
                name: resultOfNamesNight[i],
                crew: crewArray[i]
            }
            finalResultNight.push(person);
        }

        finalResultNight.map((e) => {
            if (e.crew === "15 مايو") {
                mayNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الشرطة") {
                policeNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "كوبرى الجلاء") {
                galNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "السعودية") {
                soudiNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الامارات") {
                emritNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الفرنسيه") {
                friNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الكويت") {
                cuatNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "كوبرى الجيزة") {
                gizaNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "بين البحرين") {
                seaNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "والى") {
                walyNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الاوقاف") {
                afNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "الفروسيه") {
                horNight.innerHTML = e.name.newName;
            }
        })
        finalResultNight.map((e) => {
            if (e.crew === "2الفروسيه") {
                horNight2.innerHTML = e.name.newName;
            }
        })
    }

})


addBtn.addEventListener("click", () => {
    let selected = document.querySelector("input[type='radio']:checked").value;
    let selector = document.querySelector("input[type='radio']:checked");
    let idValue = Math.random()
    let myName = {
        newName: Name.value,
        type: selected,
        id: idValue
    }
    if (selected === "نهار") {
        namesDay.push(myName);
    } else {
        namesNight.push(myName);
    }
    saveDataInLocalStorage(namesDay, namesNight)
    getDataFromLocalStorage()
    namesCount.innerHTML = `(${namesDay.length + namesNight.length})`;
    Name.value = "";
    selector.checked = false;
});

// function deleteData(i, allNames) {


// } 

showAllNames.addEventListener('click', () => {
    tableNames.classList.toggle('run');
});

function addElementToPage(arrayOfNames) {
    allNames.innerHTML = '';
    for (let i = 0; i < arrayOfNames.length; i++) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${arrayOfNames[i].newName}</td>
        <td>${arrayOfNames[i].type}</td>
    `;
        allNames.appendChild(newRow);
    }

}

function saveDataInLocalStorage(arrayOfNames, arrayNight) {
    window.localStorage.setItem("namesDay", JSON.stringify(arrayOfNames));
    window.localStorage.setItem("namesNight", JSON.stringify(arrayNight));
}

function getDataFromLocalStorage() {
    let dataDay = window.localStorage.getItem("namesDay");
    let dataNight = window.localStorage.getItem("namesNight");
    let namesDD = [];
    let namesNN = [];
    if (dataDay) {
        namesDD = JSON.parse(dataDay);
    }

    if (dataNight) {
        namesNN = JSON.parse(dataNight);
    }

    let allNamesInIt = namesDD.concat(namesNN);
    addElementToPage(allNamesInIt);
}



//  Test ...........

// function makeRandom(min, max) {
//     let length = max + 1;
//     let myArray = [];
//     let randomArray = [];
//     for (let i = min; i < length; i++) {
//         myArray.push(i)
//     }

//     let police = [];

//     while (randomArray.length < length) {
//         const randomIndex = Math.floor(Math.random() * myArray.length)
//         const num = myArray.splice(randomIndex, 1)[0]
//         randomArray.push(num)
//     }
//     for (i = 0; i < police.length; i++) {
//         if (randomArray[0] === police[i]) {
//             console.log('found');

//         } else {
//             police.push(randomArray[0]);
//         }
//     }
//     return police;
// }

// for (let i = 0; i < 6; i++) {
//     console.log(makeRandom(0, 11))
// }

// function testArrary(min, max) {
//     let lengthOfArray = max + 1;
//     let finalArrayTest = [];
//     let testFArray = [];
//     // for (let j = 0; j < lengthOfArray; j++) {
//     if (finalArrayTest.length == 0) {
//         for (let i = 0; i < lengthOfArray; i++) {
//             // if (i + 1 === 13) {
//             //     i = 0
//             // }
//             testFArray.push(i + 1);
//             finalArrayTest.push(testFArray);
//         }
//     } else {
//         for (let i = 0; i < lengthOfArray; i++) {
//             testFArray.push(i + 1);
//             finalArrayTest.push(testFArray);
//         }
//     }


//     // }

//     console.log(finalArrayTest)
//     console.log(testFArray)
// }


// testArrary(0, 12)

// let arrayBig = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0],
// [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1],
// [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2],
// [4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3],
// [5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4],
// [6, 7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5],
// [7, 8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6],
// [8, 9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7],
// [9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8],
// [10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// [11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// [12, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// ]


// console.log(arrayBig)
// console.log(arrayBig.length)
// console.log(arrayBig[12].length)