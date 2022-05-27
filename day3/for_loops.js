//importing myResume JSON file 
import data from "./myResume.json"assert {
    type: 'json'
};

// FOR-IN for all detials in myResume
for (let details in data) {
    console.log(details, data[details])
}

console.log("=============================================================");

// FOR loop for skills in myResume
for (let i = 0; i < data.skills.length; i++) {
    console.log(data.skills[i])
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

console.log("=============================================================");

// FOR-EACH method for Languages in myResume
data.languages.forEach(language => console.log(language))

console.log("=============================================================");

// FOR-IN for Languages in myResume
for (let language in data.languages) {
    // console.log(data.languages[language])
    console.log(Object.values(data.languages[language]));

}

console.log("=============================================================");

// For-of for Languages in myResume
for (let language of data.languages) {
    console.log(language)
}

console.log("=============================================================");

// For social media in myResume
for (let social in data.social_links) {
    console.log(social)
}

console.log("=============================================================");

// FOR-IN loop for work experience in myResume
for (let experience in data.workHistory) {
    console.log(data.workHistory[experience])
}