//get a reference to the call or sms radio button
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSetting");
//get refference to all settings fields
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const callCostSettingElement = document.querySelector(".callCostSetting");
const warningLevelSettingElement = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElement = document.querySelector(".criticalLevelSetting");
const callTotalSettingElement = document.querySelector(".callTotalSettings");
const smsTotalSettingElement = document.querySelector(".smsTotalSettings");
const totalSettingElem = document.querySelector(".totalSettings");
const theSpaneElementThree = document.querySelector(".totalColor");
//get a reference to the add button
const theAddButtonElement = document.querySelector(".addBtnSettings");
//get a reference to the "update settings" button
const updateSettingsButton = document.querySelector(".updateSettings");
// create variables that will keep track of the settings totals
var totalCall3= 0;
var totalSms3 = 0;
var totalCost = 0;
var callCost3 =0;
var smsCost3 = 0;
var warningLevel = 0;
var criticalLevel = 0;

function settingsBill() {
  
 callCost3 = Number(callCostSettingElement.value);
 smsCost3 = Number(smsCostSettingElement.value);
 warningLevel = Number(warningLevelSettingElement.value);
 criticalLevel = Number(criticalLevelSettingElement.value);


}

updateSettingsButton.addEventListener("click", settingsBill);

function radioSettings(){

 var checkBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if(totalCost < criticalLevel){
var  billItemTypeWithSettings = checkBtn.value;

if(billItemTypeWithSettings === "call"){
    totalCall3 += callCost3;

} else if(billItemTypeWithSettings === "sms"){
    totalSms3 += smsCost3
}
}
    
 
callTotalSettingElement.innerHTML = totalCall3.toFixed(2);
smsTotalSettingElement.innerHTML = totalSms3.toFixed(2);
 totalCost = totalCall3 + totalSms3;
totalSettingElem.innerHTML = totalCost.toFixed(2);

  totalColor()
  
  
 function totalColor(){
    totalSettingElem.classList.remove("danger");
    totalSettingElem.classList.remove("warning");

if (totalCost >= warningLevel && totalCost < criticalLevel){
    totalSettingElem.classList.remove("danger");
    totalSettingElem.classList.add("warning");
}
else if (totalCost >= criticalLevel){
   totalSettingElem.classList.remove("warning");
   totalSettingElem.classList.add("danger");
   }
 }

 }

 theAddButtonElement.addEventListener('click', radioSettings);





