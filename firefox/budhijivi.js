const callerNumber = document.getElementById("contact"); 
const measuresTaken= document.getElementById("measures"); 
const theCause = document.getElementById("causes"); 
 
// ##########---START OF FIRST COLUMN----#########
 
// NO SIGNAL
const noSig = document.querySelector('.noSignal');
noSig.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
   browser.tabs.executeScript(tab.id, {
    code: `(${noSignal.toString()})("${contactNo}")`
   });
});
 
// INTERNET NOT WORKING SOLVED
const noIntS = document.querySelector('.noInternetSolved');
noIntS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${noInternetSolved.toString()})("${contactNo}","${measure}")`
       });
});
 
//SLOW INTERNET SOLVED
const slowS = document.querySelector('.slowBrowseSolved');
slowS.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
		code: `(${slowInternetSolved.toString()})("${contactNo}","${measure}")`
       });
});
 
//ACCOUNT EXTEND
const accExt = document.querySelector('.accountExtend');
accExt.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
		code: `(${accountExtend.toString()})("${contactNo}")`
       });
});
 
//FOLLOW UP
const followup = document.querySelector('.followUp');
followup.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${followUp.toString()})("${contactNo}","${measure}","${causes}")`
       });
});
 
// ##########---END OF FIRST COLUMN----#########
 
// ##########---START OF SECOND  COLUMN----#########
 
// CHANNEL SCRATCHES
const scratchChnl = document.querySelector('.channelScratch');
scratchChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${channelScratches.toString()})("${contactNo}")`
       });
});
 
// INTERNET NOT WORKING UNSOLVED
const noIntUn = document.querySelector('.noInternetUnsolved');
noIntUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${noInternetUnsolved.toString()})("${contactNo}","${causes}")`
       });
});
 
//SLOW INTERNET UNSOLVED
const slowUn = document.querySelector('.slowBrowseUnsolved');
slowUn.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${slowInternetUnsolved.toString()})("${contactNo}","${causes}")`
       });
});
 
//SALES QUERIES
const queriesSales = document.querySelector('.salesQueries');
queriesSales.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${salesQueries.toString()})("${contactNo}")`
       });
});
 
//Reminder CALL
const remind = document.querySelector('.ReminderCall');
remind.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${ReminderCall.toString()})("${contactNo}")`
       });
});
 
//###############-------END OF SECOND COLUMN---------############
 
//###############-------START OF THIRD COLUMN---------############
 
//CHANNELS MISSING
const missChnl = document.querySelector('.channelMissing');
missChnl.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${channelMissing.toString()})("${contactNo}")`
       });
});channelMissing
 
//NO INTERNET OVCC
const noIntOvcc = document.querySelector('.noInternetOVCC');
noIntOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${noInternetOVCC.toString()})("${contactNo}")`
       });
});
 
//SLOW INTERNET OVCC
const slowOvcc = document.querySelector('.slownetOVCC');
slowOvcc.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${slowInternetOVCC.toString()})("${contactNo}")`
       });
});slowInternetOVCC
 
//PAID BUT ACCOUNT STILL INACTIVE
const paidInactive = document.querySelector('.paidAccountInactive');
paidInactive.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${paidAccountInactive.toString()})("${contactNo}")`
       });
});paidAccountInactive
 
//FIELD ASSISTANCE NEEDED
const assistReq = document.querySelector('.assistanceNeeded');
assistReq.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${assistanceRequired.toString()})("${contactNo}","${causes}")`
       });
});
//###############-------END OF THIRD COLUMN---------############
//###############-------START OF FOURTH COLUMN---------############
 
//ACCESS DENIED
const noAccess = document.querySelector('.accessDenied');
noAccess.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${accessDenied.toString()})("${contactNo}")`
       });
});
 accessDenied
//PASSWORD CHANGE
const passwdChng = document.querySelector('.passwordChange');
passwdChng.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
		
        code: `(${passwordChange.toString()})("${contactNo}","${measure}")`
       });
});
 
 
//FIELD SUPPORT REQUIRED
const supportReq = document.querySelector('.supportRequired');
supportReq.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${fieldSupportRequired.toString()})("${contactNo}","${measure}","${causes}")`
       });
});
 
//COMPENSATION
const compensationRequired = document.querySelector('.compensation');
compensationRequired.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${compensation.toString()})("${contactNo}","${causes}")`
       });
});
 
//WIRE MANAGEMENT
const wireMgmt = document.querySelector('.wireManage');
wireMgmt.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${wireManagement.toString()})("${contactNo}")`
       });
});
 
//###############-------END OF FOURTH COLUMN---------############
 
//###############-------START OF FIFTH COLUMN---------############
 
