
class MakeSvg{
    createPics( id, clazz1, clazz2){
        let crt = document.createElement("object");
        crt.setAttribute("id", id);
        crt.classList.add(clazz1, clazz2);
        crt.setAttribute("type", "image/svg+xml");
        return crt;
    }

    createH1tags(id){
        let htag1 = document.createElement("h1");
        htag1.setAttribute("id", id);
        return htag1;
    }

    createH2tags(id, clazz){
        let htag2 = document.createElement("h2");
        htag2.setAttribute("id", id);
        htag2.classList.add(clazz);
        return htag2;
    }

    createH3tags(id){
        let htag3 = document.createElement("h3");
        htag3.setAttribute("id", id);
        return htag3;
    }

    createH4tags(){
        let htag4 = document.createElement("h4");
        return htag4;
    }

    createPtags(){
        let ptag = document.createElement("p");
        return ptag;
    }

    createLitags(id, clazz1, clazz2){
        let li = document.createElement("li");
        li.setAttribute("id", id);
        li.classList.add(clazz1, clazz2);
        return li;
    }

    createAtags(){
        let a = document.createElement("a");
        return a;
    }

    createServHolds(clazz1, clazz2, clazz3){
        let div = document.createElement("div");
        div.classList.add("flex", clazz1, clazz2, clazz3);
        return div;
    }

    createUl(id, clazz1, clazz2){
        let ul = document.createElement("ul");
        ul.setAttribute("id", id);
        ul.classList.add(clazz1, clazz2);
        return ul;
    }

    makeAppend(id, app){
        let thing = document.getElementById(id);
        thing.appendChild(app);
        return thing;
    }
}

export const pic = new MakeSvg();



