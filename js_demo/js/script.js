alert('Is this working? I hope so...');

function askName() {
    //the variable below is for the web browser to populate the answer on the web page
    var nameReturn=document.getElementById('ask-name');
    //the main variable is for the prompt box to appear and the user can type their name
    var name=prompt('TELL ME NOW','HERE');
    if (name=='') {
        alert('give me your name...or else');
    } else {
        nameReturn.innerHTML = 'Your name is...'+name+'!';
    }
}

function askQuestion() {
    var p=prompt('How many letters are in the alphabet?');
    if (p !=null) {
        document.getElementById('question').innerHTML='Well, depending on the alphabet, '+p+' could be right!'
    } 
}
