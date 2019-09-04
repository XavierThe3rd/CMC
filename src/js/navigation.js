class NavMe{

    closeIt(){
        const nav = document.getElementById("navId");
        const button = document.getElementById("navButton");
        nav.classList.remove("dis-alpha");
        nav.classList.add("zero-alpha");
        button.classList.remove("off");
        button.classList.add("on");
        window.setTimeout(function outAR(){
            nav.style.display = "none";
        },500);
    }

    openNav(){
        const nav = document.getElementById("navId");
        const button = document.getElementById("navButton");
        const navi = new NavMe();

        if(nav.classList.contains("zero-alpha")){
            nav.style.display = "flex";
            window.setTimeout(function toAR(){
                nav.classList.remove("zero-alpha");
                nav.classList.add("dis-alpha");
                button.classList.remove("on");
                button.classList.add("off");
            }, 50);
        
        } else{
            navi.closeIt();
        }
    }
}

export const navigation = new NavMe();