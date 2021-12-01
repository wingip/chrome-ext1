// var w2gFunc1 = function () {
//     alert("fff");
// }

// chrome.contextMenus.create({
//     "id": "w2gFunc1",
//     "title": "W2G Func1",
//     "contexts": ["all"]
// }, w2gFunc1);

////////////////////////////////////////////////////////
// function w2gFunc(info, tab) {
//     console.log('info', info.menuItemId);
//     switch (info.menuItemId) {
//         case "func1":
//             console.log("gggg");
//             alert("ggg");
//             break;
//         case "func2":
//             console.log("hhhhh");
//             alert("hhh");
//             break;
//     }
//     return;
// }
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.contextMenus.create({
//         title: "W2G Func1",
//         contexts: ["selection"],
//         id: "func1"
//     });
//     // chrome.contextMenus.create({
//     //     title: "W2G Func2",
//     //     contexts: ["selection"],
//     //     id: "func2"
//     // });
//     chrome.contextMenus.onClicked.addListener(w2gFunc);
// });
///////////////////////////////////////////////////////////

const CONTEXT_MENU_ID = "MY_CONTEXT_MENU";
function getword(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({  
    url: "http://www.google.com/search?q=" + info.selectionText
  });
}
chrome.contextMenus.create({
  title: "Search: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(getword);
