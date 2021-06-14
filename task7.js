'use strict'

const obj = {
    anonFunc: () => {
        console.log(this);
    },
    propFunc: function () {
        console.log(this);
    },
    innerFunc() {
        console.log(this);
    }
}

obj.anonFunc();
obj.propFunc();
obj.innerFunc();

// provide the output with 'use strict' and without one