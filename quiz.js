let qIndex = 0;
let score = 0;

const questions = [
 {q:"What does CPU stand for?",o:["Central Processing Unit","Control Program Unit","Central Power Unit","Core Processing Unit"],a:0},
 {q:"Which device stores data permanently?",o:["RAM","Cache","Hard Disk","Register"],a:2},
 {q:"What is an operating system?",o:["Hardware","Software","Compiler","Memory"],a:1},
 {q:"Which is an example of cloud storage?",o:["Google Drive","Pen Drive","Hard Disk","ROM"],a:0},
 {q:"What does HTTP stand for?",o:["Hyper Transfer Text Protocol","Hyper Text Transfer Protocol","High Transfer Text Protocol","Hyper Tool Transfer Program"],a:1},
 {q:"Which is NOT an input device?",o:["Keyboard","Mouse","Monitor","Scanner"],a:2},
 {q:"What is the brain of computer?",o:["RAM","CPU","Hard Disk","Monitor"],a:1},
 {q:"Which company developed Windows?",o:["Apple","Google","Microsoft","IBM"],a:2},
 {q:"What does AI stand for?",o:["Automatic Intelligence","Artificial Intelligence","Advanced Internet","Applied Interface"],a:1},
 {q:"Which is a programming paradigm?",o:["OOP","HTTP","CPU","RAM"],a:0},
 {q:"What is cybersecurity?",o:["Game","Protection of systems","Hardware","Network cable"],a:1},
 {q:"Which is an example of database?",o:["Excel","MySQL","Chrome","Ubuntu"],a:1},
 {q:"What is phishing?",o:["Fishing","Cyber attack","Encryption","Backup"],a:1},
 {q:"Which OS is open-source?",o:["Windows","macOS","Linux","iOS"],a:2},
 {q:"What is IoT?",o:["Internet of Things","Input Output Tech","Internal OS Tool","Internet Only Tech"],a:0},
 {q:"What does URL stand for?",o:["Uniform Resource Locator","Universal Resource Link","Uniform Remote Link","User Resource Locator"],a:0},
 {q:"Which is a web browser?",o:["Google","Chrome","Android","Windows"],a:1},
 {q:"Which storage is fastest?",o:["RAM","SSD","HDD","DVD"],a:0},
 {q:"What is encryption?",o:["Data deletion","Data protection","Data copy","Data loss"],a:1},
 {q:"Which is NOT a cloud service?",o:["AWS","Azure","Firebase","Bluetooth"],a:3}
];

function loadQ(){
    let q = questions[qIndex];
    document.getElementById("question").innerText = q.q;
    q.o.forEach((op,i)=>document.getElementById("o"+i).innerText=op);
    document.getElementById("progress").innerText = `Question ${qIndex+1} of 20`;
}

function answer(i){
    if(i === questions[qIndex].a) score++;
    qIndex++;

    if(qIndex < questions.length){
        loadQ();
    } else {
        document.querySelector(".quiz-box").innerHTML =
            `<h3>Completed 🎉</h3>
             <p>Your Score: <b>${score} / 20</b></p>
             <button onclick="window.location.href='dashboard.html'">Back</button>`;
    }
}

window.onload = loadQ;
