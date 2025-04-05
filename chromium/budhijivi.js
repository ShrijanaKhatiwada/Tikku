// Add to the very top of budhijivi.js
// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check if user has previously set a preference
    chrome.storage.sync.get('darkMode', function(data) {
        if (data.darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Light Mode';
        }
    });
    
    // Toggle dark mode when button is clicked
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update button text
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
            chrome.storage.sync.set({ 'darkMode': true });
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
            chrome.storage.sync.set({ 'darkMode': false });
        }
    });
});

const callerNumber = document.getElementById("contact"); 
const measuresTaken= document.getElementById("measures"); 
const theCause = document.getElementById("causes"); 

// ##########---START OF FIRST COLUMN----#########

// NO SIGNAL
const noSig = document.querySelector('.noSignal');
noSig.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noSignal,
            args: [contactNo],
        }
    )
});

// INTERNET NOT WORKING SOLVED
const noIntS = document.querySelector('.noInternetSolved');
noIntS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetSolved,
            args: [contactNo,measure],
        }
    )
});

//SLOW INTERNET SOLVED
const slowS = document.querySelector('.slowBrowseSolved');
slowS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetSolved,
            args: [contactNo,measure],
        }
    )
});

//ACCOUNT EXTEND
const accExt = document.querySelector('.accountExtend');
accExt.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: accountExtend,
            args: [contactNo],
        }
    )
});

//FOLLOW UP
const followup = document.querySelector('.followUp');
followup.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: followUp,
            args: [contactNo,measure,causes],
        }
    )
});

// ##########---END OF FIRST COLUMN----#########

// ##########---START OF SECOND  COLUMN----#########

// CHANNEL SCRATCHES
const scratchChnl = document.querySelector('.channelScratch');
scratchChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: channelScratches,
            args: [contactNo],
        }
    )
});

// INTERNET NOT WORKING UNSOLVED
const noIntUn = document.querySelector('.noInternetUnsolved');
noIntUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetUnsolved,
            args: [contactNo,causes],
        }
    )
});

//SLOW INTERNET UNSOLVED
const slowUn = document.querySelector('.slowBrowseUnsolved');
slowUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetUnsolved,
            args: [contactNo,measure],
        }
    )
});

//SALES QUERIES
const queriesSales = document.querySelector('.salesQueries');
queriesSales.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: salesQueries,
            args: [contactNo],
        }
    )
});

//Reminder CALL
const remind = document.querySelector('.ReminderCall');
remind.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: ReminderCall,
            args: [contactNo,causes],
        }
    )
});

//###############-------END OF SECOND COLUMN---------############

//###############-------START OF THIRD COLUMN---------############

//CHANNELS MISSING
const missChnl = document.querySelector('.channelMissing');
missChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: channelMissing,
            args: [contactNo],
        }
    )
});

//NO INTERNET OVCC
const noIntOvcc = document.querySelector('.noInternetOVCC');
noIntOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: noInternetOVCC,
            args: [contactNo],
        }
    )
});

//SLOW INTERNET OVCC
const slowOvcc = document.querySelector('.slownetOVCC');
slowOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: slowInternetOVCC,
            args: [contactNo],
        }
    )
});

//PAID BUT ACCOUNT STILL INACTIVE
const paidInactive = document.querySelector('.paidAccountInactive');
paidInactive.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: paidAccountInactive,
            args: [contactNo],
        }
    )
});

//FIELD ASSISTANCE NEEDED
const assistReq = document.querySelector('.assistanceNeeded');
assistReq.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: assistanceRequired,
            args: [contactNo,causes],
        }
    )
});

//###############-------END OF THIRD COLUMN---------############
//###############-------START OF FOURTH COLUMN---------############

//ACCESS DENIED
const noAccess = document.querySelector('.accessDenied');
noAccess.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: accessDenied,
            args: [contactNo],
        }
    )
});

//PASSWORD CHANGE
const passwdChng = document.querySelector('.passwordChange');
passwdChng.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function:passwordChange,
            args: [contactNo],
        }
    )
});


//FIELD SUPPORT REQUIRED
const supportReq = document.querySelector('.supportRequired');
supportReq.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: fieldSupportRequired,
            args: [contactNo,measure,causes],
        }
    )
});

//COMPENSATION
const compensationRequired = document.querySelector('.compensation');
compensationRequired.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: compensation,
            args: [contactNo,causes],
        }
    )
});

//WIRE MANAGEMENT
const wireMgmt = document.querySelector('.wireManage');
wireMgmt.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: wireManagement,
            args: [contactNo],
        }
    )
});

//###############-------END OF FOURTH COLUMN---------############

//###############-------START OF FIFTH COLUMN---------############

//SOLVED CLEAR TV
const solvedTV= document.querySelector('.tvSolved');
solvedTV.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function:solvedClearTV,
            args: [contactNo,measure,causes],
        }
    )
});

//MATERIAL REPLACEMENT
const replaceMaterial = document.querySelector('.materialReplacement');
replaceMaterial.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: materialReplacement,
            args: [contactNo,causes],
        }
    )
});

