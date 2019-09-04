import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import {navigation} from './navigation';


class ScrollMagicz{
    sectionWipe() { 
        let controller = new ScrollMagic.Controller();
        let wipeAnimation = new TimelineMax()
            .fromTo("#aboutHolder", 1, {y:  "0%"}, {y: "-7%", ease: Linear.easeNone})             
            new ScrollMagic.Scene({
                triggerElement: "#headsUp",
                triggerHook: 0,
 
            }) 
            .setPin("#headsUp", {pushFollowers: false})
            .setTween(wipeAnimation)
            //.addIndicators() 
            .addTo(controller);
    };

    classTog(trig, id, clazz){
        let controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            triggerElement: trig,
            triggerHook: 0
        })
        .setClassToggle(id, clazz)
        //.addIndicators() 
        .addTo(controller);
    }

    pinIt(){
        let controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({triggerElement: "#aboutHold", triggerHook: 0})
        .setPin("#fixedHead", {pushFollowers: true})
        //.addIndicators() 
        .addTo(controller);
    }

    scalingFor(scale, top){
        const head = document.getElementById("fixedHead");
        if (window.pageYOffset > scale){
            head.style.position = "fixed";
            head.style.top = "0px";
        } else{
            head.style.position = "absolute";
            head.style.top = top;
        }
    }

    scrollFix(){
        window.onscroll = function(){
            const scale = new ScrollMagicz();
            scale.scalingFor(220, "220px");

            if(window.innerWidth > 760){
                scale.scalingFor(330, "330px");
            }
            if(window.innerWidth > 1020){
                scale.scalingFor(490, "490px");
            }
        }
    }
}

export const scrollz = new ScrollMagicz();