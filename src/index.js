import "../css/styles.css";
import {scrollz} from "./js/scrollmagicz";
import {navigation} from "./js/navigation";
import {dropList} from './js/dropList';
import {apps} from './js/HangarBay/appends'

window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);


const Button = document.getElementById("navButton");
Button.addEventListener("click", navigation.openNav);

//window.openNav = openNav;
apps.objectsTo();
dropList();

//scrollz.classTog("#aboutHold", "#fixedHead", "to-visible");
scrollz.classTog("#theSeal", "#topText", "fade-out");
scrollz.classTog("#theSeal", "#bottomText", "fade-in");
scrollz.classTog("#theSeal", "#navButton", "fade-in");
scrollz.sectionWipe();
scrollz.scrollFix();
//scrollz.pinIt();