//ACCOUNT ENABLE
const holdAccount = document.querySelector('.accountDisable');
holdAccount.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: freezeAccount,
            args: [contactNo],
        }
    )
});

//ACCOUNT DISABLE
const unholdAccount = document.querySelector('.accountEnable');
unholdAccount.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: startAccount,
            args: [contactNo],
        }
    )
});

//CONNECTION SHIFT
const connectshift = document.querySelector('.connectionShift');
connectshift.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let [tab] = await chrome.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            function: connectionShift,
            args: [contactNo,measure,causes],
        }
    )
});

//###############-------END OF FIFTH COLUMN---------############

// START OF FUNCTIONS
function noSignal(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team, </br> As per conversation on " + caller +", the client has no signal displayed on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search, thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelScratches(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team, </br> As per conversation on " + caller +", the client has scratched channels on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search, re-inserting the smart card and even factory defaulting the STB, thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelMissing(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team, </br> As per conversation on " + caller +", the client has channels missing on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and re-inserting the smart card, thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function solvedClearTV(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team, </br> As per conversation on " + caller +", the client had "+cause+ " on his Clear TV. According to the client, the issue got solved after "+measure+".</br>Thank You!!!,";
}
function noInternetSolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client had lost connection. According to the client, "+measure+" has restored the connection.<br>Thank You!!!<br>The following data can be used for reference:<br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function noInternetUnsolved(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client has lost connection. On further verification, " +cause+ " seems to be the root cause of the issue. Please perform the necessities asap.<br>Thank You!!!<br>The following data can be used for reference:<br><br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function wireManagement(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client has lost connection due to wire breakage and thus has requested for wire management. Please perform the necessities asap.<br>Thank You!!!"
}
function materialReplacement(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wants his broken "+cause+" replaced. Please perform the necessities asap.<br>Thank You!!!"
}
function noInternetOVCC(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear OVCC Team,<br>As per conversation on "+caller+", the client has lost connection. Please perform the necessities.<br>Thank You!!!"
}
function slowInternetOVCC(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear OVCC Team,<br>As per conversation on "+caller+", the client has sluggish connection. Please perform the necessities.<br>Thank You!!!"
}
function slowInternetSolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client had sluggish connection. According to the client, "+measure+" has solved the issue. <br>Thank You!!!<br>The following data can be used for reference:<br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function slowInternetUnsolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on "+caller+", the client has sluggish connection. Unfortunately," +measure+ "did not seem to have solved the issue according to the client. Please proceed accordingly.<br>Thank You!!!<br> The following data can be used for reference: <br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function fieldSupportRequired(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on "+caller+", the client has "+ cause +" issues. Unfortunately, " +measure+ " did not seem to have solved the issue and the client has requested for field support. Please provide the necessary support to the client asap.<br>Thank You!!!<br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function accountExtend(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on "+caller+", the client wants to extend his subscription with promise to pay. Please proceed accordingly.<br>Thank You!!! "
}
function salesQueries(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on "+caller+", the client has various sales related queries. Please provide the client with required information.<br>Thank You!!! "
}
function compensation(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Sales Team,<br>As per conversation on "+caller+", the client has requested a compensation for his connection lost due to "+cause+". Please provide the client with required informantion and necessary help. <br>Thank You!!! "
}
function accessDenied(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client had access denied displayed on his Clear TV. According to the client, the issue got solved after reactivating the STB.<br>Thank You!!! "
}
function paidAccountInactive(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client has already paid his subscription fee, but his account is still inactive. Please perform the necessities asap for the client is pretty infuriated.<br>Thank You!!!"
}
function freezeAccount(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wants to have his account disabled until further notice. Please proceed accordingly.<br>Thank You!!!"
}
function startAccount(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wants to reactivate the disabled account now. Please perform the necessities asap.<br>Thank You!!!"
}
function followUp(caller,measures,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client had " +cause+ " which had been restored successfully by "+measures+", but the client is pessimistic about his connection remaining stable and thus, has requested for a follow-up call at around <strong><i>$TIME</strong></i>. Please provide the client with requested follow-up and required help.<br>Thank you!!<br>The following data can be used for reference:<br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine"
}
function assistanceRequired(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client needs help with "+cause+ ". The client being technically naive has requested for field support, thus please provide the client with required assistance asap.<br>Thank You!!!"
}
function connectionShift(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wants to shift their connection<br> From: "+measure+" <br>To: "+cause+" <br> thus, please proceed accordingly asap.<br>Thank You!!!"
}
function ReminderCall(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
    "Dear Team,<br>**********REMINDER CALL RECEIVED************<br>As per conversation on "+caller+", the client's "+cause+" connection has not yet been fixed. Please perform the necessities asap for the client is extremely infuriated.<br>Also, the client wants to get updates about the situation along with the estimated restoration time of his connection thus, please proceed accordingly.<br>Thank You!!!<br>"
}
function passwordChange(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wanted to change his WiFi password. The password has been changed successfully. <br>Thank You!!<br>The following data can be used for reference:<br>Current Device Status:- Internet Not Working<br>Current Channel Changed to: <br>Connected Clients:  <br>Optical Power: <br>Rebooted: no<br>Session: Fine <br>Password: "
}
