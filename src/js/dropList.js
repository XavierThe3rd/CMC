
export function dropList(){
    let foot = document.getElementById("theFooter");
    let inPut = document.getElementById("inputField");
    inPut.addEventListener("focus", toList);

    function toList(){
        foot.classList.add("up-foot");
        foot.classList.remove("down-foot");
        inPut.addEventListener("focusout", outList);
    }

    function outList(){
        foot.classList.add("down-foot");
        foot.classList.remove("up-foot");
        inPut.removeEventListener("focus", toList);
        window.setTimeout(resetInst, 500);
    }

    function resetInst(){
        inPut.addEventListener("focus", toList);
        inPut.removeEventListener("focusout", outList);
    }
}