
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "60" }, function (response) {
        console.log(response);
    });
});