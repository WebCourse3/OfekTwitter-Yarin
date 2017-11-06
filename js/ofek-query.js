class OfekQuery {

    constructor(selector) {
        this.elements = [];
        let currentlySelected = [];
        const tokens = selector.split(" ");

        if (!tokens.length) { return; }

        (function handleFirstToken() {
            const firstToken = tokens[0];
            if (firstToken.startsWith("#")) {
                currentlySelected.push(document.getElementsById(firstToken.substring(1)));
            } else if (firstToken.startsWith(".")) {
                currentlySelected = Array.from(document.getElementsByClassName(firstToken.substring(1)));
            } else {
                currentlySelected = Array.from(document.getElementsByTagName(firstToken));
            }
            tokens.shift();
        })();

        function getAllDescendants(element, selector) {
            let descendants = [];

            Array.from(element.children).forEach(function getAllChildren(element) {
                if (selector.startsWith("#")) {
                    if (element.id === selector.substring(1)) { descendants.push(element); }
                } else if (selector.startsWith(".")) {
                    if (element.classList.contains(selector.substring(1))) { descendants.push(element); }
                } else {
                    if (element.tagName.toLowerCase() === selector.toLowerCase()) { descendants.push(element); }
                }

                Array.from(element.children).forEach(getAllChildren);
            });

            return descendants;
        }

        tokens.forEach(token => {
            let runOn = currentlySelected.slice(0);
            currentlySelected = [];
            runOn.forEach(e => currentlySelected.push(...getAllDescendants(e, token)));
        });

        this.elements = currentlySelected;
    }

    addClass(className) {
        this.each( e => e.classList.add(className) );
        console.log(this.elements);
    }

    removeClass(className) {
        this.each( e => e.classList.remove(className) );
        console.log(this.elements);
    }

    each(func) {
        this.elements.forEach(func);
        console.log(this.elements);
    }

    map(func) {
        return this.elements.map(func);
        console.log(this.elements);
    }
}

export var $ = selector => new OfekQuery(selector);