//importing myResume JSON file 
import data from "./myResume.json" assert {type: 'json'};

// FOR-IN for all detials in myResume
for (let details in data) {
    console.log(details, data[details])
}

console.log("=============================================================");

// FOR IN for Skills in myResume 
for (let skill in data.skills) {
    console.log(data.skills[skill])
}

console.log("=========================================================");
//FOR-OF for Skills in myResume
for (let skill of data.skills) {
    console.log(skill)
}

console.log("=============================================================");
// FOR-EACH method for Skills in myResume
data.skills.forEach(skill => console.log(skill))


for(let i=0; i< data.languages.length;i++){
    console.log(data.languages[i][])
}