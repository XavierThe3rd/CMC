import {pic} from "./genElms";
import {ulhead, li1, li2, li3, li4, li5, li6, ulfoot, servDiv1, sliIdiv1, pictoHold1, servDiv2, sliIdiv2, pictoHold2, servDiv3, sliIdiv3, pictoHold3, servDiv4, sliIdiv4, pictoHold4, fdivCont, fdivCopy} from './createHolders'
import {Logo, atag1, atag2, atag3, atag4, atag5, atag6, Seal, infoH1, infoH2, infoH3, infoP1, infoP2, infoP3, infoH4, servHA, servHB, servHC, servHD, servPA, servPB, servPC, servPD, pictoA, pictoB, pictoC, pictoD, footH, copyR} from './createCall';

class AppendStuff{
    objectsTo(){
        pic.makeAppend("innerHold", Logo);
        pic.makeAppend("innerHold", ulhead);

        ulhead.appendChild(li1);
        ulhead.appendChild(li2);
        li1.appendChild(atag1);
        li2.appendChild(atag2);
        li3.appendChild(atag3);
        li4.appendChild(atag4);

        pic.makeAppend("ulIdnav", li3);
        pic.makeAppend("ulIdnav", li4);
        pic.makeAppend("fixedHead", infoH1);
        pic.makeAppend("fixedHead", infoH2);
        pic.makeAppend("infoHolder", Seal);
        pic.makeAppend("infoHolder", infoH3);
        pic.makeAppend("infoHolder", infoP1);
        pic.makeAppend("infoHolder", infoP2);
        pic.makeAppend("infoHolder", infoP3);
        pic.makeAppend("infoHolder", infoH4);
        pic.makeAppend("servHolder", servDiv1);

        servDiv1.appendChild(sliIdiv1);
        servDiv1.appendChild(pictoHold1);
        pictoHold1.appendChild(pictoA);
        servDiv1.appendChild(servHA);
        sliIdiv1.appendChild(servPA);
        pic.makeAppend("servHolder", servDiv2);
        servDiv2.appendChild(sliIdiv2);
        servDiv2.appendChild(pictoHold2);
        pictoHold2.appendChild(pictoB);
        servDiv2.appendChild(servHB);
        sliIdiv2.appendChild(servPB);
        pic.makeAppend("servHolder", servDiv3);
        servDiv3.appendChild(sliIdiv3);
        servDiv3.appendChild(pictoHold3);
        pictoHold3.appendChild(pictoC);
        servDiv3.appendChild(servHC);
        sliIdiv3.appendChild(servPC);
        pic.makeAppend("servHolder", servDiv4);
        servDiv4.appendChild(sliIdiv4);
        servDiv4.appendChild(pictoHold4);
        pictoHold4.appendChild(pictoD);
        servDiv4.appendChild(servHD);
        sliIdiv4.appendChild(servPD);

        pic.makeAppend("footHoldings", footH);
        pic.makeAppend("footHoldings", fdivCont);
        pic.makeAppend("footHoldings", fdivCopy);
        fdivCont.appendChild(ulfoot);
        ulfoot.appendChild(li5);
        ulfoot.appendChild(li6);
        li5.appendChild(atag5);
        li6.appendChild(atag6);
        fdivCopy.appendChild(copyR);
    }
}

export const apps = new AppendStuff