class OfekQuery {

    constructor(selector) {}    

    addClass(className) {}

    removeClass(className) {}

    each(func) {}

    map(func) {}
}

export var $ = selector => new OfekQuery(selector);