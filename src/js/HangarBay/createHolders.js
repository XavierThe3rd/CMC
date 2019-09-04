import {pic} from './genElms';

var li1 = pic.createLitags(null, null, null);
var li2 = pic.createLitags(null, null, null);
var li3 = pic.createLitags("aId1", "flex", "abs");
var li4 = pic.createLitags("aId2", "flex", "abs");
var ulfoot = pic.createUl();
var li5 = pic.createLitags(null, null, null);
var li6 = pic.createLitags(null, null, null);

var servDiv1 = pic.createServHolds("services", "column", "point");
var sliIdiv1 = pic.createServHolds("abs", "left", "right");
var pictoHold1 = pic.createServHolds("picto-hold", null, null);
var servDiv2 = pic.createServHolds("services", "column", "point");
var sliIdiv2 = pic.createServHolds("abs", "left", "right");
var pictoHold2 = pic.createServHolds("picto-hold", null, null);
var servDiv3 = pic.createServHolds("services", "column", "point");
var sliIdiv3 = pic.createServHolds("abs", "left", "right");
var pictoHold3 = pic.createServHolds("picto-hold", null, null);
var servDiv4 = pic.createServHolds("services", "column", "point");
var sliIdiv4 = pic.createServHolds("abs", "left", "right");
var pictoHold4 = pic.createServHolds("picto-hold", null, null);

var fdivCont = pic.createServHolds("contact-hold", "auto", null);
var fdivCopy = pic.createServHolds("line", "center", "grid10");

export {li1, li2, li3, li4, li5, li6, ulfoot, servDiv1, sliIdiv1, pictoHold1, servDiv2, sliIdiv2, pictoHold2, servDiv3, sliIdiv3, pictoHold3, servDiv4, sliIdiv4, pictoHold4, fdivCont, fdivCopy};