//SOLVED CLEAR TV
const solvedTV= document.querySelector('.tvSolved');
solvedTV.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${solvedClearTV.toString()})("${contactNo}","${measure}","${causes}")`
       });
});
 
//MATERIAL REPLACEMENT
const replaceMaterial = document.querySelector('.materialReplacement');
replaceMaterial.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `((${materialReplacement.toString()})"${contactNo}","${measure}")`
       });
});
 
//ACCOUNT ENABLE
const holdAccount = document.querySelector('.accountDisable');
holdAccount.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${freezeAccount.toString()})("${contactNo}")`
       });
});
 
//ACCOUNT DISABLE
const unholdAccount = document.querySelector('.accountEnable');
unholdAccount.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${startAccount.toString()})("${contactNo}")`
       });
});
 
//CONNECTION SHIFT
const connectshift = document.querySelector('.connectionShift');
connectshift.addEventListener('click', async () => {
    const contactNo = callerNumber.value;
    const measure = measuresTaken.value;
    const causes = theCause.value;
    let tabs = await browser.tabs.query(
        {
            active: true,
            currentWindow: true
        }
    );
    let tab = tabs[0];
    browser.tabs.executeScript(tab.id, {
        code: `(${connectionShift.toString()})("${contactNo}","${measure}","${causes}")`
       });
});
 
//###############-------END OF FIFTH COLUMN---------############
 
// START OF FUNCTIONS
function noSignal(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has no signal displayed on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search , thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelScratches(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has scratched channels on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search, re-inserting the smart card and even factory defaulting the STB, thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function channelMissing(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team, </br> As per conversation on " + caller +", the client has channels missing on his Clear TV. Unfortunately, the issue remained unsolved from my end after tuner search and re-inserting the smart card, thus please perform the necessities asap.</br>Thank You!!!</br> The following data was verified by the client on his TV:</br>Signal Strength=0</br>Signal Quality=0 ";
}
function solvedClearTV(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team, </br> As per conversation on " + caller +", the client had "+cause+ " on his Clear TV. According to the client, the issue got solved after "+measure+".</br>Thank You!!!,";
}
function noInternetSolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client had lost connection. According to the client, "+measure+" has restored the connection.<br>Thank You!!!<br>The following data can be used for reference:<br>"
}
function noInternetUnsolved(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on " +caller+ ", the client has lost connection. On further verification, " +cause+ " seems to be the root cause of the issue. Please perform the necessities asap.<br>Thank You!!!<br>The following data can be used for reference:<br>"
}
function wireManagement(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear RF/L1 Team,<br>As per conversation on "+caller+", the client has lost connection due to wire breakage and thus has requested for wire management. Please perform the necessities asap.<br>Thank You!!!"
}
function materialReplacement(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear RF/L1 Team,<br>As per conversation on "+caller+", the client wants his broken "+measure+" replaced. Please perform the necessities asap.<br>Thank You!!!"
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
        "Dear Team,<br>As per conversation on "+caller+", the client had sluggish connection. According to the client, "+measure+" has solved the issue. <br>Thank You!!!<br>The following data can be used for reference:<br>"
}
function slowInternetUnsolved(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br> As per conversation on "+caller+", the client has sluggish connection. Unfortunately," +measure+ "did not seem to have solved the issue according to the client. Please proceed accordingly.<br>Thank You!!!<br> The following data can be used for reference:<br> "
}
function fieldSupportRequired(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear L1/RF Team,<br> As per conversation on "+caller+", the client has "+ cause +" issues. Unfortunately, " +measure+ " did not seem to have solved the issue and the client has requested for field support. Please provide the necessary support to the client asap.<br>Thank You!!!"
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
        "Dear Team,<br>As per conversation on "+caller+", the client had " +cause+ " which had been restored successfully by "+measures+", but the client is pessimistic about his connection remaining stable and thus, has requested for a follow-up call at around <strong><i>$TIME</strong></i>. Please provide the client with requested follow-up and required help.<br>Thank you!!<br>The following data can be used for reference:"
}
function assistanceRequired(caller,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Rf Team,<br>As per conversation on "+caller+", the client needs help with "+cause+ ". The client being technically naive has requested for field support, thus please provide the client with required assistance asap.<br>Thank You!!!"
}
function connectionShift(caller,measure,cause) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Rf/L1 Team,<br>As per conversation on "+caller+", the client wants to shift their connection<br> From: "+measure+" <br>To: "+cause+" <br> thus, please proceed accordingly asap.<br>Thank You!!!"
}
function ReminderCall(caller) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
    "Dear Team,<br>**********Reminder CALL RECEIVED************<br>As per conversation on "+caller+", the client's lost connection has not yet been restored. Please perform the necessities asap for the client is pretty infuriated.<br>Also, the client wants to get updates about the situation and the estimated restoration time of his connection thus, please proceed accordingly.<br>Thank You!!!<br>The following data can be used for reference:<br>"
}
function passwordChange(caller,measure) {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    textArea.innerHTML =
        "Dear Team,<br>As per conversation on "+caller+", the client wanted to change his WiFi password. The password has been changed successfully "+measure+". <br>Thank You!!"
}
