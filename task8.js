'use strict'

const globalFuncExpr = function () {
    console.log(this);
}

const globalArrowFuncExpr = () => {
    console.log(this);
}

function globalFuncDecl() {
    console.log(this)
}

globalFuncExpr();
globalArrowFuncExpr();
globalFuncDecl();

// provide the output with 'use strict' and without one
