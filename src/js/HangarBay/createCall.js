import {pic} from './genElms';

//var Logo = pic.createPics("logoPrime", "top", null);
 var atag1 = pic.createAtags();
 var atag2 = pic.createAtags();
 var atag3 = pic.createAtags();
 var atag4 = pic.createAtags();
 var atag5 = pic.createAtags();
 var atag6 = pic.createAtags();

 var Logo = pic.createPics("logoPrime", "grid10", "auto");
 var Seal = pic.createPics(null, "seal", null);
 var infoH1 = pic.createH1tags("topText");
 var infoH2 = pic.createH2tags("bottomText", "opacity-none");
 var infoH3 = pic.createH3tags("theSeal");
 var infoP1 = pic.createPtags();
 var infoP2 = pic.createPtags();
 var infoP3 = pic.createPtags();
 var infoH4 = pic.createH4tags();

 var servHA = pic.createH2tags(null, null);
 var servPA = pic.createPtags();
 var pictoA = pic.createPics(null, null, null);
 var servHB = pic.createH2tags(null, null);
 var servPB = pic.createPtags();
 var pictoB = pic.createPics(null, null, null);
 var servHC = pic.createH2tags(null, null);
 var servPC = pic.createPtags();
 var pictoC = pic.createPics(null, null, null);
 var servHD = pic.createH2tags(null, null);
 var servPD = pic.createPtags();
 var pictoD = pic.createPics(null, null, null);

 var footH = pic.createH3tags(null);
 var copyR = pic.createPtags();

fetch('./data.json')
    .then(response => {
    return response.json()
})
.then(data => {
    Logo.setAttribute("data", data.images.LogoPrime);

    atag1.setAttribute("href", data.refTags.vaultRef);
    atag1.textContent = data.refTags.vaultText;
    atag2.setAttribute("href", data.refTags.kioskRef);
    atag2.textContent = data.refTags.kioskText;
    atag3.setAttribute("href", data.refTags.vaultRef);
    atag3.textContent = data.refTags.vaultText;
    atag4.setAttribute("href", data.refTags.kioskRef);
    atag4.textContent = data.refTags.kioskText;
    atag5.setAttribute("href", data.refTags.contactRefA);
    atag5.textContent = data.refTags.contactTextA;
    atag6.setAttribute("href", data.refTags.contactRefB);
    atag6.textContent = data.refTags.contactTextB;

    infoH1.textContent = data.infoText.HeadingA;
    infoH2.textContent = data.infoText.HeadingB;

    Seal.setAttribute("data", data.images.ShieldSeal);
    infoH3.textContent = data.infoText.HeadingC;
    infoP1.textContent = data.infoText.PspanA;
    infoP2.textContent = data.infoText.PspanB;
    infoP3.textContent = data.infoText.PspanC;
    infoH4.textContent = data.infoText.HeadingD;

    servHA.textContent = data.Services.HeadingA;
    servPA.textContent = data.Services.ParaA;
    pictoA.setAttribute("data", data.images.VerifyPicto);
    servHB.textContent = data.Services.HeadingB;
    servPB.textContent = data.Services.ParaB;
    pictoB.setAttribute("data", data.images.ValidPicto);
    servHC.textContent = data.Services.HeadingC;
    servPC.textContent = data.Services.ParaC;
    pictoC.setAttribute("data", data.images.VaultPicto);
    servHD.textContent = data.Services.HeadingD;
    servPD.textContent = data.Services.ParaD;
    pictoD.setAttribute("data", data.images.QrPicto);

    footH.textContent = data.Footer.Heading;
    copyR.textContent = data.Footer.CopyRight;
});


export {Logo, atag1, atag2, atag3, atag4, atag5, atag6, Seal, infoH1, infoH2, infoH3, infoP1, infoP2, infoP3, infoH4, servHA, servHB, servHC, servHD, servPA, servPB, servPC, servPD, pictoA, pictoB, pictoC, pictoD, footH, copyR};